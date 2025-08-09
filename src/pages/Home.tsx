import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { artPeriods, artists } from '../data/artData';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="art-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              西方艺术史之旅
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              探索从古典到现代的艺术演变，深入了解每个时代的杰作与艺术家
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link
                to="/periods"
                className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block hover:scale-105 transform duration-200"
              >
                开始探索
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800">
          艺术史时期概览
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artPeriods.slice(0, 6).map((period, index) => (
            <motion.div
              key={period.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to="/periods"
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="overflow-hidden">
                  <img 
                    src={period.image} 
                    alt={period.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2">{period.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{period.period}</p>
                  <p className="text-gray-700 text-sm">{period.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12 text-gray-800">
            精选艺术家
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {artists.slice(0, 6).map((artist) => (
              <Link key={artist.id} to="/artists" className="text-center group">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gray-300 group-hover:shadow-lg transition-shadow">
                  <img 
                    src={artist.portrait} 
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-sm group-hover:text-primary-600 transition-colors">{artist.name}</h4>
                <p className="text-xs text-gray-600">{artist.period}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;