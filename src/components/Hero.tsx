import React, { useState, useEffect } from 'react';
import { Brain, Mic, Camera, MessageSquare, Shield, Zap, ArrowRight, Play, Users, TrendingUp, Globe, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { number: "650M+", label: "Farmers in India", icon: Users },
    { number: "23%", label: "Crop Loss Annually", icon: TrendingUp },
    { number: "90%", label: "AI Accuracy Rate", icon: Brain },
    { number: "24/7", label: "Available Support", icon: Globe }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-300 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-300 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8">
            {/* Impact Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-400/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 text-green-200">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Transforming Agriculture with AI</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
                  AgriSage AI
                </span>
              </h1>
              <h2 className="text-2xl lg:text-4xl font-semibold text-green-100">
                Your Intelligent Farm Advisor
              </h2>
              <p className="text-xl lg:text-2xl text-green-200 leading-relaxed max-w-2xl">
                Multilingual, offline-capable AI that understands your crops, predicts problems, 
                and delivers expert advice through voice, text, and images.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="bg-green-400 p-2 rounded-lg">
                  <Mic size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-green-100">Voice First</div>
                  <div className="text-sm text-green-300">Hindi, English & Dialects</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="bg-blue-400 p-2 rounded-lg">
                  <Camera size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-blue-100">Smart Vision</div>
                  <div className="text-sm text-blue-300">Instant Crop Analysis</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="bg-purple-400 p-2 rounded-lg">
                  <Smartphone size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-purple-100">Works Offline</div>
                  <div className="text-sm text-purple-300">No Internet Required</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="bg-orange-400 p-2 rounded-lg">
                  <Shield size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-orange-100">Fact-Based</div>
                  <div className="text-sm text-orange-300">Scientific Accuracy</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
              >
                <Play size={24} />
                <span>See Demo</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3">
                <MessageSquare size={20} />
                <span>Try AI Chat</span>
              </button>
            </div>

            {/* Dynamic Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 p-3 rounded-xl">
                   
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{stats[currentStat].number}</div>
                    <div className="text-green-200">{stats[currentStat].label}</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {stats.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentStat ? 'bg-green-400 w-8' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Demo Preview */}
          <div className="relative">
            {/* Main Demo Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
              <div className="space-y-6">
                {/* Demo Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                      <Brain size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">AgriSage AI</div>
                      <div className="text-sm text-gray-600">Ready to help</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">Online</span>
                  </div>
                </div>

                {/* Sample Query */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Camera size={16} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-600 mb-2">Farmer Query:</div>
                      <div className="text-gray-800">"मेरे कपास के पत्तों पर भूरे धब्बे हैं"</div>
                      <div className="text-xs text-gray-500 mt-1">+ Image uploaded</div>
                    </div>
                  </div>
                </div>

                {/* AI Response Preview */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-500">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Brain size={16} className="text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-green-600 font-medium mb-2">AI Analysis:</div>
                      <div className="text-gray-800 text-sm mb-2">
                        <strong>Bollworm infestation detected</strong> (92% confidence)
                      </div>
                      <div className="text-gray-700 text-sm">
                        Immediate treatment recommended with approved pesticide. 
                        Weather conditions favorable for spraying.
                      </div>
                      <div className="flex items-center space-x-4 mt-3 text-xs">
                        <div className="flex items-center space-x-1 text-blue-600">
                          <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                          <span>Location: Punjab</span>
                        </div>
                        <div className="flex items-center space-x-1 text-green-600">
                          <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                          <span>Success Rate: 95%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Options */}
                <div className="flex justify-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl hover:bg-blue-200 transition-colors cursor-pointer">
                    <Mic size={20} className="text-blue-600" />
                  </div>
                  <div className="bg-green-100 p-3 rounded-xl hover:bg-green-200 transition-colors cursor-pointer">
                    <Camera size={20} className="text-green-600" />
                  </div>
                  <div className="bg-purple-100 p-3 rounded-xl hover:bg-purple-200 transition-colors cursor-pointer">
                    <MessageSquare size={20} className="text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Success Metrics */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold">90%+</div>
                <div className="text-xs">Accuracy</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs">Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm">Explore Features</div>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">AgriSage AI Demo</h3>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Play size={48} className="mx-auto mb-4" />
                <p>Demo video would play here</p>
                <p className="text-sm mt-2">Showcasing voice, image, and text interactions</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};