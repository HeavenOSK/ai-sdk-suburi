import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { ReactNode } from "react";

export type ChatContainerProps = {
  title: string;
  description?: string;
  children: ReactNode;
  footer: ReactNode;
};

export function ChatContainer({
  title,
  description,
  children,
  footer,
}: ChatContainerProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto h-[90vh] flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden">
        {children}
      </CardContent>

      <CardFooter className="border-t pt-4">
        {footer}
      </CardFooter>
    </Card>
  );
}
