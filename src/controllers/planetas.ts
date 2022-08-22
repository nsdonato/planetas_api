import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const getAllPlanetas = async (req: Request, res: Response) => {
	const planets = await prisma.planetas.findMany()

	return res.json(planets)
}

export const getFindOne = async (req: Request, res: Response) => {
	const { id } = req.params
	const planetParams =
		id.charAt(0).toUpperCase() + id.slice(1).toLowerCase().trim()

	const planet = await prisma.planetas.findUnique({
		where: { name: planetParams },
	})
	if (!planet)
		return res.status(404).send(`Not found this planet: ${planetParams}`)

	return res.json(planet)
}
