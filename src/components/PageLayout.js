import React from 'react';

const PageLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-gray-400">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
};

export default PageLayout;