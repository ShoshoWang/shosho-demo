import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy:
        mode === 'development'
          ? {
              '/api': {
                target: 'https://shosho-code-review-agent.cayleyws.workers.dev',
                changeOrigin: true,
                secure: false,
                rewrite: path => path.replace(/^\/api/, ''),
              },
            }
          : undefined, // 生产环境不使用代理
    },
    // 设置别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
