import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';

interface EventHeroProps {
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
}

export const EventHero: React.FC<EventHeroProps> = ({ title, date, time, location, imageUrl }) => {
  return (
    <div className="relative h-96">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};