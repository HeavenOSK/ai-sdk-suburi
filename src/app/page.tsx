import Image from "next/image";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<div className="text-center sm:text-left">
					<h1 className="text-3xl font-bold mb-2">AI SDK Suburi</h1>
					<p className="text-muted-foreground mb-8">
						AI SDKを使った実験・練習用プロジェクト
					</p>
				</div>

				<ul className="space-y-4">
					<li>
						<a
							href="/use-chat"
							className="text-primary underline hover:text-primary/80 transition-colors"
						>
							Use Chat - チャットインターフェースを試す
						</a>
					</li>
					<li>
						<a
							href="/use-chat-tool"
							className="text-primary underline hover:text-primary/80 transition-colors"
						>
							Use Chat Tool - チャットインターフェースを試す
						</a>
					</li>
					<li>
						<a
							href="/use-chat-search"
							className="text-primary underline hover:text-primary/80 transition-colors"
						>
							Use Chat Search - チャットインターフェースを試す
						</a>
					</li>
				</ul>
			</main>
		</div>
	);
}
