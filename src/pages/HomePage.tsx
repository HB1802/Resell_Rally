import React from 'react';
import { Hero } from '../components/Hero';
import { SearchSection } from '../components/SearchSection';
import { FeaturedEvents } from '../components/FeaturedEvents';
import { Footer } from '../components/Footer';
import { useEvents } from '../hooks/useEvents';

export const HomePage = () => {
  const { events, loading } = useEvents();

  return (
    <>
      <Hero />
      <SearchSection />
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <FeaturedEvents events={events} />
      )}
      <Footer />
    </>
  );
};