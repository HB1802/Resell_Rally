import React from 'react';
import { Link } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  minPrice: number;
  category: string;
}

interface FeaturedEventsProps {
  events: Event[];
}

export const FeaturedEvents: React.FC<FeaturedEventsProps> = ({ events }) => {
  if (events.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-gray-600">
          No events found matching your criteria.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link 
            key={event.id} 
            to={`/events/${event.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
              <div className="text-neutral-600">
                <p>{event.date}</p>
                <p>{event.location}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-neutral-500">From</span>
                <span className="text-lg font-bold">${event.minPrice}</span>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  {event.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};