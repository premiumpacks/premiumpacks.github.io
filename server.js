const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Serve o index.html para qualquer rota não especificada
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'public', req.path);
    res.sendFile(filePath, (err) => {
        if (err) {
              res.sendFile(path.join(__dirname, 'public', 'index.html'));
                  }
                    });
                    });

                    app.listen(port, () => {
                      console.log(`Servidor rodando em http://localhost:${port}`);
                      });
                      