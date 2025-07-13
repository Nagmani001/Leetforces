"use client"
import React from 'react';
import { Star, Trophy, Users, TrendingUp } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Competitive Programmer",
      rating: "Candidate Master",
      content: "Leetforces has completely transformed my competitive programming workflow. The integrated IDE and direct submission feature saves me hours every week.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      rating: "Expert",
      content: "The real-time testing and analytics helped me identify my weak areas and improve systematically. Reached Expert rank in just 6 months!",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Michael Zhang",
      role: "Computer Science Student",
      rating: "Specialist",
      content: "As a beginner, the problem categorization and difficulty recommendations made it easy to progress step by step. Highly recommended!",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Active Users",
      color: "text-blue-600"
    },
    {
      icon: Trophy,
      value: "1M+",
      label: "Successful Submissions",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Improvement Rate",
      color: "text-purple-600"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "User Rating",
      color: "text-orange-600"
    }
  ];

  const partners = [
    "CodeChef", "AtCoder", "TopCoder", "HackerRank", "LeetCode", "GeeksforGeeks"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`${stat.color} mb-4 flex justify-center`}>
                <stat.icon className="h-12 w-12" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Competitive Programmers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our community has to say about their experience with Leetforces
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.rating}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Integrated with Popular Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors">
                <div className="text-gray-700 font-semibold text-center">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
