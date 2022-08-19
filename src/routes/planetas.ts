import { Router } from 'express'
import { getAllPlanetas } from '@controllers/planetas'

const router = Router()

router.get('/', getAllPlanetas)

export default router
