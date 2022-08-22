import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import Server from './server'

dotenv.config()

const server = new Server()

server.listen()

const prisma = new PrismaClient()

async function main() {
	// Connect the client
	await prisma.$connect()
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
