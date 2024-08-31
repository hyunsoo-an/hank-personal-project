import connection from './connection.ts'
import { Pet } from '../../models/pet.ts'

export async function getAllPets(db = connection): Promise<Pet[]> {
  return db('pet').select()
}
