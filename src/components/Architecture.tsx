import React from 'react';
import { Database, Cloud, Smartphone, Zap, Shield, Globe, Brain, Camera } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          System Architecture & Methodology
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Architecture Flow */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-xl font-semibold mb-8 text-center">Data Flow Architecture</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
              {/* Input Layer */}
              <div className="md:col-span-1 text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-2">
                  <Camera size={24} className="text-blue-600 mx-auto" />
                </div>
                <p className="text-sm font-medium">User Input</p>
                <p className="text-xs text-gray-600">Voice/Text/Image</p>
              </div>
              
              <div className="hidden md:block text-center">
                <div className="w-8 h-0.5 bg-gray-300 mx-auto"></div>
              </div>
              
              {/* Processing Layer */}
              <div className="md:col-span-1 text-center">
                <div className="bg-green-100 p-4 rounded-lg mb-2">
                  <Brain size={24} className="text-green-600 mx-auto" />
                </div>
                <p className="text-sm font-medium">AI Processing</p>
                <p className="text-xs text-gray-600">NLP/Vision/NER</p>
              </div>
              
              <div className="hidden md:block text-center">
                <div className="w-8 h-0.5 bg-gray-300 mx-auto"></div>
              </div>
              
              {/* Data Layer */}
              <div className="md:col-span-1 text-center">
                <div className="bg-purple-100 p-4 rounded-lg mb-2">
                  <Database size={24} className="text-purple-600 mx-auto" />
                </div>
                <p className="text-sm font-medium">Data Retrieval</p>
                <p className="text-xs text-gray-600">Vector DB/APIs</p>
              </div>
              
              <div className="hidden md:block text-center">
                <div className="w-8 h-0.5 bg-gray-300 mx-auto"></div>
              </div>
              
              {/* Reasoning Layer */}
              <div className="md:col-span-1 text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-2">
                  <Zap size={24} className="text-orange-600 mx-auto" />
                </div>
                <p className="text-sm font-medium">AI Reasoning</p>
                <p className="text-xs text-gray-600">LLM + RAG</p>
              </div>
              
              <div className="hidden md:block text-center">
                <div className="w-8 h-0.5 bg-gray-300 mx-auto"></div>
              </div>
              
              {/* Output Layer */}
              <div className="md:col-span-1 text-center">
                <div className="bg-red-100 p-4 rounded-lg mb-2">
                  <Globe size={24} className="text-red-600 mx-auto" />
                </div>
                <p className="text-sm font-medium">Response</p>
                <p className="text-xs text-gray-600">Multilingual</p>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Smartphone className="text-blue-600" size={24} />
                <span>Frontend Technologies</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Mobile App</span>
                  <span className="text-gray-600">React Native</span>
                </li>
                <li className="flex justify-between">
                  <span>Web App</span>
                  <span className="text-gray-600">PWA (React)</span>
                </li>
                <li className="flex justify-between">
                  <span>UI Framework</span>
                  <span className="text-gray-600">Tailwind CSS</span>
                </li>
                <li className="flex justify-between">
                  <span>State Management</span>
                  <span className="text-gray-600">Redux Toolkit</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Cloud className="text-green-600" size={24} />
                <span>Backend Technologies</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Runtime</span>
                  <span className="text-gray-600">Node.js</span>
                </li>
                <li className="flex justify-between">
                  <span>Framework</span>
                  <span className="text-gray-600">Express.js</span>
                </li>
                <li className="flex justify-between">
                  <span>Database</span>
                  <span className="text-gray-600">PostgreSQL</span>
                </li>
                <li className="flex justify-between">
                  <span>Vector Store</span>
                  <span className="text-gray-600">Pinecone</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Brain className="text-purple-600" size={24} />
                <span>AI/ML Technologies</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>LLM</span>
                  <span className="text-gray-600">LLaMA 3.1</span>
                </li>
                <li className="flex justify-between">
                  <span>Speech Processing</span>
                  <span className="text-gray-600">Vosk + Whisper</span>
                </li>
                <li className="flex justify-between">
                  <span>Image Classification</span>
                  <span className="text-gray-600">EfficientNet</span>
                </li>
                <li className="flex justify-between">
                  <span>Forecasting</span>
                  <span className="text-gray-600">Prophet + XGBoost</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Shield className="text-red-600" size={24} />
                <span>Integration & Security</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Weather API</span>
                  <span className="text-gray-600">IMD APIs</span>
                </li>
                <li className="flex justify-between">
                  <span>Market Data</span>
                  <span className="text-gray-600">AgMarknet</span>
                </li>
                <li className="flex justify-between">
                  <span>Deployment</span>
                  <span className="text-gray-600">AWS Cloud</span>
                </li>
                <li className="flex justify-between">
                  <span>Edge Computing</span>
                  <span className="text-gray-600">TensorFlow Lite</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};