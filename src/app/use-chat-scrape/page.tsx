"use client";

import { useChat } from "@ai-sdk/react";
import { ChatContainer, ChatMessageList, ChatInput } from "@/components/chat";
import { useEffect, useMemo, useState } from "react";

export default function UseChatSearchPage() {
	const {
		messages,
		input,
		handleInputChange,
		handleSubmit,
		error,
		reload,
		status,
	} = useChat({
		api: "/api/use-chat-scrape",
	});

	const loadingTool = useMemo<{
		toolName: string;
	} | null>(() => {
		if (status !== "streaming" || messages.length === 0) {
			return null;
		}
		const lastMessage = messages[messages.length - 1];
		if (lastMessage.role !== "assistant") {
			return null;
		}
		const lastPart = lastMessage.parts[lastMessage.parts.length - 1];
		return lastPart.type === "tool-invocation"
			? {
					toolName: lastPart.toolInvocation.toolName,
				}
			: null;
	}, [status, messages]);

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
