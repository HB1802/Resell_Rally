import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { EventHero } from './event/EventHero';
import { EventShare } from './event/EventShare';
import { VenueInfo } from './event/VenueInfo';
import { TicketList } from './TicketList';

export const EventDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

  // In a real app, fetch event details using the ID
  const event = {
    title: "Taylor Swift | The Eras Tour",
    date: "March 15, 2024",
    time: "7:00 PM",
    location: "SoFi Stadium, Los Angeles",
    imageUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Experience Taylor Swift's record-breaking Eras Tour live at SoFi Stadium. This three-hour musical journey spans all of Taylor's albums, featuring elaborate set designs, multiple costume changes, and all of her biggest hits.",
    venue: {
      name: "SoFi Stadium",
      address: "1001 Stadium Dr, Inglewood, CA 90301",
      seatingChartUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  };

  return (
    <div className="bg-white">
      <EventHero
        title={event.title}
        date={event.date}
        time={event.time}
        location={event.location}
        imageUrl={event.imageUrl}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Event Information</h2>
              <p className="text-gray-600">{event.description}</p>
              
              <VenueInfo
                name={event.venue.name}
                address={event.venue.address}
                seatingChartUrl={event.venue.seatingChartUrl}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <EventShare
              eventTitle={event.title}
              eventUrl={currentUrl}
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Available Tickets</h2>
          <TicketList />
        </div>
      </div>
    </div>
  );
};