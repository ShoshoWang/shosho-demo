# 第三方服务客户端

这个目录用于存放所有与第三方服务交互的客户端配置。每个客户端都负责处理与特定服务的通信和集成。

## 现有客户端

### Apollo GraphQL 客户端 (apolloClient.ts)
- 用于处理与GraphQL API的通信
- 配置了Cloudflare Workers作为GraphQL服务端点
- 使用InMemoryCache进行缓存管理

### Mastra 客户端 (mastraClient.ts)
- 用于与Mastra AI服务进行交互
- 集成了代码审查Agent功能
- 配置了专用的Cloudflare Workers端点

## 添加新客户端

在添加新的第三方服务客户端时，请遵循以下规范：

1. 创建独立的配置文件，使用格式：`[serviceName]Client.ts`
2. 在文件中导出配置好的客户端实例
3. 确保添加必要的类型定义和错误处理
4. 在本README中更新文档说明

## 使用示例

```typescript
// Apollo客户端使用示例
import apolloClient from './apolloClient';

// Mastra客户端使用示例
import { mastraClient } from './mastraClient';
const agent = mastraClient.getAgent('codeReviewAgent');
```