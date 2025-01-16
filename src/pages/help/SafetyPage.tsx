import React from 'react';
import { Footer } from '../../components/Footer';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

export const SafetyPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <Shield className="h-8 w-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold">Safety Center</h1>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Buyer Protection</h2>
            <div className="bg-green-50 border border-green-100 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-900">100% Guarantee</h3>
                  <p className="mt-2 text-gray-600">
                    Every ticket purchase is backed by our buyer guarantee. If your event is 
                    cancelled and not rescheduled, you'll receive a full refund.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Safe Buying Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-3">Do's</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Always purchase through our secure platform</li>
                  <li>✓ Check seller ratings and reviews</li>
                  <li>✓ Verify event details before purchasing</li>
                  <li>✓ Keep communication within our platform</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-3">Don'ts</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✗ Never pay outside the platform</li>
                  <li>✗ Don't share personal payment information</li>
                  <li>✗ Avoid deals that seem too good to be true</li>
                  <li>✗ Never buy tickets from unverified sources</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Report an Issue</h2>
            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <p className="text-gray-600">
                    If you notice suspicious activity or need to report an issue, 
                    please contact our support team immediately.
                  </p>
                  <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    Report an Issue
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};