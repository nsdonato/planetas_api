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
			images: {
				select: {
					planet: {
						select: {
							id: true,
							small: true,
							medium: true,
							large: true,
						},
					},
					geology: {
						select: {
							id: true,
							small: true,
							medium: true,
							large: true,
						},
					},
					internal: {
						select: {
							id: true,
							small: true,
							medium: true,
							large: true,
						},
					},
				},
			},
			overview: true,
			structure: true,
		},
	})

	return planetResponse
}

export default {
	getPlanet,
}
