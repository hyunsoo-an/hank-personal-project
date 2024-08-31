export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('insects').del()

  // Inserts seed entries
  await knex('insects').insert([
    { id: 1, name: '', image: '' },
    { id: 2, name: '', image: '' },
    { id: 3, name: '', image: '' },
  ])
}
