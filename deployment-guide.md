# 西方艺术史学习网站 - 部署指南

## 项目概述

本项目是一个基于 React + TypeScript + Tailwind CSS 的现代化艺术史学习网站，提供响应式设计和优秀的用户体验。

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式方案**: Tailwind CSS
- **路由管理**: React Router
- **动画库**: Framer Motion
- **开发语言**: TypeScript

## 本地开发环境搭建

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0 或 yarn >= 1.22.0
- Git

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd artweb
```

2. **安装依赖**
```bash
cd artweb-frontend
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **访问应用**
打开浏览器访问 `http://localhost:5174`

### 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 类型检查
npm run type-check

# 代码格式化
npm run format

# 代码检查
npm run lint
```

## 生产环境部署

### 1. 静态网站部署 (推荐)

#### Vercel 部署
1. 将代码推送到 GitHub 仓库
2. 登录 [Vercel](https://vercel.com)
3. 导入 GitHub 项目
4. 设置构建配置:
   - Framework Preset: `Vite`
   - Root Directory: `artweb-frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. 点击 Deploy

#### Netlify 部署
1. 将代码推送到 GitHub 仓库
2. 登录 [Netlify](https://netlify.com)
3. 选择 "New site from Git"
4. 连接 GitHub 仓库
5. 设置构建配置:
   - Base directory: `artweb-frontend`
   - Build command: `npm run build`
   - Publish directory: `artweb-frontend/dist`
6. 点击 Deploy

#### GitHub Pages 部署
1. 在项目根目录创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        cache-dependency-path: artweb-frontend/package-lock.json

    - name: Install dependencies
      run: |
        cd artweb-frontend
        npm ci

    - name: Build
      run: |
        cd artweb-frontend
        npm run build

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./artweb-frontend/dist
```

### 2. 服务器部署

#### Nginx 配置
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/artweb/dist;
    index index.html;

    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA 路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 安全头
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
}
```

#### Docker 部署
1. 创建 `Dockerfile`:

```dockerfile
# 构建阶段
FROM node:18-alpine as builder

WORKDIR /app
COPY artweb-frontend/package*.json ./
RUN npm ci --only=production

COPY artweb-frontend/ ./
RUN npm run build

# 生产阶段
FROM nginx:alpine

# 复制构建结果
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制 nginx 配置
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

2. 构建和运行:
```bash
docker build -t artweb .
docker run -d -p 80:80 artweb
```

### 3. CDN 和性能优化

#### 资源 CDN 配置
```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // 资源文件命名
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  }
})
```

#### 图片优化
- 使用 WebP 格式图片
- 配置响应式图片
- 启用懒加载

#### 缓存策略
```javascript
// PWA 配置 (可选)
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
})
```

## 环境变量配置

### 开发环境 (.env.development)
```bash
VITE_APP_TITLE=西方艺术史学习网站
VITE_API_BASE_URL=http://localhost:3000/api
VITE_ENABLE_ANALYTICS=false
```

### 生产环境 (.env.production)
```bash
VITE_APP_TITLE=西方艺术史学习网站
VITE_API_BASE_URL=https://api.artweb.com
VITE_ENABLE_ANALYTICS=true
VITE_GOOGLE_ANALYTICS_ID=GA_TRACKING_ID
```

## 监控和分析

### Google Analytics 集成
```javascript
// src/utils/analytics.ts
export const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

export const pageview = (url: string) => {
  gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_ID, {
    page_path: url,
  });
};
```

### 错误监控
```javascript
// Sentry 配置 (可选)
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: import.meta.env.MODE,
});
```

## 性能优化

### 构建优化
- 代码分割 (Code Splitting)
- Tree Shaking
- 压缩和混淆
- 资源预加载

### 运行时优化
- 图片懒加载
- 路由懒加载
- 组件懒加载
- 缓存策略

## 安全考虑

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
               font-src 'self' https://fonts.gstatic.com; 
               img-src 'self' data: https:">
```

### HTTPS 配置
- 强制 HTTPS 重定向
- HSTS 头设置
- SSL 证书配置

## 故障排除

### 常见问题

1. **构建失败**
   - 检查 Node.js 版本
   - 清除 node_modules 重新安装
   - 检查 TypeScript 错误

2. **路由 404 错误**
   - 配置服务器支持 SPA 路由
   - 检查 nginx 或 Apache 配置

3. **样式加载问题**
   - 检查 Tailwind CSS 配置
   - 确认 PostCSS 设置正确

4. **性能问题**
   - 启用 gzip 压缩
   - 配置 CDN 加速
   - 优化图片大小

### 调试工具
- Chrome DevTools
- React Developer Tools
- Lighthouse 性能分析
- Bundle Analyzer

## 更新和维护

### 依赖更新
```bash
# 检查过期依赖
npm outdated

# 更新依赖
npm update

# 安全审计
npm audit
npm audit fix
```

### 版本发布
1. 更新版本号
2. 生成 CHANGELOG
3. 创建 Git 标签
4. 自动化部署

## 联系和支持

如有问题或需要支持，请：
1. 查看项目 README
2. 搜索已知问题
3. 提交 Issue
4. 联系开发团队

---

**注意**: 部署前请仔细测试所有功能，确保在目标环境中正常运行。