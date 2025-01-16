import React from 'react';
import { Footer } from '../../components/Footer';

export const HowItWorksPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">How It Works</h1>
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Buying Tickets</h2>
            <p className="text-gray-600">
              Find the perfect tickets for your favorite events in just a few clicks. 
              Our secure platform ensures every transaction is protected.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Selling Tickets</h2>
            <p className="text-gray-600">
              List your tickets quickly and reach thousands of buyers. 
              Set your price and manage your listings with our easy-to-use tools.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Secure Transactions</h2>
            <p className="text-gray-600">
              Every purchase is backed by our buyer guarantee. 
              Payments are processed securely, and tickets are verified before listing.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};