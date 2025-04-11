import { deepResearch } from "@/lib/deepresearch";
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
			"You are a helpful assistant. You can use tools to get research information.",
		tools: {
			deepResearch: {
				description:
					"This tool enables AI-powered deep research and analysis on any topic. Simply provide a research query, and Firecrawl will autonomously explore the web, gather relevant information, and synthesize findings into comprehensive insights.",
				parameters: z.object({
					query: z.string(),
				}),
				execute: async ({ query }) => {
					const result = await deepResearch(query);
					return result;
				},
			},
		},
		messages,
	});
	return result.toDataStreamResponse();
}
