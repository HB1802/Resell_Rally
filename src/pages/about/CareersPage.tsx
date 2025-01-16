import React from 'react';
import { Footer } from '../../components/Footer';
import { Building2, Mail } from 'lucide-react';

export const CareersPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Join Our Team</h1>
        <div className="space-y-8">
          <section>
            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Building2 className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-indigo-900">Currently Not Hiring</h2>
                  <p className="mt-2 text-gray-600">
                    While we don't have any open positions at the moment, we're always interested 
                    in meeting talented individuals. Feel free to send your resume for future opportunities.
                  </p>
                  <div className="mt-4 flex items-center text-indigo-600">
                    <Mail className="h-5 w-5 mr-2" />
                    <a href="mailto:careers@resellrally.com" className="hover:text-indigo-700">
                      careers@resellrally.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Benefits & Perks</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Competitive salary and equity</li>
                  <li>Flexible work environment</li>
                  <li>Health and wellness benefits</li>
                  <li>Professional development budget</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">Culture & Values</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Innovation-driven environment</li>
                  <li>Diverse and inclusive workplace</li>
                  <li>Work-life balance</li>
                  <li>Regular team events</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};