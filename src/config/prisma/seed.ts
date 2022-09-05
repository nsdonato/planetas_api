import { PrismaClient } from '@prisma/client'
import planetaSeeder from './seeders/planeta'

const prisma = new PrismaClient()

async function seed() {
	const planetas = planetaSeeder.map((item) => {
		return prisma.planeta.create({
			data: item,
		})
	})

	await Promise.all(planetas)
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
