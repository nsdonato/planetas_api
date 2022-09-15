import { Overview } from './overview'
import { Geology } from './geology'
import { Images } from './images'

export interface Planet {
	name: string
	overview: Overview
	geology: Geology
	rotation: string
	revolution: string
	radius: string
	temperature: string
	images: Images
}
