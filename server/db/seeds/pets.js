export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('pets').del()

  // Inserts seed entries
  await knex('pets').insert([
    { id: 1, name: 'Cat', image: 'cat.jpg' },
    { id: 2, name: 'Dog', image: 'dog.jpg' },
    { id: 3, name: 'Lion Cub', image: 'lion-cub.jpg' },
    { id: 4, name: 'Piglet', image: 'piglet.jpg' },
    { id: 5, name: 'Flying Squirrel', image: 'flying-squirrel.jpg' },
    { id: 6, name: 'Rabbit', image: 'rabbit.jpg' },
    { id: 7, name: 'Komodo Dragon', image: 'komodo-dragon.jpg' },
    { id: 8, name: 'Parrot', image: 'parrot.jpg' },
    { id: 9, name: 'Baby Hippo', image: 'baby-hippo.jpg' },
    { id: 10, name: 'Chick', image: 'chick.jpg' },
    { id: 11, name: 'Blobfish', image: 'blobfish.jpg' },
    { id: 12, name: 'Whale', image: 'whale.jpg' },
    { id: 13, name: 'Snake', image: 'snake.jpg' },
    { id: 14, name: 'Axolotl', image: 'axolotl.jpg' },
    { id: 15, name: 'Great White Shark', image: 'great-white-shark.jpg' },
    { id: 16, name: 'Horse', image: 'horse.jpg' },
    { id: 17, name: 'Worm', image: 'worm.jpg' },
    { id: 18, name: 'Duck', image: 'duck.jpg' },
    { id: 19, name: 'White Eagle', image: 'white-eagle.jpg' },
    { id: 20, name: 'Sea Monkey', image: 'sea-monkey.jpg' },
    { id: 21, name: 'Snail', image: 'snail.webp' },
    { id: 22, name: 'Elephant', image: 'elephant.jpg' },
    { id: 23, name: 'Ant', image: 'ant.jpg' },
    { id: 24, name: 'Cow', image: 'cow.jpg' },
    { id: 25, name: 'Sea Cucumber', image: 'sea-cucumber.jpg' },
    { id: 26, name: 'Monkey', image: 'monkey.jpg' },
    { id: 27, name: 'Leopard Gecko', image: 'leopard-gecko.jpg' },
    { id: 28, name: 'Raccoon', image: 'raccoon.jpg' },
    { id: 29, name: 'Ferret', image: 'ferret.jpg' },
    { id: 30, name: 'Guinea Pig', image: 'guinea-pig.jpg' },
    { id: 31, name: 'Hamster', image: 'hamster.jpg' },
    { id: 32, name: 'Hedgehog', image: 'hedgehog.jpg' },
  ])
}
