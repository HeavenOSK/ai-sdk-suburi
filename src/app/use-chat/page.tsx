"use client";

import { useChat } from "@ai-sdk/react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function UseChatPage() {
	const { messages, input, handleInputChange, handleSubmit, error, reload } =
		useChat({});

	return (
		<Card className="w-full max-w-3xl mx-auto h-[90vh] flex flex-col">
			<CardHeader>
				<CardTitle>useChat</CardTitle>
				<CardDescription>
					useChat を使ったチャットアプリケーションです。
				</CardDescription>
			</CardHeader>

			<CardContent className="flex-1 overflow-hidden">
				<ScrollArea className="h-full pr-4">
					<div className="space-y-4">
						{messages.map((m) => (
							<div
								key={m.id}
								className={`flex items-start gap-2 ${m.role === "user" ? "justify-end" : ""}`}
							>
								{m.role !== "user" && (
									<Avatar className="mt-1">
										<AvatarFallback>AI</AvatarFallback>
									</Avatar>
								)}

								<div
									className={`max-w-[80%] p-3 rounded-lg ${
										m.role === "user"
											? "bg-primary text-primary-foreground rounded-br-none"
											: "bg-muted text-foreground rounded-bl-none"
									}`}
								>
									{m.content}
								</div>
							</div>
						))}

						{error && (
							<div className="p-3 bg-destructive/10 text-destructive rounded-lg">
								エラーが発生しました
								<Button
									variant="outline"
									size="sm"
									onClick={() => reload()}
									className="ml-2"
								>
									リトライ
								</Button>
							</div>
						)}
					</div>
				</ScrollArea>
			</CardContent>

			<CardFooter className="border-t pt-4">
				<form
					onSubmit={handleSubmit}
					className="flex w-full items-center gap-2"
				>
					<Input
						value={input}
						onChange={handleInputChange}
						placeholder="メッセージを入力..."
						disabled={error != null}
						className="flex-1"
					/>
					<Button type="submit" disabled={error != null || !input.trim()}>
						送信
					</Button>
				</form>
			</CardFooter>
		</Card>
	);
}
