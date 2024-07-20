const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Roteamento para lidar com URLs que não correspondem a arquivos específicos
app.get('*', (req, res) => {
  // Serve o index.html para qualquer URL que não seja um arquivo estático
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
      });
      