import express, { Application } from 'express'
import planetasRoutes from '@routes/planetas'

class Server {
	private app: Application
	private port: string
	private apiPaths = {
		planetas: '/api/planetas',
	}

	constructor() {
		this.app = express()
		this.port = process.env.PORT || '8000'

		this.routes()
	}

	routes() {
		this.app.use(this.apiPaths.planetas, planetasRoutes)
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('Servidor corrinedo en el puerto ' + this.port)
		})
	}
}

export default Server
