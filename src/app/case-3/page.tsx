"use client"

// クライアントとサーバサイドのスキーマを同一ファイルで定義しているファイルを読み込む
import { env } from "@/env/client.mjs";

export default function Home() {
  // スキーマをを読み込むことでタイプセーフに環境変数を扱える
  const nextPublicDebugMessage = env.NEXT_PUBLIC_DEBUG_MESSAGE;
  const nextPublicPublishableKey = env.NEXT_PUBLIC_PUBLISHABLE_KEY;

  // クライアントのログに出力される
  console.log("\n")
  console.log(`Client Log`)
  console.log(`NEXT_PUBLIC_DEBUG_MESSAGE : ${nextPublicDebugMessage}`);
  console.log(`NEXT_PUBLIC_PUBLISHABLE_KEY : ${nextPublicPublishableKey}`);

  return (
    <main className="text-lg">
      クライアント
    </main>
  );
}