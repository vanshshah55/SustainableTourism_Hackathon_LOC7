// filepath: /d:/Pandas_LOC7-main/my-react-app/src/components/WasteManagement.js
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

const WasteManagement = () => {
  return (
    <PageLayout 
      title="Smart Waste Management"
      subtitle="IoT-enabled waste management solutions"
    >
      <div className="bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Hello World
        </h2>
      </div>
    </PageLayout>
  );
};

export default WasteManagement;