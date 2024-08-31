export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('pets').del()

  // Inserts seed entries
  await knex('pets').insert([
    { id: 1, name: 'Cat', image: '' },
    { id: 2, name: 'Baebsae (Korean Warbler)', image: '' },
    { id: 3, name: 'Lion Cub', image: '' },
    { id: 4, name: 'Piglet', image: '' },
    { id: 5, name: 'Flying Squirrel', image: '' },
    { id: 6, name: 'Dog', image: '' },
    { id: 7, name: 'Komodo Dragon', image: '' },
    { id: 8, name: 'Parrot', image: '' },
    { id: 9, name: 'Baby Hippo', image: '' },
    { id: 10, name: 'Chick', image: '' },
    { id: 11, name: 'Blobfish', image: '' },
    { id: 12, name: 'Whale', image: '' },
    { id: 13, name: 'Snake', image: '' },
    { id: 14, name: 'Axolotl', image: '' },
    { id: 15, name: 'Great White Shark', image: '' },
    { id: 16, name: 'Horse', image: '' },
    { id: 17, name: 'Worm', image: '' },
    { id: 18, name: 'Duck', image: '' },
    { id: 19, name: 'White Eagle', image: '' },
    { id: 20, name: 'Sea Monkey', image: '' },
    { id: 21, name: 'Snail', image: '' },
    { id: 22, name: 'Elephant', image: '' },
    { id: 23, name: 'Ant', image: '' },
    { id: 24, name: 'Cow', image: '' },
    { id: 25, name: 'Sea Cucumber', image: '' },
    { id: 26, name: 'Monkey', image: '' },
    { id: 27, name: 'Cockroach', image: '' },
    { id: 28, name: 'Raccoon', image: '' },
    { id: 29, name: 'Ferret', image: '' },
    { id: 30, name: 'Guinea Pig', image: '' },
    { id: 31, name: 'Hamster', image: '' },
    { id: 32, name: 'Hedgehog', image: '' },
  ])
}
