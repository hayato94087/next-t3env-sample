import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // クライアントサイドの環境変数
  client: {
    // クライアントサイドで利用するキー
    NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
    /** デバッグ用のメッセージ */
    NEXT_PUBLIC_DEBUG_MESSAGE: z.string().min(5),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
    NEXT_PUBLIC_DEBUG_MESSAGE: process.env.NEXT_PUBLIC_DEBUG_MESSAGE,
  },
});
