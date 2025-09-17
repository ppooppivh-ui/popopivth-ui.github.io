# Worker VPN Secure Proxy

这是一个 Cloudflare Worker 示例，用于将请求安全地中转到后端服务器。

## 特点
- 隐藏真实后端地址
- 需要请求头中的秘钥才能访问

## 使用方法
1. 修改 `index.js` 中的 `SECRET_KEY` 为你自己的秘钥。
2. 在 APP 请求里添加请求头：
   ```
   x-app-key: my-secret-123
   ```
3. 部署到 Cloudflare Worker：
   ```bash
   wrangler publish
   ```

## 文件结构
- index.js → Worker 代码
- wrangler.toml → 部署配置
- README.md → 使用说明
