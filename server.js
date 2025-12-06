const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Vercel 提供的端口

// 提供静态文件服务，确保 public 文件夹中的内容能被正确加载
app.use(express.static('public'));

// 处理根路径请求，返回 index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 后端计算接口
app.get('/calculate', (req, res) => {
  const { num1, operator, num2 } = req.query;
  let result;

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  switch (operator) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      if (n2 === 0) {
        result = 'Error: Division by zero';
      } else {
        result = n1 / n2;
      }
      break;
    default:
      result = 'Error: Invalid operator';
  }

  res.json({ result });
});

// 启动应用
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
