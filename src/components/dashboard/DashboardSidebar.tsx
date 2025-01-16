import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Ticket, DollarSign, Bell, Settings, CreditCard, History } from 'lucide-react';

const sidebarLinks = [
  { icon: Ticket, label: 'My Tickets', path: '/dashboard/tickets' },
  { icon: DollarSign, label: 'Balance', path: '/dashboard/balance' },
  { icon: CreditCard, label: 'Payment Methods', path: '/dashboard/payments' },
  { icon: History, label: 'Purchase History', path: '/dashboard/history' },
  { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-3 p-2 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};