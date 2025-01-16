import React from 'react';

export const Hero = () => {
  return (
    <div className="relative bg-neutral-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Concert crowd"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Your Next Event Awaits
        </h1>
        <p className="mt-6 text-xl max-w-3xl">
          Secure tickets to the most exclusive concerts, sports events, and shows. 
          Buy and sell with confidence on Resell Rally.
        </p>
      </div>
    </div>
  );
};