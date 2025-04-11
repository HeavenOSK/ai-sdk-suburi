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
			"You are a helpful assistant. You can use tools to get information.",
		tools: {
			getCurrentTime: {
				description: "Get the current time",
				parameters: z.object({}),
				execute: async () => {
					return new Date().toLocaleTimeString();
				},
			},
		},
		messages,
	});
	return result.toDataStreamResponse();
}
