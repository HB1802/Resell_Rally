import React, { useState } from 'react';
import { User, Lock, Bell, Shield } from 'lucide-react';
import { useUserData } from '../../../hooks/useUserData';
import { useUserSettings } from '../../../hooks/useUserSettings';
import { Toast } from '../../common/Toast';

export const Settings = () => {
  const { userData, updateUserData } = useUserData();
  const { 
    notificationSettings, 
    privacySettings,
    updateNotificationSettings,
    updatePrivacySettings
  } = useUserSettings();
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      await updateUserData({
        name: formData.get('name') as string,
        email: formData.get('email') as string
      });
      showToast('Profile updated successfully', 'success');
    } catch (error) {
      showToast('Failed to update profile', 'error');
    }
  };

  const handlePasswordChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const currentPassword = formData.get('currentPassword') as string;
      const newPassword = formData.get('newPassword') as string;
      const confirmPassword = formData.get('confirmPassword') as string;

      if (newPassword !== confirmPassword) {
        showToast('New passwords do not match', 'error');
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsChangingPassword(false);
      showToast('Password updated successfully', 'success');
    } catch (error) {
      showToast('Failed to update password', 'error');
    }
  };

  const handleNotificationUpdate = async (key: string, value: boolean) => {
    try {
      await updateNotificationSettings({ [key]: value });
      showToast('Notification settings updated', 'success');
    } catch (error) {
      showToast('Failed to update notification settings', 'error');
    }
  };

  const handlePrivacyUpdate = async (key: string, value: boolean) => {
    try {
      await updatePrivacySettings({ [key]: value });
      showToast('Privacy settings updated', 'success');
    } catch (error) {
      showToast('Failed to update privacy settings', 'error');
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
        
        <div className="space-y-6">
          <section className="border-b pb-6">
            <h3 className="flex items-center text-lg font-medium mb-4">
              <User className="h-5 w-5 mr-2" />
              Profile Information
            </h3>
            <form onSubmit={handleProfileUpdate} className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  name="name"
                  type="text"
                  defaultValue={userData.name}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  name="email"
                  type="email"
                  defaultValue={userData.email}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Save Changes
              </button>
            </form>
          </section>

          <section className="border-b pb-6">
            <h3 className="flex items-center text-lg font-medium mb-4">
              <Lock className="h-5 w-5 mr-2" />
              Security
            </h3>
            {isChangingPassword ? (
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Update Password
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsChangingPassword(false)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <button
                onClick={() => setIsChangingPassword(true)}
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Change Password
              </button>
            )}
          </section>

          <section className="border-b pb-6">
            <h3 className="flex items-center text-lg font-medium mb-4">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </h3>
            <div className="space-y-4">
              {Object.entries(notificationSettings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium capitalize">{key} Notifications</div>
                    <div className="text-sm text-gray-500">
                      Receive updates about your tickets and account
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => handleNotificationUpdate(key, e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="flex items-center text-lg font-medium mb-4">
              <Shield className="h-5 w-5 mr-2" />
              Privacy
            </h3>
            <div className="space-y-4">
              {Object.entries(privacySettings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">
                      {key === 'showProfile' ? 'Show Profile to Others' : 'Show Purchase History'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {key === 'showProfile' 
                        ? 'Allow other users to see your profile'
                        : 'Show your purchase history on your public profile'
                      }
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => handlePrivacyUpdate(key, e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {toast.show && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};