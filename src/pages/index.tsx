import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="iframe-container" style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="http://127.0.0.1:3000/"
        title="External Content"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          overflow: 'hidden',
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default HomePage;