const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const alunosRouter = require('./routes/alunos');
const setupSwagger = require('./swagger');
import { injectSpeedInsights } from '@vercel/speed-insights';


const app = express();
app.use(bodyParser.json());

app.use('/alunos', alunosRouter);

setupSwagger(app);

sequelize.sync()
  .then(() => {
    console.log('Banco de dados conectado');
    app.listen(3077, () => {
      console.log('Servidor rodando na porta 3077');
    });
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

  injectSpeedInsights();
