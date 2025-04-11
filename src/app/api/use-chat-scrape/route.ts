import { scrape } from "@/lib/deepresearch";
import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { z } from "zod";

export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages } = await req.json();
	const result = streamText({
		maxSteps: 5,
		model: anthropic("claude-3-7-sonnet-20250219"),
		system:
			"You are a helpful assistant. You can use tools to get information from a website.",
		tools: {
			scrape: {
				description: "Scrape a website",
				parameters: z.object({
					url: z.string(),
				}),
				execute: async ({ url }) => {
					const result = await scrape(url);
					return result;
				},
			},
		},
		messages,
	});
	return result.toDataStreamResponse();
}
