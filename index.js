const express = require('express');
const router = require('./router');
const errorMiddleware = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.listen(3000, () => console.log('Ouvindo na porta 3000!'));

// Não remova esse endpoint, ele está presente para o avaliador funcionar corretamente
app.get('/', (request, response) => {
  response.send();
});

app.use(router);
app.use(errorMiddleware);

module.exports = app;
