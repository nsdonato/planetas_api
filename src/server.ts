import express, { Application } from 'express'
import planetsRoutes from '@routes/planets'
import cors from 'cors'

class Server {
	private app: Application
	private port: string
	private apiPaths = {
		planet: '/api/planet',
	}

	constructor() {
		this.app = express()
		this.app.use(cors())
		this.port = process.env.PORT || '8000'

		this.routes()
	}

	routes() {
		this.app.use(this.apiPaths.planet, planetsRoutes)
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('Servidor corrinedo en el puerto ' + this.port)
		})
	}
}

export default Server
