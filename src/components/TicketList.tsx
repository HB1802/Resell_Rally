import React from 'react';
import { TicketCard } from './TicketCard';

const sampleTickets = [
  {
    id: 1,
    eventName: "Taylor Swift | The Eras Tour",
    date: "Mar 15, 2024",
    location: "SoFi Stadium, LA",
    section: "A3",
    row: "12",
    price: 299,
    sellerRating: 4.8,
    verified: true,
  },
  {
    id: 2,
    eventName: "Taylor Swift | The Eras Tour",
    date: "Mar 15, 2024",
    location: "SoFi Stadium, LA",
    section: "B5",
    row: "20",
    price: 250,
    sellerRating: 4.5,
    verified: true,
  },
];

export const TicketList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-6">
        {sampleTickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};