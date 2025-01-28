import React from 'react';
import { Newspaper, TrendingUp, Calendar, CloudSun } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'New Messages', value: '12', icon: Newspaper, color: 'bg-blue-500' },
          { label: 'Tasks Complete', value: '8/10', icon: TrendingUp, color: 'bg-green-500' },
          { label: 'Upcoming Events', value: '3', icon: Calendar, color: 'bg-purple-500' },
          { label: 'Weather', value: '72°F', icon: CloudSun, color: 'bg-yellow-500' },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { title: 'New message from Sarah', time: '5 minutes ago' },
            { title: 'Task "Update Documentation" completed', time: '1 hour ago' },
            { title: 'Meeting scheduled with Team', time: '2 hours ago' },
            { title: 'Project milestone achieved', time: '1 day ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;