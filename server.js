const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Roteamento para remover a extensão .html
app.get('/*.html', (req, res) => {
  const filePath = path.join(__dirname, 'public', req.path);
    res.sendFile(filePath);
    });

    app.get('/*', (req, res) => {
      const filePath = path.join(__dirname, 'public', req.path + '.html');
        res.sendFile(filePath, (err) => {
            if (err) {
                  res.status(404).send('Página não encontrada');
                      }
                        });
                        });

                        app.listen(port, () => {
                          console.log(`Servidor rodando em http://localhost:${port}`);
                          });
                          