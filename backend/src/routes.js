const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create ); 

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
module.exports = routes;

/**
 * Rota/ Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

 /**
  * Tipos de parâmetro:
  * 
  * Query params: Parâmetros nomeados enviados na rota após "?"  (filtro, paginação)
  * Route params: Parâmetros utilizados para identificar recursos
  * Request Body? Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   * KNEX
   */