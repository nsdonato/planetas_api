import { PlanetStatistic } from './planetStatistic'

export interface Planet {
	name: string
	description: string
	linkWikipedia: string
	planetFile: string
	planetFileInternal: string
	geologyFile: string
	planetStatistic: PlanetStatistic
}
