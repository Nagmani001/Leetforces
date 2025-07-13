"use client"
import React from 'react';

import { Clock, Workflow, Users2, Zap, CheckCircle, XCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save 70% of Your Time",
      description: "No more switching between multiple tabs and platforms. Everything you need in one place.",
      comparison: {
        before: "15+ minutes per problem",
        after: "4 minutes per problem"
      }
    },
    {
      icon: Workflow,
      title: "Streamlined Workflow",
      description: "From problem reading to submission, enjoy a seamless experience designed for efficiency.",
      comparison: {
        before: "Multiple platforms & tools",
        after: "Single integrated platform"
      }
    },
    {
      icon: Users2,
      title: "Community Features",
      description: "Connect with fellow programmers, share solutions, and learn from others' approaches.",
      comparison: {
        before: "Isolated learning",
        after: "Collaborative environment"
      }
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate results and detailed analytics to improve your problem-solving skills.",
      comparison: {
        before: "Wait for contest results",
        after: "Real-time feedback & tips"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Leetforces?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference our integrated platform makes in your competitive programming journey
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>

              {/* Before/After Comparison */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span className="font-semibold text-red-700">Before</span>
                  </div>
                  <p className="text-red-600 text-sm">{benefit.comparison.before}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-semibold text-green-700">With Leetforces</span>
                  </div>
                  <p className="text-green-600 text-sm">{benefit.comparison.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Showcase */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Join Our Growing Community</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Users2 className="h-5 w-5" />
                  </div>
                  <span className="text-lg">Connect with 50,000+ competitive programmers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Workflow className="h-5 w-5" />
                  </div>
                  <span className="text-lg">Share and learn from solution approaches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5" />
                  </div>
                  <span className="text-lg">Participate in community challenges</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-blue-100">of users improve their rating within 3 months</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">2.5x</div>
                  <div className="text-sm text-blue-100">Faster learning</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">90%</div>
                  <div className="text-sm text-blue-100">Satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
