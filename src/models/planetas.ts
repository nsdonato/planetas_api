export interface Planet {
	name: string
	overview: Geology
	structure: Geology
	geology: Geology
	rotation: string
	revolution: string
	radius: string
	temperature: string
	images: Images
}

export interface Geology {
	content: string
	source: string
}

export interface Images {
	planet: string
	internal: string
	geology: string
}
