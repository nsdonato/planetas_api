import { Request, Response } from 'express'
import planetService from 'services/planets'

export const getFindOne = async (req: Request, res: Response) => {
	const { name } = req.params
	const planet = await planetService.getPlanet(name)

	if (!planet) return res.status(404).send(`Not found this planet: ${name}`)

	return res.json(planet)
}
