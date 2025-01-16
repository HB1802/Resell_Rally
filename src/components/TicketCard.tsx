import React from 'react';
import { Tag, MapPin, Calendar, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TicketCardProps {
  ticket: {
    id: number;
    eventName: string;
    date: string;
    location: string;
    section: string;
    row: string;
    price: number;
    sellerRating: number;
    verified: boolean;
  };
}

export const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    // In a real app, this would navigate to a checkout page
    navigate(`/checkout/ticket/${ticket.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{ticket.eventName}</h3>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{ticket.date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{ticket.location}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">${ticket.price}</div>
          <div className="text-sm text-gray-500">per ticket</div>
        </div>
      </div>
      
      <div className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-600">
            <Tag className="h-4 w-4 mr-1" />
            <span>Section {ticket.section}, Row {ticket.row}</span>
          </div>
          {ticket.verified && (
            <div className="flex items-center text-green-600">
              <Shield className="h-4 w-4 mr-1" />
              <span className="text-sm">Verified</span>
            </div>
          )}
        </div>
        <button 
          onClick={handleBuyNow}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};