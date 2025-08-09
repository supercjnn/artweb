import React, { useState, useMemo } from 'react';
import { artworks } from '../data/artData';
import SearchBar from '../components/SearchBar';

const Gallery: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArtworks = useMemo(() => {
    if (!searchQuery) return artworks;
    
    return artworks.filter(artwork => 
      artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.medium.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-center mb-8 text-gray-800">
          作品画廊
        </h1>
        
        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar 
            placeholder="搜索作品、艺术家或描述..."
            onSearch={setSearchQuery}
          />
        </div>

        {filteredArtworks.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0118 12H22l-3.353-3.353a1.002 1.002 0 01-.094-1.307L21 5a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">未找到相关作品</h3>
            <p className="text-gray-500">尝试使用不同的关键词搜索</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <div key={artwork.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={artwork.image} 
                alt={artwork.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-serif font-semibold mb-1">{artwork.title}</h3>
                <p className="text-primary-600 font-medium text-sm mb-2">{artwork.artist}</p>
                <p className="text-gray-600 text-sm mb-2">{artwork.year} • {artwork.medium}</p>
                <p className="text-gray-700 text-sm mb-2">{artwork.description}</p>
                {artwork.dimensions && (
                  <p className="text-gray-500 text-xs">尺寸: {artwork.dimensions}</p>
                )}
                {artwork.location && (
                  <p className="text-gray-500 text-xs">收藏: {artwork.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Gallery;