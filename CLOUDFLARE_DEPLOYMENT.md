# Cloudflare Pages 部署指南

## 🚀 快速部署步骤

### 方法一：通过Cloudflare Dashboard（推荐）

1. **访问 [Cloudflare Pages](https://pages.cloudflare.com/)**
2. **登录/注册 Cloudflare 账户**
3. **创建新项目**：
   - 点击 "Create a project"
   - 选择 "Connect to Git"
   - 连接到你的 GitHub 账户
   - 选择 `supercjnn/artweb` 仓库

4. **配置构建设置**：
   ```
   项目名称: artweb-cf (或你喜欢的名字)
   生产分支: main
   框架预设: Vite (或 None)
   构建命令: npm run build
   构建输出目录: dist
   根目录: / (留空)
   Node.js 版本: 18 (推荐)
   ```

5. **点击 "Save and Deploy"**

### 方法二：使用 Wrangler CLI

```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署项目
wrangler pages deploy dist --project-name artweb

# 或者直接部署（自动构建）
npm run build
wrangler pages deploy dist --project-name artweb --compatibility-date 2024-01-01
```

## 📁 配置文件说明

### `_redirects`
- 配置 SPA 路由重定向
- 所有未找到的路径都重定向到 `index.html`
- 为未来的 API 路由预留配置

### `_headers`
- 设置安全相关的 HTTP 头
- 配置静态资源缓存策略
- 跨域资源共享设置

### `wrangler.toml`
- Cloudflare Workers/Pages 的配置文件
- 定义项目名称和构建输出目录
- 环境变量和自定义域名配置

## 🔧 高级配置

### 环境变量
在 Cloudflare Pages 项目设置中添加：
```
NODE_ENV=production
VITE_APP_TITLE=西方艺术史学习平台
```

### 自定义域名
1. 在项目设置中点击 "Custom domains"
2. 添加你的域名
3. 配置 DNS 记录

### 分支部署
- `main` 分支 → 生产环境
- 其他分支 → 预览环境（自动生成 URL）

## 📊 性能优势

- **全球 CDN**: 200+ 个数据中心
- **边缘计算**: 更快的响应速度
- **自动 HTTPS**: 免费 SSL 证书
- **DDoS 防护**: 自动防护
- **实时分析**: 详细的访问统计

## 🎯 部署后检查

部署成功后，你将获得：
- 🌐 生产环境 URL: `https://artweb-cf.pages.dev`
- 📊 分析面板: 访问统计和性能监控
- 🔄 自动部署: GitHub 推送触发自动部署
- 🌍 全球加速: CDN 缓存优化

## 🔗 有用链接

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)
- [自定义域名设置](https://developers.cloudflare.com/pages/platform/custom-domains/)