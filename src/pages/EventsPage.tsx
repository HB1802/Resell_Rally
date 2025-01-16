import React from 'react';
import { SearchSection } from '../components/SearchSection';
import { FeaturedEvents } from '../components/FeaturedEvents';
import { Footer } from '../components/Footer';
import { useEvents } from '../hooks/useEvents';

export const EventsPage = () => {
  const { events, loading } = useEvents();

  return (
    <>
      <div className="bg-neutral-900 py-12">
        <h1 className="text-white text-4xl font-bold text-center">All Events</h1>
      </div>
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