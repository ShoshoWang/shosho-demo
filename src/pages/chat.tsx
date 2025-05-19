import React, { useState, FormEvent } from 'react';
import { useQuery, gql } from '@apollo/client';
import './App.css';

// 定义 GraphQL 查询
const ASK_AI = gql`
  query AskAI($prompt: String!) {
    askAI(prompt: $prompt)
  }
`;

// 定义查询返回的数据类型
interface AskAIData {
  askAI: string;
}

// 定义查询变量类型
interface AskAIVariables {
  prompt: string;
}

const App: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [submitQuestion, setSubmitQuestion] = useState<string>('');
  const { data, loading, error } = useQuery<AskAIData, AskAIVariables>(ASK_AI, {
    variables: { prompt: submitQuestion },
    skip: !submitQuestion, // 仅在 submitQuestion 不为空时执行查询
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (question.trim()) {
      setSubmitQuestion(question); // 触发查询
      setQuestion(''); // 清空输入框
    }
  };

  return (
    <div className="App">
      <h1>AI 问答工具</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)}
          placeholder="请输入您的问题"
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? '处理中...' : '提交'}
        </button>
      </form>
      {error && <p className="error">错误：{error.message}</p>}
      {data && data.askAI && (
        <div className="answer">
          <h3>回答：</h3>
          <p>{data.askAI}</p>
        </div>
      )}
    </div>
  );
};

export default App;