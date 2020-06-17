exports.up = function(knex) {
    return knex.schema.createTable('escoteiros', function (table){
        table.string('id').primary();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('nome').notNullable();
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('escoteiros');
};
