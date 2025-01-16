import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket, Twitter, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <Ticket className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">Resell Rally</span>
            </Link>
            <p className="mt-4 text-neutral-400">
              The trusted marketplace for tickets and live events.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/about/how-it-works" className="hover:text-white">How it Works</Link></li>
              <li><Link to="/about/press" className="hover:text-white">Press</Link></li>
              <li><Link to="/about/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/help/safety" className="hover:text-white">Safety</Link></li>
              <li><Link to="/help/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 text-neutral-400 text-sm">
          <p>&copy; 2024 Resell Rally. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};