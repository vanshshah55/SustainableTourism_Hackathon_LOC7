import React from 'react';

const Header = () => {
    return (
        <header className="relative z-50 bg-white dark:bg-gray-900">
            {/* Header content goes here */}
        </header>
    );
};

export default Header;


// import React from 'react';
// import Navbar from './Navbar';

// const Header = () => {
//   return (
//     <header className="relative z-50 bg-white dark:bg-gray-900">
//       <Navbar />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex items-center justify-between">
//           <div className="text-2xl font-bold text-[#FF6D00]">EcoTravel</div>
//           <nav className="hidden md:flex space-x-4">
//             <a href="#features" className="text-gray-800 dark:text-gray-200 hover:text-[#FF6D00] transition-colors">Features</a>
//             <a href="#destinations" className="text-gray-800 dark:text-gray-200 hover:text-[#FF6D00] transition-colors">Destinations</a>
//             <a href="#accessibility" className="text-gray-800 dark:text-gray-200 hover:text-[#FF6D00] transition-colors">Accessibility</a>
//             <a href="#crowdMonitor" className="text-gray-800 dark:text-gray-200 hover:text-[#FF6D00] transition-colors">Crowd Monitor</a>
//             <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-[#FF6D00] transition-colors">Contact</a>
//           </nav>
//           <div className="md:hidden">
//             <button className="text-gray-800 dark:text-gray-200 hover:text-[#FF6D00] transition-colors">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;