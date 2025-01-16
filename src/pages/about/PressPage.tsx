import React from 'react';
import { Footer } from '../../components/Footer';

export const PressPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Press Room</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
            <div className="grid gap-6">
              {/* Add press releases/news items here */}
              <div className="border rounded-lg p-6">
                <span className="text-sm text-gray-500">March 1, 2024</span>
                <h3 className="text-xl font-medium mt-2">Resell Rally Launches New Mobile App</h3>
                <p className="text-gray-600 mt-2">
                  Making ticket buying and selling even easier with our new mobile experience.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Media Resources</h2>
            <div className="prose max-w-none">
              <p>For media inquiries, please contact our press team at press@resellrally.com</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};