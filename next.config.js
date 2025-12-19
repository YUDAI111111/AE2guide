/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages: https://yudai111111.github.io/AE2guide/ 配下で動かす
  basePath: '/AE2guide',

  // _next のJS/CSS参照が壊れる場合に備えて付ける（サブパス配信で有効）
  assetPrefix: '/AE2guide/',

  // 静的ホスティングで安全寄り（既に入っていれば不要）
  trailingSlash: true,
};

module.exports = nextConfig;
