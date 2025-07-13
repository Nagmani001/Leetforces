"use client"
import React from 'react';
import { Play, Code2, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Code and Submit to
                <span className="text-blue-600 block">Codeforces</span>
                All in One Place
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                The ultimate platform combining an online IDE with direct Codeforces submission integration.
                Write, test, and submit your solutions seamlessly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center group">
                <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Start Coding Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">1M+</div>
                <div className="text-gray-600">Submissions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Floating IDE Mockup */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* IDE Header */}
              <div className="bg-gray-100 px-4 py-3 border-b flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-600">main.cpp</div>
                <div className="flex items-center space-x-2">
                  <Code2 className="h-4 w-4 text-gray-500" />
                  <Zap className="h-4 w-4 text-green-500" />
                </div>
              </div>

              {/* Code Content */}
              <div className="bg-gray-900 text-green-400 p-4 font-mono text-sm">
                <div className="space-y-1">
                  <div>
                    <span className="text-purple-400">#include</span>{" "}
                    <span className="text-yellow-300">&lt;iostream&gt;</span>
                  </div>
                  <div>
                    <span className="text-purple-400">using namespace</span> std;
                  </div>
                  <div className="mt-3"></div>
                  <div>
                    <span className="text-blue-400">int</span>{" "}
                    <span className="text-yellow-300">main</span>() {"{"}
                  </div>
                  <div className="ml-4">
                    <span className="text-blue-400">int</span> n;
                  </div>
                  <div className="ml-4">cin &gt;&gt; n;</div>
                  <div className="ml-4">
                    cout &lt;&lt; n * <span className="text-red-400">2</span>;
                  </div>
                  <div className="ml-4">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-red-400">0</span>;
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>


              {/* Submit Button */}
              <div className="bg-white p-4 border-t">
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Submit to Codeforces
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Code2 className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-600 text-white p-3 rounded-full shadow-lg animate-pulse">
              <Zap className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
