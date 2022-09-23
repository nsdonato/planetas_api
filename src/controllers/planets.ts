import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const getFindOne = async (req: Request, res: Response) => {
	const { name } = req.params

	const planet = await prisma.planet.findFirst({
		where: {
			name: {
				startsWith: name,
				mode: 'insensitive',
			},
		},
		include: {
			geology: true,
			images: true,
			overview: true,
			structure: true,
		},
	})
	if (!planet) return res.status(404).send(`Not found this planet: ${name}`)

	return res.json(planet)
}
