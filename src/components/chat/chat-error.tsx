import { Button } from "@/components/ui/button";

export type ChatErrorProps = {
  error: Error | null | undefined;
  onRetry: () => void;
};

export function ChatError({ error, onRetry }: ChatErrorProps) {
  if (!error) return null;

  return (
    <div className="p-3 bg-destructive/10 text-destructive rounded-lg">
      エラーが発生しました
      <Button
        variant="outline"
        size="sm"
        onClick={onRetry}
        className="ml-2"
      >
        リトライ
      </Button>
    </div>
  );
}
