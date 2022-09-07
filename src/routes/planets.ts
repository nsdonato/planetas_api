import { Router } from 'express'
import { getAllPlanets, getFindOne } from '@controllers/planets'

const router = Router()

router.get('/', getAllPlanets)

router.get('/:id', getFindOne)

export default router
