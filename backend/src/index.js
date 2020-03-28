const express = require('express');
const routes = require('./routes'); //Pq não é um pacote, tenho que passar como ./( ponto barra). caso tivesse que voltar seria ../(ponto ponto barra)
const cors = require('cors');
const app = express();

app.use(cors({}));
app.use(express.json());
app.use(routes);

app.listen(3333);