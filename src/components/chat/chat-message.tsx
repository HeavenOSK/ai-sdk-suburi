import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export type ChatMessageProps = {
  id: string;
  role: "user" | "assistant" | "system" | "data";
  content: string;
};

export function ChatMessage({ id, role, content }: ChatMessageProps) {
  return (
    <div
      key={id}
      className={`flex items-start gap-2 ${role === "user" ? "justify-end" : ""}`}
    >
      {role !== "user" && (
        <Avatar className="mt-1">
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}

      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          role === "user"
            ? "bg-primary text-primary-foreground rounded-br-none"
            : "bg-muted text-foreground rounded-bl-none"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
