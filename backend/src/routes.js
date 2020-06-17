const express = require('express')

const EscoteirosController = require('./controllers/EscoteirosController')
const AtividadesController = require('./controllers/AtividadesController')
const { buscar } = require('./controllers/EscoteirosController')

const routes = express.Router()
routes.get('/escoteiros', EscoteirosController.index)
routes.get('/escoteiros/login',function(req,res){
    return EscoteirosController.buscar(req.query.email, res)
});
routes.post('/escoteiros',function(req,res){
    return EscoteirosController.create(req, res)
});

routes.get('/atividades', AtividadesController.index)
routes.post('/atividades', AtividadesController.create)
routes.delete('/atividades/:id', AtividadesController.delete)

module.exports = routes;
