
"use client"
import React from 'react';
import { Search, Edit3, Play, Send } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Problems",
      description: "Search and filter through thousands of Codeforces problems by difficulty, tags, or contest.",
      color: "bg-blue-600"
    },
    {
      icon: Edit3,
      title: "Write Your Code",
      description: "Use our powerful IDE with syntax highlighting, auto-completion, and debugging tools.",
      color: "bg-green-600"
    },
    {
      icon: Play,
      title: "Test & Debug",
      description: "Run your code with custom test cases and see real-time output before submission.",
      color: "bg-purple-600"
    },
    {
      icon: Send,
      title: "Submit Directly",
      description: "Submit your solution directly to Codeforces and track your progress in real-time.",
      color: "bg-orange-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From problem selection to submission, our streamlined workflow helps you focus on what matters most - solving problems.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Step {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className={`${step.color} h-2 rounded-full mb-4`}></div>
                  <div className="space-y-3">
                    <div className="bg-gray-100 h-4 rounded w-3/4"></div>
                    <div className="bg-gray-100 h-4 rounded w-1/2"></div>
                    <div className="bg-gray-100 h-4 rounded w-5/6"></div>
                  </div>
                  <div className={`mt-6 ${step.color} text-white px-4 py-2 rounded-lg text-sm font-medium inline-block`}>
                    {step.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Complete Development Flow
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block">
                      <div className="w-full h-px bg-gray-300 mt-8 relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rotate-45"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
