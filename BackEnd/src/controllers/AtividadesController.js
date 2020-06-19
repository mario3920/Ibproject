const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        console.log("teste");
        
        const atividades = await connection('atividades').select('*')

        return response.json(atividades)
    },

    async create(request, response) {
        const { title, ramo, tempo, description, escoteiros_id } = request.body
        
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
        const { id, escoteiros_id } = request.body

        const atividades = await connection('atividades')
            .select('escoteiros_id')
            .where('id', id)
            .first()
            
        if (atividades.escoteiros_id != escoteiros_id) {
            return response.send(401)
        }

        await connection('atividades').where('id', id).delete()
        
        return response.status(204).send()
    }
}