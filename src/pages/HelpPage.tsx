import React from 'react';
import { Footer } from '../components/Footer';
import { MessageCircle, FileText, Shield, HelpCircle } from 'lucide-react';

export const HelpPage = () => {
  return (
    <>
      <div className="bg-neutral-900 py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold text-center">Help Center</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold">Contact Support</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Need help? Our support team is available 24/7 to assist you.
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Contact Us
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold">FAQs</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Find answers to commonly asked questions about our services.
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              View FAQs
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">How do I sell tickets?</h3>
              <p className="text-gray-600">
                Click on "Sell Tickets" in the navigation menu, fill out the ticket details form, 
                and submit your listing. Our team will review and approve your listing within 24 hours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What payment methods are accepted?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and Apple Pay. All transactions are 
                secure and protected by our buyer guarantee.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do I get my tickets?</h3>
              <p className="text-gray-600">
                Once your purchase is confirmed, your tickets will be available for download 
                in your account. Mobile tickets will be transferred directly to your phone.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Buyer Protection</h3>
            <p className="text-gray-600">
              Every purchase is backed by our 100% buyer guarantee.
            </p>
          </div>
          
          <div className="text-center">
            <HelpCircle className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our support team is always here to help you.
            </p>
          </div>
          
          <div className="text-center">
            <MessageCircle className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600">
              Get instant help through our live chat support.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};