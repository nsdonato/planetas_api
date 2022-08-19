import { Request, Response } from 'express'

export const getAllPlanetas = (req: Request, res: Response) => {
	res.json({
		msg: 'Lista de planetas',
	})
}
