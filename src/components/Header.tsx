import React from 'react';
import { Sprout, Users, Globe, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 text-gray-800 py-4 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
              <Sprout size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                AgriSage AI
              </h1>
              <div className="text-xs text-gray-600">by Team Innov8ers</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#demo" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              Demo
            </a>
            <a href="#features" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              Features
            </a>
            <a href="#architecture" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              Architecture
            </a>
            <a href="#team" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
              Team
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Globe size={16} className="text-green-600" />
                <span>Multilingual</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Offline Ready</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-medium">
              Try Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-green-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#demo" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Demo
              </a>
              <a href="#features" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Features
              </a>
              <a href="#architecture" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Architecture
              </a>
              <a href="#team" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Team
              </a>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-medium">
                  Try Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

