export async function up(knex) {
  return knex.schema.createTable('insects', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('insects')
}
