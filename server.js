const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Roteamento para adicionar a extensão .html
app.get('/*', (req, res) => {
  const filePath = path.join(__dirname, 'public', req.path + '.html');
    res.sendFile(filePath, (err) => {
        if (err) {
              // Se o arquivo não for encontrado, servir o index.html
                    res.sendFile(path.join(__dirname, 'public', 'index.html'));
                        }
                          });
                          });

                          app.listen(port, () => {
                            console.log(`Servidor rodando em http://localhost:${port}`);
                            });
                            