// スキーマを読み込む方法は二種類
// クライアントとサーバサイドのスキーマを同一ファイルで定義しているファイルを読み込む
import { env } from "@/env.mjs";

export default function Home() {
  // スキーマをを読み込むことでタイプセーフに環境変数を扱える
  const databaseUrl = env.DATABASE_URL;
  const apiKey = env.API_KEY;
  const debugEmail = env.DEBUG_EMAIL;
  const debugEmoji = env.DEBUG_EMOJI;
  const debugMessage = env.DEBUG_MESSAGE;

  // サーバサイドのログに出力される 
  // 今回はビルド時に吐き出される
  console.log("\n")
  console.log(`Server Log`)
  console.log(`DATABASE_URL : ${databaseUrl}`);
  console.log(`API_KEY : ${apiKey}`);
  console.log(`DEBUG_EMAIL : ${debugEmail}`);
  console.log(`DEBUG_EMOJI : ${debugEmoji}`);
  console.log(`DEBUG_MESSAGE : ${debugMessage}`);

  return (
    <main className="text-lg">
      サーバサイド処理
    </main>
  );
}