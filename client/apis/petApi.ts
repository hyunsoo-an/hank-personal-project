import request from 'superagent'
import Pet from '../../models/pet'

export async function getPets() {
  const result = await request.get('/api/v1/pets')
  return result.body
}

export async function getPetById(id: number) {
  const result = await request.get(`/api/v1/pets/${id}`)
  return result.body
}

export async function deletePet(id: number) {
  const result = await request.delete(`/api/v1/pets/${id}`)
  return result.statusCode
}

export async function addPet(newPet: Pet) {
  const result = await request.post('/api/v1/pets/').send(newPet)
  return result.statusCode
}
