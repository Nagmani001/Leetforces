"use client"
import React, { useState } from 'react';
import { Check, Mail, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const [email, setEmail] = useState('');

  const features = [
    "Full IDE with syntax highlighting",
    "Direct Codeforces integration",
    "Real-time testing & debugging",
    "Performance analytics",
    "Problem recommendations",
    "Community features"
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Basic IDE features",
        "5 submissions per day",
        "Community access",
        "Basic analytics"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      features: [
        "Advanced IDE features",
        "Unlimited submissions",
        "Priority support",
        "Advanced analytics",
        "Custom themes",
        "Export solutions"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Team",
      price: "$29",
      period: "per month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Shared problem sets",
        "Admin dashboard",
        "Custom integrations",
        "24/7 support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your
            <span className="text-blue-600 block">Competitive Programming?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of programmers who have accelerated their learning and improved their ratings with Leetforces.
          </p>

          {/* Free Trial Signup */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white mb-12 max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-bold mb-4">Start Your Free Trial</h3>
                <p className="text-blue-100 mb-6">
                  Get full access to all Pro features for 14 days. No credit card required.
                </p>
                <div className="space-y-2">
                  {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-300" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <p className="text-xs text-gray-600 text-center">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <div id="pricing" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h3>
            <p className="text-xl text-gray-600">
              Start free and upgrade as you grow
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl border-2 p-8 ${plan.popular ? 'border-blue-600 shadow-lg scale-105' : 'border-gray-200'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <Mail className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help you get started. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
