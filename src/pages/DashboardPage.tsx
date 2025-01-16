import React from 'react';
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { DashboardContent } from '../components/dashboard/DashboardContent';

export const DashboardPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <DashboardSidebar />
        <DashboardContent />
      </div>
    </div>
  );
};