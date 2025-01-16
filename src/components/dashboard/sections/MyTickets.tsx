import React, { useState } from 'react';
import { Tag, MapPin, Calendar, Edit2 } from 'lucide-react';
import { useTickets, Ticket } from '../../../hooks/useTickets';

export const MyTickets = () => {
  const { tickets, updateTicket } = useTickets();
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);

  const handleEditPrice = async (ticket: Ticket, newPrice: number) => {
    if (newPrice <= 0) return;
    await updateTicket(ticket.id, { price: newPrice });
    setEditingTicket(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">My Listings</h2>
      <div className="space-y-6">
        {tickets.map((ticket) => (
          <div 
            key={ticket.id}
            className={`border rounded-lg p-4 ${
              ticket.status === 'pending' ? 'bg-yellow-50' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{ticket.eventName}</h3>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{ticket.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{ticket.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Tag className="h-4 w-4 mr-1" />
                  <span>Section {ticket.section}, Row {ticket.row}</span>
                </div>
              </div>
              <div className="text-right">
                {editingTicket?.id === ticket.id ? (
                  <div className="space-y-2">
                    <input
                      type="number"
                      defaultValue={ticket.price}
                      className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const input = e.target as HTMLInputElement;
                          handleEditPrice(ticket, parseFloat(input.value));
                        }
                      }}
                    />
                    <div className="text-sm text-gray-500">Press Enter to save</div>
                  </div>
                ) : (
                  <>
                    <div className="font-semibold">${ticket.price}</div>
                    <div className={`text-sm ${
                      ticket.status === 'pending' 
                        ? 'text-yellow-600' 
                        : 'text-green-600'
                    }`}>
                      {ticket.status === 'pending' ? 'Pending Sale' : 'Active'}
                    </div>
                    {ticket.status === 'active' && (
                      <button 
                        onClick={() => setEditingTicket(ticket)}
                        className="mt-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center justify-end w-full"
                      >
                        <Edit2 className="h-4 w-4 mr-1" />
                        Edit Price
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};