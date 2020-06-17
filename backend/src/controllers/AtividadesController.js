const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        console.log("teste");
        
        const atividades = await connection('atividades').select('*')

        return response.json(atividades)
    },

    async create(request, response) {
        const { title, ramo, tempo, description } = request.body
        const escoteiros_id = request.headers.authorization

        const { id } = await connection('atividades').insert({
            title,
            ramo,
            tempo,
            description,
            escoteiros_id
        })
        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params
        const escoteiros_id = request.headers.authorization

        const atividades = await connection('atividades')
            .where('id', id)
            .select('escoteiros_id')
            .first()

        if (atividades.escoteiros_id != escoteiros_id) {
            return response.status(401)
        }

        await connection('atividades').where('id', id).delete()
        
        return response.status(204).send()
    }
}