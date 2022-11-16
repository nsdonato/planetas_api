import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getPlanet = async (name: string) => {
	const planetResponse = await prisma.planet.findFirst({
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

	return planetResponse
}

export default {
	getPlanet,
}
