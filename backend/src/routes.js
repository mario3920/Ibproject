const express = require('express')

const EscoteirosController = require('./controllers/EscoteirosController')
const AtividadesController = require('./controllers/AtividadesController')

const routes = express.Router()

routes.get('/escoteiros' , EscoteirosController.index)
routes.post('/escoteiros', EscoteirosController.create)

routes.get('/atividades', AtividadesController.index)
routes.post('/atividades', AtividadesController.create)
routes.delete('/atividades/:id', AtividadesController.delete)
routes.get('/teste', (req, res, next) =>{
    res.send("Hello")
})

module.exports = routes;
