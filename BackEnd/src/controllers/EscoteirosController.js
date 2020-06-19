const crypto = require('crypto')
const connection = require('../database/connection')
const { json } = require('express')

module.exports = {
    async index(request, response) {
        const escoteiros = await connection('escoteiros').select('*')

        return response.json(escoteiros)
    },

    async create(request, response) {
        try {
            const { nome, email, senha } = request.body;

            const id = crypto.randomBytes(4).toString('HEX');

            let users = await connection('escoteiros').select('email').where('email', email).first();
            
            if(users == undefined || users.email != email) {
                console.log("entrou");
                await connection('escoteiros').insert({
                    id,
                    email,
                    senha,
                    nome
                })
                return response.json({ id })
            } else {
                return response.send("409")
            }
        }
        catch (err) {
            console.log(err);
        }

    },

    async buscar(req, response) {

        const escoteiros = await connection('escoteiros').select("*").where("email", req);

        return response.json(escoteiros)
    }

}