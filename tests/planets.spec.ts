import { test, expect, APIRequestContext } from '@playwright/test'

// Request context is reused by all tests in the file.
let apiContext: APIRequestContext

// Before all tests, create a new API request context.
test.beforeAll(async ({ playwright }) => {
	apiContext = await playwright.request.newContext({
		// All requests we send go to this API endpoint.
		baseURL: 'https://planetas-api.onrender.com/',
		extraHTTPHeaders: {
			Accept: 'application/json',
		},
	})
})

// After all tests, dispose all responses.
test.afterAll(async () => {
	// Dispose all responses.
	await apiContext.dispose()
})

/**
 * Get a planet.
 */
test('get a planet', async () => {
	const planet = await apiContext.get('/api/planet/jupiter')
	// Expect the response to be OK.
	expect(planet.ok()).toBeTruthy()
	// Expect the response to contain the expected data.
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
 * Try to get an inexistent planet
 */
test('get an inexistent planet', async () => {
	const planet = await apiContext.get('/api/planet/badplanet')
	expect(planet.status()).toEqual(404)
})
