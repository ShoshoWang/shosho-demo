import React, { useState } from 'react';
import { mastraClient } from '../clients/mastraClient';
import { Select, Button, Input, Card } from 'antd';
const { TextArea } = Input;

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
    <div className="p-5 mx-auto max-w-4xl">
      <h1 className="mb-6 text-3xl font-bold">Code Review</h1>
      {/* 选择语言 */}
      <div className="mb-4">
        <Select
          className="w-48"
          value={language}
          onChange={value => setLanguage(value)}
          options={[
            { value: 'JavaScript', label: 'JavaScript' },
            { value: 'TypeScript', label: 'TypeScript' },
            { value: 'Python', label: 'Python' },
            { value: 'Java', label: 'Java' },
          ]}
        />
      </div>

      {/* 输入代码 */}
      <div className="mb-4">
        <TextArea
          rows={10}
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Paste your code here..."
          className="font-mono"
        />
      </div>

      {/* 提交按钮 */}
      <Button
        type="primary"
        onClick={handleReview}
        loading={loading}
        disabled={!code.trim()}
        className="mb-6"
      >
        {loading ? 'Reviewing...' : 'Submit for Review'}
      </Button>

      {/* 显示审查结果 */}
      {review && (
        <Card title="Review Result" className="mt-6">
          <pre className="p-4 whitespace-pre-wrap bg-gray-50 rounded">{review}</pre>
        </Card>
      )}

      {/* 显示错误 */}
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </div>
  );
};

export default CodeReview;
