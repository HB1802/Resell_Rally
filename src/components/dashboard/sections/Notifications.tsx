import React, { useState } from 'react';
import { Bell, DollarSign, Ticket, Settings, Trash2, Check } from 'lucide-react';
import { useNotifications } from '../../../hooks/useNotifications';
import { Toast } from '../../common/Toast';

export const Notifications = () => {
  const { notifications, markAsRead, markAllAsRead, deleteNotification } = useNotifications();
  const [showSettings, setShowSettings] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const handleMarkAsRead = async (id: number) => {
    try {
      await markAsRead(id);
      showToast('Notification marked as read', 'success');
    } catch (error) {
      showToast('Failed to mark notification as read', 'error');
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead();
      showToast('All notifications marked as read', 'success');
    } catch (error) {
      showToast('Failed to mark all notifications as read', 'error');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteNotification(id);
      showToast('Notification deleted', 'success');
    } catch (error) {
      showToast('Failed to delete notification', 'error');
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <div className="flex space-x-4">
            <button
              onClick={handleMarkAllAsRead}
              className="flex items-center text-indigo-600 hover:text-indigo-700"
            >
              <Check className="h-5 w-5 mr-1" />
              Mark all as read
            </button>
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center text-indigo-600 hover:text-indigo-700"
            >
              <Settings className="h-5 w-5 mr-1" />
              Settings
            </button>
          </div>
        </div>

        {showSettings && (
          <div className="mb-6 p-4 border rounded-lg">
            <h3 className="font-semibold mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Email Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>Push Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              No notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`flex items-start justify-between p-4 rounded-lg ${
                  notification.read ? 'bg-white' : 'bg-indigo-50'
                }`}
              >
                <div className="flex items-start flex-1">
                  <div className={`p-2 rounded-full ${
                    notification.read ? 'bg-gray-100' : 'bg-indigo-100'
                  }`}>
                    {notification.type === 'sale' ? (
                      <Ticket className="h-5 w-5" />
                    ) : notification.type === 'payment' ? (
                      <DollarSign className="h-5 w-5" />
                    ) : (
                      <Bell className="h-5 w-5" />
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <p className={`${notification.read ? 'text-gray-600' : 'text-gray-900'}`}>
                      {notification.message}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {!notification.read && (
                    <button
                      onClick={() => handleMarkAsRead(notification.id)}
                      className="text-indigo-600 hover:text-indigo-700"
                    >
                      <Check className="h-5 w-5" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(notification.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {toast.show && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};