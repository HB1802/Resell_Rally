import React from 'react';
import { Share2 } from 'lucide-react';

interface EventShareProps {
  eventTitle: string;
  eventUrl: string;
}

export const EventShare: React.FC<EventShareProps> = ({ eventTitle, eventUrl }) => {
  const shareText = `Check out ${eventTitle} on Resell Rally!`;
  
  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(eventUrl)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Share Event</h3>
        <Share2 className="h-5 w-5 text-gray-600" />
      </div>
      <div className="space-y-4">
        <button 
          onClick={shareFacebook}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Share on Facebook
        </button>
        <button 
          onClick={shareTwitter}
          className="w-full bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors"
        >
          Share on Twitter
        </button>
      </div>
    </div>
  );
};