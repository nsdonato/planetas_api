import { Prisma } from '@prisma/client'

const planetSeeder: Prisma.PlanetCreateInput[] = [
	{
		name: 'mercury',
		description:
			"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
		linkWikipedia: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
		planetStatistic: {
			create: {
				rotationTime: '58.6 days',
				revolutionTime: '87.97 days',
				radius: '2,439.7 km',
				averageTemp: '430°c',
			},
		},
	},
	{
		name: 'venus',
		description:
			"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
		linkWikipedia: 'https://en.wikipedia.org/wiki/Venus',
		planetStatistic: {
			create: {
				rotationTime: '243 days',
				revolutionTime: '224.7 days',
				radius: '6,051.8 km',
				averageTemp: '471°c',
			},
		},
	},
	{
		name: 'earth',
		description:
			"Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
		linkWikipedia: 'https://en.wikipedia.org/wiki/Earth',
		planetStatistic: {
			create: {
				rotationTime: '0.99 days',
				revolutionTime: '365.26 days',
				radius: '6,371 km',
				averageTemp: '16°c',
			},
		},
	},
	{
		name: 'mars',
		description:
			"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
		linkWikipedia: 'https://en.wikipedia.org/wiki/Mars',
		planetStatistic: {
			create: {
				rotationTime: '1.03 days',
				revolutionTime: '1.88 years',
				radius: '3,389.5 km',
				averageTemp: '−28°c',
			},
		},
	},
	{
		name: 'jupiter',
		description:
			'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
		linkWikipedia: 'https://en.wikipedia.org/wiki/Jupiter',
		planetStatistic: {
			create: {
				rotationTime: '9.93 hours',
				revolutionTime: '11.86 years',
				radius: '69,911 km',
				averageTemp: '-108°c',
			},
		},
	},
	{
		name: 'saturn',
		description:
			'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
		linkWikipedia: 'https://en.wikipedia.org/wiki/Saturn',
		planetStatistic: {
			create: {
				rotationTime: '10.8 hours',
				revolutionTime: '29.46 years',
				radius: '58,232 km',
				averageTemp: '-138°c',
			},
		},
	},
	{
		name: 'uranus',
		description:
			'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
		linkWikipedia: 'https://en.wikipedia.org/wiki/Uranus',
		planetStatistic: {
			create: {
				rotationTime: '17.2 hours',
				revolutionTime: '84 years',
				radius: '25,362 km',
				averageTemp: '-195°c',
			},
		},
	},
	{
		name: 'neptune',
		description:
			'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
		linkWikipedia: 'https://en.wikipedia.org/wiki/Neptune',
		planetStatistic: {
			create: {
				rotationTime: '16.08 hours',
				revolutionTime: '164.79 years',
				radius: '24,622 km',
				averageTemp: '-201°c',
			},
		},
	},
]

export default planetSeeder
