import React, { useState } from 'react';
import { mastraClient } from '../clients/mastraClient';

// 定义响应类型（根据你的 Agent 输出结构）
interface CodeReviewResponse {
  text: string; // Agent 返回的审查结果
  error?: string; // 错误信息（如果有）
}

const CodeReview: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [language, setLanguage] = useState<string>('JavaScript');
  const [review, setReview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleReview = async () => {
    setLoading(true);
    setError(null);
    setReview(null);

    try {
      // 获取 Code Review Agent
      const agent = mastraClient.getAgent('codeReviewAgent');

      // 调用 Agent，构造 messages 数组
      const response: CodeReviewResponse = await agent.generate({
        messages: [`Review this ${language} code:\n${code}`], // 包装为数组
      });
      // 设置审查结果
      if (response.error) {
        setError(response.error);
      } else {
        setReview(response.text);
      }
    } catch (err) {
      setError(`Failed to get code review: ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Code Review</h2>

      {/* 选择语言 */}
      <div>
        <label>
          Language:
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
          </select>
        </label>
      </div>

      {/* 输入代码 */}
      <div style={{ marginTop: '10px' }}>
        <textarea
          rows={10}
          cols={50}
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Paste your code here..."
          style={{ width: '100%', fontFamily: 'monospace' }}
        />
      </div>

      {/* 提交按钮 */}
      <button
        onClick={handleReview}
        disabled={loading || !code.trim()}
        style={{ marginTop: '10px' }}
      >
        {loading ? 'Reviewing...' : 'Submit for Review'}
      </button>

      {/* 显示审查结果 */}
      {review && (
        <div style={{ marginTop: '20px' }}>
          <h3>Review Result:</h3>
          <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
            {review}
          </pre>
        </div>
      )}

      {/* 显示错误 */}
      {error && <div style={{ marginTop: '10px', color: 'red' }}>{error}</div>}
    </div>
  );
};

export default CodeReview;
