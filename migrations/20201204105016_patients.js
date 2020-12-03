
exports.up = function(knex) {
    return knex.schema.createTable('patients', table => {
        table.increments('id').primary()
        table.string('first_name')
        table.string('last_name')
        table.string('nickname')
        table.string('img')
        table.string('birthdate')
        table.string('gender')
        table.string('phone')
        table.string('address')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('patients')
};
