import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage, type ChatMessageProps } from "./chat-message";
import { ChatError } from "./chat-error";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export type ChatMessageListProps = {
	messages: ChatMessageProps[];
	error: Error | null | undefined;
	onRetry: () => void;
	loadingTool?: { toolName: string } | null;
};

export function ChatMessageList({
	messages,
	error,
	onRetry,
	loadingTool,
}: ChatMessageListProps) {
	return (
		<ScrollArea className="h-full pr-4">
			<div className="space-y-4">
				{messages.map((message) => (
					<ChatMessage
						key={message.id}
						id={message.id}
						role={message.role}
						content={message.content}
					/>
				))}

				{error && <ChatError error={error} onRetry={onRetry} />}

				{loadingTool && (
					<div className="flex items-start gap-2">
						<Card className="max-w-[80%] p-0 bg-muted rounded-lg ml-10">
							<CardContent className="p-3">
								<div className="flex items-center gap-2">
									<div className="text-sm font-medium">
										Tool: {loadingTool.toolName} を実行中...
									</div>
									<div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />
								</div>
							</CardContent>
						</Card>
					</div>
				)}
			</div>
		</ScrollArea>
	);
}
