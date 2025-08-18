import React from 'react';
import { TrendingUp, Shield, Users, Smartphone, Globe2, Award } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Yield & Income",
      description: "Data-driven insights lead to better crop management and higher productivity",
      color: "green"
    },
    {
      icon: Shield,
      title: "Reduced Crop Losses",
      description: "Early pest and disease detection prevents significant agricultural losses",
      color: "blue"
    },
    {
      icon: Users,
      title: "Accessible to All Farmers",
      description: "Voice-first interface works for farmers with varying literacy levels",
      color: "purple"
    },
    {
      icon: Smartphone,
      title: "Works on Basic Phones",
      description: "Optimized for low-end devices with just 2GB RAM requirements",
      color: "orange"
    },
    {
      icon: Globe2,
      title: "Multilingual Support",
      description: "Understands Hindi, English, and regional dialects for broad accessibility",
      color: "red"
    },
    {
      icon: Award,
      title: "Fact-Grounded Advice",
      description: "All recommendations backed by scientific data and government sources",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "text-green-600 bg-green-100",
      blue: "text-blue-600 bg-blue-100",
      purple: "text-purple-600 bg-purple-100",
      orange: "text-orange-600 bg-orange-100",
      red: "text-red-600 bg-red-100",
      indigo: "text-indigo-600 bg-indigo-100"
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Transforming Agriculture for Millions
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          AgriSage AI addresses critical challenges faced by farmers across India, providing 
          accessible, reliable, and actionable agricultural intelligence.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(benefit.color)}`}>
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Success Metrics & Goals</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">85%+</div>
              <div className="text-green-100">Query Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">90%+</div>
              <div className="text-blue-100">Pest Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.5/5</div>
              <div className="text-purple-100">Farmer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-yellow-100">Villages in 6 Months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};