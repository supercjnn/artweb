# 🚀 部署检查清单和注意事项

## 📋 部署前检查清单

### ✅ 代码准备
- [ ] 代码已提交到Git仓库
- [ ] 所有TypeScript错误已修复
- [ ] 本地构建测试成功 (`npm run build`)
- [ ] 本地预览测试成功 (`npm run preview`)
- [ ] 所有依赖包已正确安装
- [ ] 环境变量已配置

### ✅ 项目结构检查
- [ ] `package.json` 构建脚本正确
- [ ] `index.html` 在根目录
- [ ] `dist/` 目录在 `.gitignore` 中
- [ ] 静态资源路径正确

## 🔄 Vercel 部署注意事项

### 🎯 关键配置设置
```
Framework Preset: Vite
Root Directory: . (根目录，不是子文件夹)
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 18.x (推荐)
```

### ⚠️ 常见问题和解决方案

1. **DEPLOYMENT_NOT_FOUND 错误**
   - 检查项目设置中的Root Directory是否正确
   - 确保不是指向不存在的子目录
   - 删除项目重新创建如果路径设置错误

2. **构建失败**
   - 检查Node.js版本兼容性
   - 确认所有依赖已在package.json中声明
   - 查看构建日志中的具体错误信息

3. **404页面错误**
   - 确保vercel.json中配置了SPA重写规则
   - 检查路由配置是否正确

4. **样式加载问题**  
   - 确认Tailwind CSS配置正确
   - 检查PostCSS配置文件
   - 验证CSS导入顺序

### 📁 必需文件
```
vercel.json - SPA路由重写配置
package.json - 构建脚本
tsconfig.json - TypeScript配置
tailwind.config.js - 样式配置
```

### 🔧 Vercel.json 标准配置
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🔥 Cloudflare Pages 部署注意事项

### 🎯 关键配置设置
```
项目名称: artweb-cf (或自定义)
生产分支: main
框架预设: Vite (或None)
构建命令: npm run build
构建输出目录: dist
根目录: / (留空)
Node.js版本: 18 (推荐)
环境变量: 按需设置
```

### ⚠️ 常见问题和解决方案

1. **构建超时**
   - 检查依赖包大小，移除不必要的包
   - 优化构建脚本，减少构建时间
   - 检查网络连接稳定性

2. **静态资源404**
   - 确认_redirects文件配置正确
   - 检查资源路径是否为绝对路径
   - 验证构建输出目录设置

3. **缓存问题**
   - 清除Cloudflare缓存
   - 检查_headers文件中的缓存策略
   - 确认静态资源版本号更新

### 📁 必需文件
```
_redirects - SPA路由和重定向规则
_headers - HTTP头和缓存策略  
wrangler.toml - Cloudflare项目配置
package.json - 构建脚本
```

### 🔧 _redirects 标准配置
```
/*    /index.html   200
/api/*  https://api.example.com/:splat  200
/assets/*  /assets/:splat  200  Cache-Control: max-age=31536000,immutable
```

## 🔄 通用部署流程

### 1. 准备阶段
```bash
# 1. 检查代码状态
git status

# 2. 运行本地测试
npm run build
npm run preview

# 3. 提交代码
git add .
git commit -m "🚀 准备部署: [描述变更]"
git push origin main
```

### 2. 部署阶段
- **Vercel**: 自动部署或手动触发
- **Cloudflare**: 自动部署或CLI部署

### 3. 验证阶段
```bash
# 检查网站功能
- [ ] 首页加载正常
- [ ] 导航链接工作
- [ ] 样式渲染正确  
- [ ] 移动端适配正常
- [ ] 搜索功能正常
- [ ] 路由跳转正确
```

## 🛠️ 故障排除步骤

### 构建失败
1. 检查错误日志
2. 验证Node.js版本
3. 清除缓存重新构建
4. 检查依赖版本冲突
5. 验证环境变量设置

### 运行时错误
1. 检查浏览器控制台
2. 验证网络请求状态
3. 检查路由配置
4. 确认API端点可访问
5. 验证CORS设置

### 性能问题
1. 检查资源大小和加载时间
2. 优化图片和静态资源
3. 启用CDN缓存
4. 配置正确的HTTP头
5. 监控网站性能指标

## 📊 部署后检查清单

### 功能测试
- [ ] 所有页面可以访问
- [ ] 导航菜单正常工作
- [ ] 搜索功能正常
- [ ] 移动端响应式正常
- [ ] 动画和交互正常
- [ ] 表单提交正常（如果有）

### 性能检查
- [ ] 页面加载速度 < 3秒
- [ ] 首屏渲染时间合理
- [ ] 静态资源缓存正确
- [ ] CDN分发正常
- [ ] 移动端性能优化

### SEO检查
- [ ] 页面标题正确
- [ ] Meta描述设置
- [ ] Open Graph标签
- [ ] 结构化数据（如需要）
- [ ] 网站地图（如需要）

### 安全检查
- [ ] HTTPS证书正常
- [ ] 安全头设置正确
- [ ] 敏感信息未暴露
- [ ] CORS配置合理
- [ ] Content Security Policy

## 🔗 有用的调试工具

### 在线工具
- [GTmetrix](https://gtmetrix.com/) - 性能测试
- [PageSpeed Insights](https://pagespeed.web.dev/) - Google性能分析
- [SSL Test](https://www.ssllabs.com/ssltest/) - SSL证书检查
- [Security Headers](https://securityheaders.com/) - 安全头检查

### 浏览器工具
- Chrome DevTools - 性能和网络分析
- Lighthouse - 综合性能评估
- Network面板 - 资源加载分析
- Console面板 - 错误日志查看

## 🎯 最佳实践

### 代码管理
- 使用语义化提交信息
- 保持代码仓库整洁
- 定期更新依赖包
- 使用环境变量管理配置

### 部署策略
- 先在预览环境测试
- 逐步发布新功能
- 保持回滚方案
- 监控部署状态

### 性能优化
- 启用资源压缩
- 配置长期缓存
- 使用CDN加速
- 优化图片和字体

### 安全考虑
- 定期更新依赖
- 配置安全HTTP头
- 启用HTTPS
- 验证用户输入

## 📞 支持资源

### 官方文档
- [Vercel文档](https://vercel.com/docs)
- [Cloudflare Pages文档](https://developers.cloudflare.com/pages/)
- [Vite部署指南](https://vitejs.dev/guide/static-deploy.html)

### 社区支持  
- Stack Overflow
- GitHub Issues
- 官方Discord/Slack
- 开发者论坛

---

💡 **提示**: 将此清单保存为书签，每次部署前快速检查，确保部署成功率！