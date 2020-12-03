
exports.up = function(knex) {
    return knex.schema.createTable('notes', table => {
        table.increments('id').primary()
        table.string('title')
        table.string('content')
        table.timestamp('date_created').defaultTo(knex.fn.now())
        table.integer('author_id')
        table.integer('patient_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('notes')
};
