import { Router } from 'express'
import { getFindOne } from '@controllers/planets'

const router = Router()

router.get('/:name', getFindOne)
router.get('/', (req, res) => {
	res.send('Hello World!')
})

export default router
