export default {
  async fetch(request, env, ctx) {
    // 目标后端地址（你给我的）
    const backend = "http://yun3hui.com:8085";

    // 拼接目标 URL
    const url = new URL(request.url);
    url.hostname = backend.replace(/^https?:\/\//, "").split(":")[0];
    if (backend.includes(":")) {
      url.port = backend.split(":")[2] || backend.split(":")[1];
    }
    url.protocol = backend.startsWith("https") ? "https:" : "http:";

    // 转发请求
    return fetch(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.method !== "GET" && request.method !== "HEAD" ? request.body : undefined,
    });
  },
};
