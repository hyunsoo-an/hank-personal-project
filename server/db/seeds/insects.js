export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('insects').del()

  // Inserts seed entries
  await knex('insects').insert([
    { id: 1, name: '', image: '' },
    { id: 2, name: '', image: '' },
    { id: 3, name: '', image: '' },
    { id: 4, name: '', image: '' },
    { id: 5, name: '', image: '' },
    { id: 6, name: '', image: '' },
    { id: 7, name: '', image: '' },
    { id: 8, name: '', image: '' },
    { id: 9, name: '', image: '' },
    { id: 10, name: '', image: '' },
    { id: 11, name: '', image: '' },
    { id: 12, name: '', image: '' },
    { id: 13, name: '', image: '' },
    { id: 14, name: '', image: '' },
    { id: 15, name: '', image: '' },
    { id: 16, name: '', image: '' },
    { id: 17, name: '', image: '' },
    { id: 18, name: '', image: '' },
    { id: 19, name: '', image: '' },
    { id: 20, name: '', image: '' },
    { id: 21, name: '', image: '' },
    { id: 22, name: '', image: '' },
    { id: 23, name: '', image: '' },
    { id: 24, name: '', image: '' },
    { id: 25, name: '', image: '' },
    { id: 26, name: '', image: '' },
    { id: 27, name: '', image: '' },
    { id: 28, name: '', image: '' },
    { id: 29, name: '', image: '' },
    { id: 30, name: '', image: '' },
    { id: 31, name: '', image: '' },
    { id: 32, name: '', image: '' },
  ])
}
