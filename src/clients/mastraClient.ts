import { MastraClient } from '@mastra/client-js';

export const mastraClient = new MastraClient({
  baseUrl: import.meta.env.DEV
    ? 'http://localhost:5173'
    : 'https://shosho-code-review-agent.cayleyws.workers.dev', // 你的 Cloudflare Workers URL
});
