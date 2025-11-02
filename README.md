# Shosho Demo

🌐 **官方网站**: [https://shoshowang.org/](https://shoshowang.org/)

## 项目介绍

Shosho Demo 是一个基于 React 和 TypeScript 的 Web3 应用演示项目，集成了 AI 驱动的代码审查和智能问答功能。该项目使用 Vite 作为构建工具，提供了高效的开发体验和快速的热重载功能。

## 技术栈

- **前端框架**：React 19 + TypeScript
- **构建工具**：Vite 6
- **UI 组件库**：Ant Design 5
- **样式解决方案**：TailwindCSS 4
- **API 集成**：
  - Apollo Client（GraphQL 查询）
  - Mastra Client（AI 代理集成）
- **代码质量**：ESLint + Prettier

## 主要功能

### 代码审查（Code Review）

通过集成 Mastra AI 代理，提供智能代码审查功能：
- 支持多种编程语言的代码分析
- 提供代码质量和最佳实践建议
- 实时反馈和改进建议

### AI 问答工具

基于 GraphQL 和 Apollo Client 实现的 AI 问答功能：
- 自然语言交互界面
- 实时响应用户查询
- 智能上下文理解

## 安装与运行

### 前提条件

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. 克隆项目到本地

```bash
git clone <repository-url>
cd shosho-demo
```

2. 安装依赖

```bash
npm install
# 或
yarn install
```

3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

4. 构建生产版本

```bash
npm run build
# 或
yarn build
```

## 项目结构

```
shosho-demo/
├── public/              # 静态资源
├── src/
│   ├── assets/          # 图片和其他资源
│   ├── clients/         # API 客户端配置
│   │   ├── apolloClient.ts  # GraphQL 客户端
│   │   └── mastraClient.ts  # Mastra AI 客户端
│   ├── pages/           # 页面组件
│   │   ├── CodeReview.tsx   # 代码审查页面
│   │   ├── chat.tsx         # AI 问答页面
│   │   └── usePro.tsx       # 专业版功能页面
│   ├── App.tsx          # 应用主组件
│   └── main.tsx         # 应用入口
├── .eslintrc.js         # ESLint 配置
├── .prettierrc.json     # Prettier 配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

## 开发指南

### 代码规范

项目使用 ESLint 和 Prettier 进行代码质量控制和格式化：

```bash
# 运行代码检查
npm run lint

# 格式化代码
npm run format
```

### 添加新功能

1. 在 `src/pages` 目录下创建新的页面组件
2. 在 `App.tsx` 中添加路由配置（如需要）
3. 如需新的 API 集成，在 `src/clients` 目录下配置相应客户端

## 贡献指南

欢迎提交 Pull Request 或提出 Issue 来改进项目。请确保遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 许可证

[MIT License](LICENSE)
