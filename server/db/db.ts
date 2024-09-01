import connection from './connection'
import Pet from '../../models/pet.ts'

const db = connection

// Getting all pets
export function getAllPets(): Promise<Pet[]> {
  return db('pets').select('id', 'name', 'image')
}

// Getting pet by id
export function getPetById(id: number): Promise<Pet[]> {
  return db('pets').where({ id }).select('id', 'name', 'image')
}

// Deleting pet
export function deletePet(id: number) {
  return db('pets').where({ id }).delete()
}

// Adding pet
export function addPet(newPet: Pet) {
  return db('pets').insert(newPet)
}
