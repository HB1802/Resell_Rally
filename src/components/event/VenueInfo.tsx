import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface VenueInfoProps {
  name: string;
  address: string;
  seatingChartUrl: string;
}

export const VenueInfo: React.FC<VenueInfoProps> = ({ name, address, seatingChartUrl }) => {
  const [showSeatingChart, setShowSeatingChart] = useState(false);

  return (
    <>
      <h3 className="text-xl font-bold mt-8 mb-4">Venue Information</h3>
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-gray-600 mt-1" />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-gray-600 mt-2">{address}</p>
          </div>
        </div>
        <div className="mt-4">
          <button 
            onClick={() => setShowSeatingChart(true)}
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            View Seating Chart
          </button>
        </div>
      </div>

      {showSeatingChart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Seating Chart</h3>
              <button 
                onClick={() => setShowSeatingChart(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <img 
              src={seatingChartUrl} 
              alt="Venue seating chart" 
              className="w-full"
            />
          </div>
        </div>
      )}
    </>
  );
};