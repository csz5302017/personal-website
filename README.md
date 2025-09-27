# Claire Chen个人简历网站

一个现代化的个人简历网站，支持中英日三语切换，具有酷炫的动画效果和响应式设计。

## 特性

- 🌍 **多语言支持**: 中文、英文、日文三种语言无缝切换
- 🎨 **现代化设计**: 采用渐变色彩和毛玻璃效果
- ✨ **丰富动画**: 使用Framer Motion实现流畅的动画效果
- 📱 **响应式布局**: 完美适配各种设备尺寸
- 🚀 **高性能**: 基于React 18和现代前端技术栈
- 🎯 **用户体验**: 直观的导航和交互设计

## 技术栈

- **前端框架**: React 18
- **样式方案**: Styled Components
- **动画库**: Framer Motion
- **国际化**: React i18next
- **构建工具**: Create React App
- **字体**: Inter, Noto Sans SC, Noto Sans JP

## 项目结构

```
src/
├── components/          # React组件
│   ├── Header.js       # 导航头部
│   ├── Hero.js         # 首页横幅
│   ├── About.js        # 关于我
│   ├── Skills.js       # 技能展示
│   ├── Experience.js   # 工作经历
│   ├── Education.js    # 教育背景
│   ├── Contact.js      # 联系方式
│   ├── Footer.js       # 页脚
│   └── LanguageSwitcher.js # 语言切换
├── styles/             # 样式文件
│   ├── theme.js        # 主题配置
│   └── GlobalStyle.js  # 全局样式
├── i18n/              # 国际化配置
│   └── index.js       # 语言包
├── App.js             # 主应用组件
└── index.js           # 应用入口
```

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm start
```

3. 构建生产版本：
```bash
npm run build
```

## 自定义配置

### 修改个人信息

在 `src/i18n/index.js` 文件中修改各语言版本的个人信息：

- 姓名和职位
- 联系方式
- 工作经历
- 教育背景
- 技能列表

### 调整主题色彩

在 `src/styles/theme.js` 文件中修改颜色配置：

```javascript
export const theme = {
  colors: {
    primary: '#6366f1',    // 主色调
    secondary: '#8b5cf6',  // 辅助色
    accent: '#06b6d4',     // 强调色
    // ... 其他颜色配置
  }
};
```

### 添加新的语言

1. 在 `src/i18n/index.js` 中添加新的语言资源
2. 在 `src/components/LanguageSwitcher.js` 中添加语言选项

## 部署

### Vercel部署

1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 配置构建命令：`npm run build`
4. 部署完成

### Netlify部署

1. 构建项目：`npm run build`
2. 将 `build` 文件夹上传到Netlify
3. 配置重定向规则（单页应用）

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License

## 联系方式

- 邮箱: 18201796637@163.com
- 中国电话: 18201796637
- 日本电话: 07033326637
- 位置: 东京

---

感谢您查看我的个人简历网站！如有任何问题或建议，欢迎联系我。
