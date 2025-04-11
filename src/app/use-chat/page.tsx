"use client";

import { useChat } from "@ai-sdk/react";
import {
	ChatContainer,
	ChatMessageList,
	ChatInput
} from "@/components/chat";

export default function UseChatPage() {
	const { messages, input, handleInputChange, handleSubmit, error, reload } =
		useChat({});

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
					content: m.content
				}))}
				error={error}
				onRetry={reload}
			/>
		</ChatContainer>
	);
}
