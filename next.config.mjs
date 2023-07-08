// 同一ファイルを利用する場合
// import "./src/env.mjs";

// ファイルを分割する場合
import "./src/env/client.mjs";
import "./src/env/server.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
