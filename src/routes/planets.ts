import { Router } from 'express'
import { getFindOne } from '@controllers/planets'

const router = Router()

router.get('/:name', getFindOne)

export default router
