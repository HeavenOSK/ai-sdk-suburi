import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage, type ChatMessageProps } from "./chat-message";
import { ChatError } from "./chat-error";

export type ChatMessageListProps = {
  messages: ChatMessageProps[];
  error: Error | null | undefined;
  onRetry: () => void;
};

export function ChatMessageList({
  messages,
  error,
  onRetry,
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
      </div>
    </ScrollArea>
  );
}
