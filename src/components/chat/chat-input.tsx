import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { FormEvent } from "react";

export type ChatInputProps = {
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
};

export function ChatInput({
  input,
  onInputChange,
  onSubmit,
  disabled = false,
}: ChatInputProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full items-center gap-2"
    >
      <Input
        value={input}
        onChange={onInputChange}
        placeholder="メッセージを入力..."
        disabled={disabled}
        className="flex-1"
      />
      <Button type="submit" disabled={disabled || !input.trim()}>
        送信
      </Button>
    </form>
  );
}
