import React from 'react';
import { gql, useQuery } from '@apollo/client';

// 定义 GraphQL 查询
const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

const UserProfile: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: '1' },
  });

  if (loading) return <p>加载中...</p>;
  if (error) return <p>错误：{error.message}</p>;

  const { user } = data;
  return (
    <div>
      <h1>{user.name}</h1>
      <p>ID: {user.id}</p>
      <p>邮箱: {user.email}</p>
    </div>
  );
};

export default UserProfile;
