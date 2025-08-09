import React from 'react';
import { artists } from '../data/artData';

const Artists: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-center mb-12 text-gray-800">
          著名艺术家
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={artist.portrait} 
                alt={artist.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold mb-2">{artist.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{artist.period}</p>
                <p className="text-gray-600 mb-3">{artist.nationality} • {artist.lifespan}</p>
                <p className="text-gray-700 text-sm mb-4">{artist.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {artist.styles.map((style, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {style}
                    </span>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">代表作品:</h4>
                  <ul className="text-sm text-gray-600">
                    {artist.masterworks.map((work, i) => (
                      <li key={i}>• {work}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Artists;