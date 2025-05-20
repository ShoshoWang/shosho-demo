import { MastraClient } from '@mastra/client-js';

export const mastraClient = new MastraClient({
  baseUrl: 'https://shosho-code-review-agent.cayleyws.workers.dev', // 你的 Cloudflare Workers URL
});
