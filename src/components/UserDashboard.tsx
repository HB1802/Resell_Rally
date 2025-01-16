import React from 'react';
import { Ticket, DollarSign, Bell, Settings } from 'lucide-react';

export const UserDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 rounded-full p-3">
                  <Ticket className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">My Tickets</div>
                  <div className="font-semibold">4 Active</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-3">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Balance</div>
                  <div className="font-semibold">$1,250.00</div>
                </div>
              </div>
              
              <div className="pt-6 border-t">
                <nav className="space-y-4">
                  <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
                    <Bell className="h-5 w-5" />
                    <span>Notifications</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">My Listings</h2>
            <div className="space-y-6">
              {/* Active Listings */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">NBA Finals 2024</h3>
                    <p className="text-sm text-gray-600">2 tickets • Section A3, Row 12</p>
                    <p className="text-sm text-gray-600">Jun 4, 2024</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">$499</div>
                    <div className="text-sm text-green-600">Active</div>
                  </div>
                </div>
              </div>

              {/* Pending Sale */}
              <div className="border rounded-lg p-4 bg-yellow-50">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Taylor Swift | The Eras Tour</h3>
                    <p className="text-sm text-gray-600">1 ticket • Section B5, Row 20</p>
                    <p className="text-sm text-gray-600">Mar 15, 2024</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">$299</div>
                    <div className="text-sm text-yellow-600">Pending Sale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};