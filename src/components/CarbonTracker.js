import React from 'react';
import PageLayout from './PageLayout';

const CarbonTracker = () => {
  return (
    <PageLayout 
      title="Carbon Footprint Tracker"
      subtitle="Monitor and reduce your carbon footprint"
    >
      <div className="bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Hello World
        </h2>
      </div>
    </PageLayout>
  );
};

export default CarbonTracker;