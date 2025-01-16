import React, { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SearchSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/events?search=${searchQuery}&location=${location}&date=${date}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center border-b md:border-b-0 md:border-r border-neutral-200 pb-4 md:pb-0 md:pr-4">
            <Search className="h-5 w-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-3 flex-1 border-none focus:ring-0"
            />
          </div>
          
          <div className="flex items-center border-b md:border-b-0 md:border-r border-neutral-200 pb-4 md:pb-0 md:px-4">
            <MapPin className="h-5 w-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="ml-3 flex-1 border-none focus:ring-0"
            />
          </div>
          
          <div className="flex items-center md:pl-4">
            <Calendar className="h-5 w-5 text-neutral-400" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="ml-3 flex-1 border-none focus:ring-0"
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Search Events
          </button>
        </div>
      </form>
    </div>
  );
};