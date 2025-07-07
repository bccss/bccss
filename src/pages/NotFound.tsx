import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const NotFound = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    document.title = 'BCCSS | 404 - Page Not Found';
    
    // Typing animation
    const errorText = '404: command not found';
    let index = 0;
    
    const typing = setInterval(() => {
      if (index < errorText.length) {
        setText(errorText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    // Cursor blinking
    const cursor = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => {
      clearInterval(typing);
      clearInterval(cursor);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-black via-surface-gray to-surface-black pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-accent-purple/5"></div>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-green/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto">
          <div className="card-modern rounded-2xl overflow-hidden shadow-2xl border border-surface-border">
            
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-surface-gray to-surface-border px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-surface-border">
              <div className="flex space-x-2 sm:space-x-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
              </div>
              <div className="text-center">
                <span className="font-mono text-xs sm:text-sm text-text-white">error@terminal:~$</span>
              </div>
              <div className="w-8 sm:w-12"></div>
            </div>

            {/* Terminal Content */}
            <div className="bg-gradient-to-b from-surface-black to-surface-gray p-4 sm:p-6 lg:p-8">
              
              {/* Command Line */}
              <div className="flex items-center gap-2 mb-6 sm:mb-8 font-mono text-sm sm:text-base">
                <span className="text-red-400">error@bccss</span>
                <span className="text-text-gray">:</span>
                <span className="text-accent-purple">~</span>
                <span className="text-text-gray">$</span>
                <span className="text-primary-green">
                  {text}
                  {showCursor && <span className="animate-pulse">█</span>}
                </span>
              </div>

              {/* Error Content */}
              <div className="space-y-6 sm:space-y-8">
                
                {/* 404 Display */}
                <div className="text-center">
                  <div className={`font-mono text-6xl sm:text-8xl lg:text-9xl font-bold mb-4 sm:mb-6 ${
                    glitchActive ? 'animate-bounce' : ''
                  }`}>
                    <span className="text-red-400">4</span>
                    <span className="text-primary-green">0</span>
                    <span className="text-accent-purple">4</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-header font-bold text-text-white mb-3 sm:mb-4">
                    Page Not Found
                  </h1>
                  <p className="text-sm sm:text-base text-text-gray max-w-md mx-auto leading-relaxed">
                    Looks like this page got lost in cyberspace. Let's get you back to familiar territory.
                  </p>
                </div>

                {/* Navigation Options */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto">
                  {[
                    { path: '/', label: 'Home', icon: '🏠', description: 'Back to base' },
                    { path: '/about', label: 'About', icon: '📖', description: 'Learn about us' },
                    { path: '/join', label: 'Join', icon: '🚀', description: 'Get involved' },
                    { path: 'javascript:history.back()', label: 'Go Back', icon: '⬅️', description: 'Previous page' }
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="group relative rounded-xl p-3 sm:p-4 hover:scale-105 transition-all duration-300 border border-surface-border hover:border-primary-green/50 animate-slideUp bg-surface-gray/30 hover:bg-surface-gray/50"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-lg sm:text-xl">{link.icon}</span>
                        <div>
                          <h3 className="text-sm sm:text-base font-header font-semibold text-text-white group-hover:text-primary-green transition-colors">
                            {link.label}
                          </h3>
                          <p className="text-xs sm:text-sm text-text-gray group-hover:text-text-white transition-colors">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Fun Terminal Commands */}
                <div className="border-t border-surface-border pt-4 sm:pt-6">
                  <p className="text-text-gray font-mono text-xs sm:text-sm mb-3 sm:mb-4 text-center">
                    <span className="text-primary-teal">$</span> helpful-commands --list
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-md mx-auto">
                    {[
                      { command: 'cd /', description: 'Go home' },
                      { command: 'ls -la', description: 'List pages' },
                      { command: 'pwd', description: 'Current location' },
                      { command: 'history', description: 'Go back' }
                    ].map((cmd, index) => (
                      <div key={index} className="bg-surface-gray/30 rounded-lg p-2 sm:p-3 text-center">
                        <div className="font-mono text-xs sm:text-sm text-primary-green mb-1">
                          {cmd.command}
                        </div>
                        <div className="text-xs text-text-gray">
                          {cmd.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}; 