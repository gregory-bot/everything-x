import React from 'react';
import { Bell, MessageCircle, CheckCircle, Calendar } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New message from Sarah',
      description: 'Hey, can we discuss the project?',
      time: '5 minutes ago',
      icon: MessageCircle,
      color: 'text-blue-500',
    },
    {
      id: 2,
      type: 'task',
      title: 'Task completed',
      description: 'Project documentation has been updated',
      time: '1 hour ago',
      icon: CheckCircle,
      color: 'text-green-500',
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Meeting reminder',
      description: 'Team sync in 30 minutes',
      time: '25 minutes ago',
      icon: Calendar,
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>

      <div className="bg-white rounded-lg shadow-sm divide-y">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div key={notification.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start">
                <div className={`${notification.color} p-2 rounded-lg`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                  <p className="text-sm text-gray-500">{notification.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;