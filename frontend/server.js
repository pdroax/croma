const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// Permitir requisições apenas do domínio 'cromafilms.com.br'
app.use(cors({
    origin: 'https://www.cromafilms.com.br'
}));


app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});


app.use((req, res, next) => {
  if (req.protocol === 'http') {
      return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});
