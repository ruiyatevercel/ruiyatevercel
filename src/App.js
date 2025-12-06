// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("正在连接后端 API...");
  const [error, setError] = useState(null);

  useEffect(() => {
    // 调用后端的 /api/hello 路由
    // Vercel 会自动将相对路径 /api/hello 转发给 Serverless Function
    fetch('/api/hello') 
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP 错误! 状态码: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setMessage(data.message + " @ " + data.timestamp);
      })
      .catch(err => {
        console.error("API 调用失败:", err);
        setError(`API 调用失败: ${err.message}`);
        setMessage("后端服务未响应，请检查 Vercel 部署日志。");
      });
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Vercel 全栈演示</h1>
      <p>这是一个 React (前端) 调用 Express Serverless (后端) 的示例。</p>
      
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '20px', backgroundColor: '#f9f9f9' }}>
        <h2>来自后端的消息:</h2>
        <p style={{ fontWeight: 'bold', color: error ? 'red' : 'green' }}>
          {message}
        </p>
        {error && <p style={{ color: 'red' }}>错误详情: {error}</p>}
      </div>
      
      <p style={{ marginTop: '30px', fontSize: 'small', color: '#666' }}>
        前端代码 (`src/App.js`) 正在调用 `/api/hello` 路由，
        该路由由 `api/index.js` (Express) 处理。
      </p>
    </div>
  );
}

export default App;