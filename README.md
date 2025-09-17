# Worker (No Auth, Final Version)

This Worker forwards all requests to your backend `http://yun3hui.com:8085`.

## Features
- No authentication required.
- Backend address is hidden from clients (they only see the Worker URL).
- Any request (browser or APP) will be forwarded.

## Deploy
1. Create a GitHub repository and upload these files (`index.js`, `wrangler.toml`, `README.md`).
2. Deploy via Cloudflare Workers (GitHub integration or `wrangler publish`).
3. You will get a URL like:
   ```
   https://your-worker.your-account.workers.dev
   ```

## Use in APP
- Open APP settings → Change server address → Input the Worker URL.
- The Worker will automatically forward requests to:
   ```
   http://yun3hui.com:8085
   ```

## Test
```bash
curl -v https://your-worker.your-account.workers.dev/
```
