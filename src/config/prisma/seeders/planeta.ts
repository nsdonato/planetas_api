const planetaSeeder = [
	{
		nombre: 'MERCURY',
		descripcion:
			"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
		enlaceWikipedia: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
		planetaEstadistica: {
			create: {
				tiempo_rotacion: '58.6 days',
				tiempo_resolucion: '87.97 days',
				radio: '2,439.7 km',
				temperatura_promedio: '430°c',
			},
		},
	},
	{
		nombre: 'VENUS',
		descripcion:
			"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
		enlaceWikipedia: 'https://en.wikipedia.org/wiki/Venus',
		planetaEstadistica: {
			create: {
				tiempo_rotacion: '243 days',
				tiempo_resolucion: '224.7 days',
				radio: '6,051.8 km',
				temperatura_promedio: '471°c',
			},
		},
	},
	{
		nombre: 'EARTH',
		descripcion:
			"Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
		enlaceWikipedia: 'https://en.wikipedia.org/wiki/Earth',
		planetaEstadistica: {
			create: {
				tiempo_rotacion: '0.99 days',
				tiempo_resolucion: '365.26 days',
				radio: '6,371 km',
				temperatura_promedio: '16°c',
			},
		},
	},
	{
		nombre: 'MARS',
		descripcion:
			"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
		enlaceWikipedia: 'https://en.wikipedia.org/wiki/Mars',
		planetaEstadistica: {
			create: {
				tiempo_rotacion: '1.03 days',
				tiempo_resolucion: '1.88 years',
				radio: '3,389.5 km',
				temperatura_promedio: '−28°c',
			},
		},
	},
	{
		nombre: 'JUPITER',
		descripcion:
			'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
		enlaceWikipedia: 'https://en.wikipedia.org/wiki/Jupiter',
		planetaEstadistica: {
			create: {
				tiempo_rotacion: '9.93 hours',
				tiempo_resolucion: '11.86 years',
				radio: '69,911 km',
				temperatura_promedio: '-108°c',
			},
		},
	},
	{
		nombre: 'SATURN',
		descripcion:
			'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
		enlaceWikipedia: 'https://en.wikipedia.org/wiki/Saturn',
		planetaEstadistica: {
			create: {
				tiempo_rotacion: '10.8 hours',
				tiempo_resolucion: '29.46 years',
				radio: '58,232 km',
				temperatura_promedio: '-138°c',
			},
		},
	},
	{
		nombre: 'URANUS',
		descripcion:
			'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
		enlaceWikipedia: 'https://en.wikipedia.org/wiki/Uranus',
		planetaEstadistica: {
			create: {
				tiempo_rotacion: '17.2 hours',
				tiempo_resolucion: '84 years',
				radio: '25,362 km',
				temperatura_promedio: '-195°c',
			},
		},
	},
	{
		nombre: 'NEPTUNE',
		descripcion:
			'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
		enlaceWikipedia: 'https://en.wikipedia.org/wiki/Neptune',
		planetaEstadistica: {
			create: {
				tiempo_rotacion: '16.08 hours',
				tiempo_resolucion: '164.79 years',
				radio: '24,622 km',
				temperatura_promedio: '-201°c',
			},
		},
	},
]

export default planetaSeeder
