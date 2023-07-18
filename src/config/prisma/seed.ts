import { PrismaClient } from '@prisma/client'
import planetaSeeder from './seeders/planets'

const prisma = new PrismaClient()

async function seed() {
	await prisma.$transaction([
		...planetaSeeder.map((item) => {
			return prisma.planet.create({
				data: item,
			})
		}),
	])
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
