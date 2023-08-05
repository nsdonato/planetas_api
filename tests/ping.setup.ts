import { test as ping, expect, APIRequestContext, test } from '@playwright/test'

// Request context is reused by all tests in the file.
let apiContext: APIRequestContext

ping.beforeAll(async ({ playwright }) => {
	apiContext = await playwright.request.newContext({
		// All requests we send go to this API endpoint.
		baseURL: 'https://planetas-api.onrender.com/',
		extraHTTPHeaders: {
			Accept: 'application/json',
		},
	})
})

ping.afterAll(async () => {
	// Dispose all responses.
	await apiContext.dispose()
})

/**
 * API call to wake up our app
 */
ping('ping a planet', async () => {
	const planet = await apiContext.get('/api/planet')
	test.slow()
	expect(planet.ok()).toBeTruthy()
})
