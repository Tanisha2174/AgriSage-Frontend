import React from 'react';
import { Sprout, Github, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Sprout size={24} className="text-green-400" />
              <h3 className="text-xl font-bold">AgriSage AI</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering farmers with AI-driven agricultural intelligence for better yields 
              and sustainable farming practices.
            </p>
            <div className="text-sm text-gray-400">
              Built for the Agriculture AI Challenge 2025
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Team Innov8ers</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>Tanisha Panesar</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Technology Stack</h4>
            <div className="space-y-1 text-sm text-gray-300">
              <div>Frontend: React Native, PWA</div>
              <div>Backend: Node.js, PostgreSQL</div>
              <div>AI/ML: LLaMA 3.1, TensorFlow Lite</div>
              <div>Integration: IMD, AgMarknet APIs</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Team Innov8ers. Built with ❤️ for Indian farmers.
          </div>
          <div className="flex items-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span className="text-sm">India</span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
