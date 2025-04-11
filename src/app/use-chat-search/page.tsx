"use client";

import { useChat } from "@ai-sdk/react";
import { ChatContainer, ChatMessageList, ChatInput } from "@/components/chat";
import { useState } from "react";

export default function UseChatSearchPage() {
	const [loadingTool, setLoadingTool] = useState<{
		toolName: string;
	} | null>(null);
	const { messages, input, handleInputChange, handleSubmit, error, reload } =
		useChat({
			api: "/api/use-chat-search",
			onToolCall: (toolCall) => {
				console.log("toolCall", toolCall);
				setLoadingTool({
					toolName: toolCall.toolCall.toolName,
				});
			},
			onResponse: (response) => {
				console.log("response", response);
			},
			onFinish: (message, options) => {
				console.log("finish", message, options);
				setLoadingTool(null);
			},
		});

	return (
		<ChatContainer
			title="useChat"
			description="useChat を使ったチャットアプリケーションです。"
			footer={
				<ChatInput
					input={input}
					onInputChange={handleInputChange}
					onSubmit={handleSubmit}
					disabled={error != null}
				/>
			}
		>
			<ChatMessageList
				messages={messages.map((m) => ({
					id: m.id,
					role: m.role,
					content: m.content,
				}))}
				error={error}
				onRetry={reload}
				loadingTool={loadingTool}
			/>
		</ChatContainer>
	);
}
