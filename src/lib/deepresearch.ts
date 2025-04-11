"use server";

import FirecrawlApp from "@mendable/firecrawl-js";

export async function deepResearch(query: string) {
	const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });
	const result = await app.deepResearch(query, {
		maxDepth: 3,
	});
	return result;
}
