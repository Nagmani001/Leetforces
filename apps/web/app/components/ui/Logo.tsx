import React from 'react';
import { Code2 } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const sizes = {
    sm: { icon: 24, text: 'text-xl' },
    md: { icon: 32, text: 'text-2xl' },
    lg: { icon: 40, text: 'text-3xl' }
  };

  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-sm opacity-75"></div>
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
          <Code2 size={sizes[size].icon} className="text-white" />
        </div>
      </div>
      {showText && (
        <span className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${sizes[size].text}`}>
          LeetForces
        </span>
      )}
    </div>
  );
};
