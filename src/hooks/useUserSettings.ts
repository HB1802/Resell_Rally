import { useState } from 'react';

interface NotificationSettings {
  email: boolean;
  push: boolean;
  marketing: boolean;
}

interface PrivacySettings {
  showProfile: boolean;
  showPurchaseHistory: boolean;
}

export const useUserSettings = () => {
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    email: true,
    push: true,
    marketing: false
  });

  const [privacySettings, setPrivacySettings] = useState<PrivacySettings>({
    showProfile: true,
    showPurchaseHistory: false
  });

  const updateNotificationSettings = (updates: Partial<NotificationSettings>) => {
    setNotificationSettings(prev => ({ ...prev, ...updates }));
  };

  const updatePrivacySettings = (updates: Partial<PrivacySettings>) => {
    setPrivacySettings(prev => ({ ...prev, ...updates }));
  };

  return {
    notificationSettings,
    privacySettings,
    updateNotificationSettings,
    updatePrivacySettings
  };
};