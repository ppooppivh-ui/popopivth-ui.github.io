export default {
  async fetch(request) {
    try {
      // Backend address (hidden from clients)
      const backend = "http://yun3hui.com:8085";

      // Build target URL with original path and query
      const incoming = new URL(request.url);
      const target = new URL(backend);
      target.pathname = incoming.pathname;
      target.search = incoming.search;

      // Forward the request to backend
      const forwardedHeaders = new Headers(request.headers);
      forwardedHeaders.delete("host");

      const resp = await fetch(target.toString(), {
        method: request.method,
        headers: forwardedHeaders,
        body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
        redirect: "follow"
      });

      // Clean response headers
      const responseHeaders = new Headers(resp.headers);
      responseHeaders.delete("set-cookie");

      return new Response(resp.body, {
        status: resp.status,
        statusText: resp.statusText,
        headers: responseHeaders
      });
    } catch (e) {
      return new Response("Worker error: " + e.message, { status: 500 });
    }
  }
};
