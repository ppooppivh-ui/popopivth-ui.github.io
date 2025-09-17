export default {
  async fetch(request) {
    // 配置秘钥（APP 里要设置相同的请求头）
    const SECRET_KEY = "my-secret-123";

    // 检查请求头
    const clientKey = request.headers.get("x-app-key");
    if (clientKey !== SECRET_KEY) {
      return new Response("Unauthorized", { status: 401 });
    }

    // 目标后端地址（不要暴露给外部）
    const backendUrl = "http://yun3hui.com:8085";

    // 构建目标 URL
    const url = new URL(request.url);
    url.host = "yun3hui.com:8085";
    url.protocol = "http:";

    // 转发请求
    return fetch(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.method !== "GET" && request.method !== "HEAD" ? request.body : undefined,
    });
  },
};
