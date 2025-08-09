import React from 'react';
import { artPeriods } from '../data/artData';

const Periods: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-center mb-12 text-gray-800">
          艺术史时期
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            {artPeriods.map((period, index) => (
              <div key={index} className="relative pl-12 pb-8 last:pb-0">
                <div className="absolute left-2 w-4 h-4 bg-primary-500 rounded-full -ml-2 top-2"></div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-serif font-semibold text-gray-800">
                      {period.name}
                    </h3>
                    <span className="text-primary-600 font-medium">
                      {period.period}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{period.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {period.characteristics.map((char, i) => (
                      <span key={i} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Periods;