exports.up = function(knex) {
    return knex.schema.createTable('atividades', function(table){
        table.increments()

        table.string('title').notNullable()
        table.string('ramo').notNullable()
        table.decimal('tempo').notNullable()
        table.string('description').notNullable()
        
        table.string('escoteiros_id').notNullable()

        table.foreign('escoteiros_id').references('id').inTable('escoteiros')
    })
  };

exports.down = function(knex) {
  return knex.schema.dropTable('atividades')
};