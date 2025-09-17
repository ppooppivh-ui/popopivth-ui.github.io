export default {
  async fetch(request, env, ctx) {
    // 你的后端地址
    const backend = "http://yun3hui.com:8085";

    // 拼接新的目标 URL
    const url = new URL(request.url);
    url.host = backend.replace(/^https?:\/\//, "").replace(/\/$/, "");

    // 转发请求
    return fetch(new Request(url, request));
  },
};
