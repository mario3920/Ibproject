const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const escoteiros = await connection('escoteiros').select('*')
     
         return response.json(escoteiros)
     },

    async create(request, response) {
        const { email, senha } = request.body;

        const id = crypto.randomBytes(4).toString('HEX')

        await connection('escoteiros').insert({
            id,
            email,
            senha
        })

        return response.json({ id })
    }
}