import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer">
            <h1 className="text-2xl font-bold flex items-center">
              <span className="text-bank-yellow mr-1">BK</span>
              <div className="flex flex-col text-sm leading-tight text-bank-blue ml-1">
                <span>Bank</span>
                <span>Karanganyar</span>
              </div>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-bank-blue font-semibold border-b-2 border-bank-blue pb-1">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-bank-blue font-medium transition-colors">
              About
            </a>
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-600 hover:text-bank-blue font-medium focus:outline-none transition-colors"
              >
                Layanan <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-3 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-bank-light hover:text-bank-blue">
                    Aduan
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-bank-light hover:text-bank-blue">
                    Contact Us
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;