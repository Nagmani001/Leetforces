"use clietn"
import React from 'react';
import { Code, Send, TestTube, BookOpen, BarChart3, Palette } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Integrated IDE Environment",
      description: "Full-featured code editor with syntax highlighting, auto-completion, and debugging tools for multiple programming languages."
    },
    {
      icon: Send,
      title: "Direct Codeforces Submission",
      description: "Submit your solutions directly to Codeforces without leaving the platform. Seamless integration with your account."
    },
    {
      icon: TestTube,
      title: "Real-time Code Testing",
      description: "Test your code with custom inputs and see outputs instantly. Debug and optimize before submission."
    },
    {
      icon: BookOpen,
      title: "Problem Library Access",
      description: "Access thousands of Codeforces problems with smart filtering, categorization, and difficulty-based recommendations."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track your progress with detailed analytics, submission history, and performance metrics across different topics."
    },
    {
      icon: Palette,
      title: "Customizable Interface",
      description: "Personalize your coding environment with themes, layouts, and shortcuts that match your workflow."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines the best tools for competitive programming into one seamless experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 text-lg mb-6">
                Join thousands of competitive programmers who have improved their coding skills with Leetforces.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span>All features included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
