// api/index.js
const express = require('express');
const cors = require('cors'); 
const app = express();

// 允许所有域名的前端访问这个 API
app.use(cors());

// 定义一个 GET 请求路由。
// Vercel 会自动将这个路由映射为： [你的域名]/api/hello
app.get('/api/hello', (req, res) => {
    // 返回一个 JSON 对象给前端
    res.json({ 
        message: "Hello from the Vercel Serverless Function! (Backend is running)",
        timestamp: new Date().toLocaleTimeString()
    });
});

// **关键：** 导出 Express 应用实例供 Vercel 使用
module.exports = app;