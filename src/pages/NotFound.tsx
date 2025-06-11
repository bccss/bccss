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

  const suggestions = [
    { path: '/', label: 'Home', command: 'cd ~' },
    { path: '/about', label: 'About', command: 'cat about.md' },
    { path: '/join', label: 'Join', command: './join.sh' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-black via-surface-gray to-surface-black">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto">
          <div className="card-modern rounded-2xl overflow-hidden shadow-2xl border border-red-500/30">
            
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-surface-gray to-surface-border px-6 py-4 flex items-center justify-between border-b border-red-500/30">
              <div className="flex space-x-3">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-center">
                <span className="font-mono text-sm text-red-400">error@terminal:~$</span>
              </div>
              <div className="w-12"></div>
            </div>

            {/* Terminal Content */}
            <div className="bg-gradient-to-b from-surface-black to-surface-gray p-6 sm:p-8 lg:p-10 min-h-[60vh]">
              
              {/* Error Command */}
              <div className="flex items-center gap-2 mb-8 font-mono text-lg">
                <span className="text-red-400">user@bccss</span>
                <span className="text-text-gray">:</span>
                <span className="text-accent-purple">~</span>
                <span className="text-text-gray">$</span>
                <span className={`text-red-400 ${glitchActive ? 'animate-pulse' : ''}`}>
                  {text}
                  {showCursor && <span className="animate-pulse">█</span>}
                </span>
              </div>

              {/* 404 Content */}
              <div className="space-y-8 animate-fadeIn">
                
                {/* ASCII Art 404 */}
                <div className="text-center">
                  <div className={`font-mono text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 ${glitchActive ? 'animate-bounce' : ''}`}>
                    <span className="text-red-500">4</span>
                    <span className="text-primary-green">0</span>
                    <span className="text-accent-purple">4</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-header font-bold text-text-white mb-4">
                    <span className="text-red-400">Error:</span> Page Not Found
                  </h1>
                  <p className="text-lg text-text-gray max-w-2xl mx-auto mb-8">
                    Looks like you've ventured into uncharted territory. This page doesn't exist in our codebase!
                  </p>
                </div>

                {/* Error Details */}
                <div className="bg-surface-gray/30 rounded-xl p-6 border border-red-500/20 max-w-2xl mx-auto">
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-red-400">
                      <span className="text-text-gray">└─</span> HTTP Status: <span className="text-red-300">404</span>
                    </div>
                    <div className="text-red-400">
                      <span className="text-text-gray">└─</span> Error Type: <span className="text-red-300">ENOENT</span>
                    </div>
                    <div className="text-red-400">
                      <span className="text-text-gray">└─</span> Message: <span className="text-red-300">No such file or directory</span>
                    </div>
                    <div className="text-yellow-400 mt-4">
                      <span className="text-text-gray">└─</span> Suggestion: <span className="text-yellow-300">Try one of the commands below</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Suggestions */}
                <div className="max-w-3xl mx-auto">
                  <p className="text-text-gray font-mono text-sm mb-6 text-center">
                    <span className="text-primary-teal">$</span> Available commands:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {suggestions.map((suggestion, index) => (
                      <Link
                        key={index}
                        to={suggestion.path}
                        className="group card-modern rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-surface-border hover:border-primary-green/30 animate-slideUp"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className="flex items-center gap-2 mb-3 font-mono text-sm">
                          <span className="text-primary-teal">$</span>
                          <span className="text-primary-green">{suggestion.command}</span>
                        </div>
                        <h3 className="text-lg font-header font-semibold text-text-white mb-2 group-hover:text-primary-green transition-colors">
                          {suggestion.label}
                        </h3>
                        <div className="flex items-center text-primary-green opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-sm font-medium">Execute</span>
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Fun Interactive Element */}
                <div className="text-center pt-8 border-t border-surface-border">
                  <div className="inline-block">
                    <button
                      onClick={() => window.history.back()}
                      className="group px-6 py-3 bg-gradient-to-r from-red-500/20 to-accent-purple/20 border border-red-500/30 text-text-white font-mono rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                    >
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        history.back()
                      </span>
                    </button>
                  </div>
                </div>

                {/* Easter Egg */}
                <div className="text-center mt-8">
                  <p className="font-mono text-xs text-text-dim">
                    <span className="text-primary-teal">// </span>
                    Fun fact: HTTP 404 was named after room 404 at CERN where the web was born! 🌐
                  </p>
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