import React from 'react';
import { motion } from 'framer-motion';

const Accessibility = () => {
  return (
    <section id="accessibility" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Accessible Tourism For All
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Making India's heritage accessible to every traveler
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Accessibility Features */}
          <motion.div 
            className="bg-neutral-800 rounded-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Accessibility Features</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 hover:bg-neutral-700 p-4 rounded-lg transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`p-3 rounded-full flex-shrink-0 ${feature.bgColor}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Real-time Assistance */}
          <motion.div 
            className="bg-neutral-800 rounded-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Real-time Assistance</h3>
            <div className="bg-neutral-700 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold">Available Support Staff</span>
                <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">Online</span>
              </div>
              <div className="space-y-4">
                {supportStaff.map((staff, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-4 hover:bg-neutral-600 p-2 rounded-lg transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">{staff}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* <div className="bg-neutral-700 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-4">Quick Request Assistance</h4>
              <div className="grid grid-cols-2 gap-4">
                {assistanceOptions.map((option, index) => (
                  <motion.button 
                    key={index} 
                    className={`${option.style} p-3 rounded-lg flex items-center justify-center gap-2 transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.icon}
                    {option.text}
                  </motion.button>
                ))}
              </div> */}
            {/* </div> */}
          </motion.div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Accessibility Information</h3>
          <div className="grid gap-12 lg:grid-cols-3">
            {additionalInfo.map((info, index) => (
              <motion.a 
                key={index} 
                href={info.link}
                className="bg-neutral-800 rounded-xl p-8 block hover:bg-neutral-700 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-full flex-shrink-0 ${info.bgColor}`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{info.title}</h4>
                    <p className="text-gray-400">{info.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Wheelchair Accessibility",
    description: "Detailed information about ramps, elevators, and wheelchair-friendly paths at every destination.",
    bgColor: "bg-[#FF6D00]",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
  },
  {
    title: "Visual Assistance",
    description: "Audio descriptions, braille guides, and high-contrast navigation assistance.",
    bgColor: "bg-[#2E7D32]",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
  },
  {
    title: "Smart Navigation",
    description: "AI-powered route suggestions optimized for accessibility needs.",
    bgColor: "bg-[#1565C0]",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673"></path></svg>
  }
];

const supportStaff = ["Sign Language Interpreter", "Mobility Assistant", "Medical Support"];


const additionalInfo = [
  {
    title: "Service Animals",
    description: "Guidelines and facilities for travelers with service animals, including pet-friendly accommodations.",
    bgColor: "bg-[#FF6D00]",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM5 12c0 1.657-1.343 3-3 3S-1 13.657-1 12s1.343-3 3-3 3 1.343 3 3z"></path></svg>,
    link: "/service-animals"
  },
  {
    title: "Accessible Transportation",
    description: "Information on accessible public transportation options, including buses, trains, and taxis.",
    bgColor: "bg-[#2E7D32]",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM5 12c0 1.657-1.343 3-3 3S-1 13.657-1 12s1.343-3 3-3 3 1.343 3 3z"></path></svg>,
    link: "/accessible-transportation"
  },
  {
    title: "Emergency Services",
    description: "Contact details and procedures for emergency services tailored for differently-abled travelers.",
    bgColor: "bg-[#1565C0]",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM5 12c0 1.657-1.343 3-3 3S-1 13.657-1 12s1.343-3 3-3 3 1.343 3 3z"></path></svg>,
    link: "/emergency-services"
  },
  {
    title: "Weather Guide",
    description: "Check climate conditions for your destination.",
    bgColor: "bg-[#FF6D00]",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM5 12c0 1.657-1.343 3-3 3S-1 13.657-1 12s1.343-3 3-3 3 1.343 3 3z"></path></svg>,
    link: "/weather-guide"
  },
  {
    title: "Tourism Information Centre",
    description: "Find local tourism offices for assistance.",
    bgColor: "bg-[#2E7D32]",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM5 12c0 1.657-1.343 3-3 3S-1 13.657-1 12s1.343-3 3-3 3 1.343 3 3z"></path></svg>,
    link: "/tourism-information-centre"
  },
  // {
  //   title: "Emergency Numbers",
  //   description: "Important contact numbers for emergencies.",
  //   bgColor: "bg-[#1565C0]",
  //   icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM5 12c0 1.657-1.343 3-3 3S-1 13.657-1 12s1.343-3 3-3 3 1.343 3 3z"></path></svg>,
  //   link: "/emergency-numbers"
  // },
  {
    title: "Public Holidays",
    description: "Know the public holidays before planning.",
    bgColor: "bg-[#FF6D00]",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM5 12c0 1.657-1.343 3-3 3S-1 13.657-1 12s1.343-3 3-3 3 1.343 3 3z"></path></svg>,
    link: "/public-holidays"
  }
];

export default Accessibility;