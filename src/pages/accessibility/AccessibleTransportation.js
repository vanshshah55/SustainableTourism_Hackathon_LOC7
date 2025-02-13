import React from 'react';
import { motion } from 'framer-motion';

const AccessibleTransportation = () => {
  return (
    <div className="py-20 bg-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.h1 
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Accessible Transportation
        </motion.h1>
        <motion.p 
          className="text-gray-400 text-lg mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Information on accessible public transportation options, including buses, trains, and taxis.
        </motion.p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div 
            className="bg-neutral-800 p-6 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Buses</h2>
            <p className="text-gray-400">Accessible buses with ramps and designated seating areas.</p>
          </motion.div>
          <motion.div 
            className="bg-neutral-800 p-6 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Trains</h2>
            <p className="text-gray-400">Trains equipped with accessible carriages and assistance services.</p>
          </motion.div>
          <motion.div 
            className="bg-neutral-800 p-6 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Taxis</h2>
            <p className="text-gray-400">Wheelchair-accessible taxis available on demand.</p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <motion.a 
            href="/eco-friendly-tourism" 
            className="inline-block bg-[#FF6D00] hover:bg-[#FF8F00] text-white font-bold py-3 px-6 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default AccessibleTransportation;