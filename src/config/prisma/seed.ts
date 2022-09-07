import { PrismaClient } from '@prisma/client'
import planetaSeeder from './seeders/planets'

const prisma = new PrismaClient()

async function seed() {
	const planets = planetaSeeder.map((item) => {
		return prisma.planet.create({
			data: item,
		})
	})

	await Promise.all(planets)

	console.log(planets)
}

seed()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
