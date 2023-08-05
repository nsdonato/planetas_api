import { test, expect, APIRequestContext } from '@playwright/test'

// Request context is reused by all tests in the file.
let apiContext: APIRequestContext

test.beforeAll(async ({ playwright }) => {
	apiContext = await playwright.request.newContext({
		// All requests we send go to this API endpoint.
		baseURL: 'https://planetas-api.onrender.com/',
		extraHTTPHeaders: {
			Accept: 'application/json',
		},
	})
})

test.afterAll(async () => {
	// Dispose all responses.
	await apiContext.dispose()
})

/**
 * Sample API call.
 */
test('get a planet', async () => {
	const planet = await apiContext.get('/api/planet/jupiter')
	expect(planet.ok()).toBeTruthy()
	expect(await planet.json()).toEqual(
		expect.objectContaining({
			id: '64c3ad5358fda7cddbe38a63',
			name: 'Jupiter',
			rotation: '9.93 hours',
			revolution: '11.86 years',
			radius: '69,911 km',
			temperature: '-108°c',
		}),
	)
})

/**
 * Sample API call.
 */
test('get an inexistent planet', async () => {
	const planet = await apiContext.get('/api/planet/badplanet')
	expect(planet.status()).toEqual(404)
})
