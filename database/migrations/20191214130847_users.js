    //SEMI_STANDARD
    exports.up = function(knex) {
        return knex.schema.createTable('users', users => {
        users.increments();
        users
            .string('username', 128)
            .notNullable()
            .unique();//same user name cant be used more than once
        users.string('password', 128).notNullable();
        });
    };
    exports.down = function(knex, Promise) {
        return knex.schema.dropTableIfExists('users');
    };
