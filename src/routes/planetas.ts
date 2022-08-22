import { Router } from 'express'
import { getAllPlanetas, getFindOne } from '@controllers/planetas'

const router = Router()

router.get('/', getAllPlanetas)

router.get('/:id', getFindOne)

export default router
