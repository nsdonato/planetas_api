import { Router } from 'express'
import { getFindOne } from '@controllers/planets'

const router = Router()

router.get('/:id', getFindOne)

export default router
