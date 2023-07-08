import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // サーバサイドの環境変数
  server: {
    /** データベースの接続先のURL */
    DATABASE_URL: z.string().url(),
    /** OPEN AI の API KEY */
    API_KEY: z.string().min(1),
    /** メールアドレス */
    DEBUG_EMAIL: z.string().email(),
    /** デバッグ用の絵文字 */
    DEBUG_EMOJI: z.string().emoji(),
    /** デバッグ用のメッセージ */
    DEBUG_MESSAGE: z.string().min(5),
  },
  experimental__runtimeEnv: {},
});
