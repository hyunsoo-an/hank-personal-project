import Router from 'express'
import * as db from '../db/db.ts'

const router = Router()

// Get 'api/v1/pets' getAllPets
router.get('/', async (req, res) => {
  try {
    const pets = await db.getAllPets()
    res.json(pets)
  } catch {
    res.sendStatus(500)
  }
})

// Get 'api/v1/pets/:id' getPetById
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const pets = await db.getPetById(id)
    res.json(pets)
  } catch {
    res.sendStatus(500)
  }
})

// Delete 'api/v1/pets/:id' delectPet
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const pets = await db.deletePet(id)
    res.json(pets)
  } catch {
    res.sendStatus(500)
  }
})

// POST 'api/v1/Pets' addPet
router.post('/', async (req, res) => {
  const newPet = req.body
  try {
    await db.addPet(newPet)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router
