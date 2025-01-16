import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MyTickets } from './sections/MyTickets';
import { Balance } from './sections/Balance';
import { PaymentMethods } from './sections/PaymentMethods';
import { PurchaseHistory } from './sections/PurchaseHistory';
import { Notifications } from './sections/Notifications';
import { Settings } from './sections/Settings';

export const DashboardContent = () => {
  return (
    <div className="lg:col-span-3">
      <Routes>
        <Route path="/tickets" element={<MyTickets />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/payments" element={<PaymentMethods />} />
        <Route path="/history" element={<PurchaseHistory />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<MyTickets />} />
      </Routes>
    </div>
  );
};