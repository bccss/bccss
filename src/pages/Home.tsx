/* landing splash w/ a terminal design for BCCSS 

  @author: Hunter Scheppat 
  @date: 2-13-2025 
  @description: 
    * mobile first 'retro' terminal design 
    * main bccss welcome message and subsequent links 
*/

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

// animation expiration time (currently set to 5 minutes)
const EXPIRATION_TIME = 5 * 60 * 1000

export const Home = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const [animationSeen, setAnimationSeen] = useState(false);

  const links = [
    { path: '/about', label: 'About BCCSS', description: 'Learn about our mission and team' },
    { path: '/join', label: 'Get Involved', description: 'Join our community and events' },
  ];

  const quickLinks = [
    { href: "https://github.com/bccss", label: "GitHub", icon: "🔗" },
    { href: "https://bccss.slack.com/", label: "Slack", icon: "💬" },
    { href: "https://www.instagram.com/bccssociety/", label: "Instagram", icon: "📸" },
    { href: "https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss", label: "Newsletter", icon: "📧" }
  ];

  useEffect(() => {
    let typing: number;
    let cursor: number;
    const welcomeText = './welcome.sh';

    const seenObj = localStorage.getItem("seen");
    if (seenObj) {
      const { seen, expirationDate } = JSON.parse(seenObj);
      const animationSeenExpired = (new Date()).getTime() > expirationDate;
      if (seen && !animationSeenExpired) {
        setAnimationSeen(true);
        setText(welcomeText);
        setTypingComplete(true);
        return;
      }
    }

    if (!animationSeen) {
      let index = 0;
      const startTyping = setTimeout(() => {
        typing = window.setInterval(() => {
          if (index < welcomeText.length) {
            setText(welcomeText.slice(0, index + 1));
            index++;
          } else {
            clearInterval(typing);
            setTypingComplete(true);
          }
        }, 80);

        cursor = window.setInterval(() => {
          setShowCursor(prev => !prev);
        }, 530);

        const expirationDate = (new Date()).getTime() + EXPIRATION_TIME;
        localStorage.setItem("seen", JSON.stringify({
          seen: "true",
          expirationDate,
        }));
      }, 500);

      return () => {
        clearTimeout(startTyping);
        clearInterval(typing);
        clearInterval(cursor);
      };
    }
  }, [animationSeen]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-surface-black via-surface-gray to-surface-black">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden py-4 sm:py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/5 to-primary-teal/5"></div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Terminal Window */}
          <div className="max-w-5xl mx-auto">
            <div className="card-modern rounded-2xl overflow-hidden shadow-2xl border border-surface-border">
              
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-surface-gray to-surface-border px-6 py-4 flex items-center justify-between border-b border-surface-border">
                <div className="flex space-x-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
                <div className="text-center">
                  <span className="font-mono text-sm text-text-white">bccss@terminal:~$</span>
            </div>
                <div className="w-12"></div>
          </div>

              {/* Terminal Content */}
              <div className="bg-gradient-to-b from-surface-black to-surface-gray p-4 sm:p-6 lg:p-8">
                
                {/* Command Line */}
                <div className="flex items-center gap-2 mb-6 font-mono text-base sm:text-lg">
                  <span className="text-primary-teal">user@bccss</span>
                  <span className="text-text-gray">:</span>
                  <span className="text-accent-purple">~</span>
                  <span className="text-text-gray">$</span>
                  <span className="text-primary-green">
                  {text}
                    {showCursor && <span className="animate-pulse">█</span>}
                </span>
              </div>

                {/* Welcome Content */}
              {(typingComplete || animationSeen) && (
                  <div className="space-y-6 animate-fadeIn">
                    
                    {/* ASCII Logo */}
                    <div className="text-center">
                      <div className="text-gradient-primary font-mono text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                        BCCSS
                  </div>
                      <h1 className="text-lg sm:text-xl lg:text-2xl font-header font-bold text-text-white mb-2">
                        Boston College Computer Science Society
                      </h1>
                      <p className="text-sm sm:text-base text-text-gray max-w-2xl mx-auto">
                        Empowering the next generation of technologists and innovators
                      </p>
                </div>

                    {/* Navigation Cards */}
                    <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                  {links.map((link, index) => (
                        <Link
                      key={index}
                          to={link.path}
                          className="group relative rounded-xl p-4 sm:p-5 hover:scale-105 transition-all duration-300 border border-surface-border hover:border-yellow-400/50 animate-slideUp overflow-hidden"
                          style={{ animationDelay: `${index * 200}ms` }}
                        >
                          {/* Gold gradient background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5"></div>
                          
                          {/* Content */}
                          <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-yellow-400 font-mono text-sm">$</span>
                              <span className="text-yellow-300 font-mono text-sm">cd</span>
                              <span className="text-text-white font-medium text-sm">{link.label.toLowerCase().replace(' ', '-')}</span>
                            </div>
                            <h3 className="text-lg font-header font-semibold text-text-white mb-2 group-hover:text-yellow-300 transition-colors">
                              {link.label}
                            </h3>
                            <p className="text-text-gray text-xs group-hover:text-text-white transition-colors">
                              {link.description}
                            </p>
                            <div className="mt-3 flex items-center text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-xs font-medium">Explore</span>
                              <svg className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Quick Links */}
                    <div className="border-t border-surface-border pt-4">
                      <p className="text-text-gray font-mono text-xs mb-3 text-center">
                        <span className="text-primary-teal">$</span> quick-links --all
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-xl mx-auto">
                        {quickLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center p-3 rounded-xl bg-surface-gray/30 hover:bg-surface-gray border border-surface-border hover:border-primary-green/30 transition-all duration-300 hover:scale-105 animate-slideUp"
                            style={{ animationDelay: `${400 + index * 100}ms` }}
                          >
                            <span className="text-lg mb-1 group-hover:scale-110 transition-transform">{link.icon}</span>
                            <span className="text-xs font-medium text-text-gray group-hover:text-primary-green transition-colors">
                          {link.label}
                        </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 max-w-md mx-auto text-center">
                      {[
                        { number: "500+", label: "Members" },
                        { number: "30+", label: "Events" },
                        { number: "$5k+", label: "Prizes" }
                      ].map((stat, index) => (
                        <div key={index} className="animate-slideUp" style={{ animationDelay: `${600 + index * 100}ms` }}>
                          <div className="text-lg font-bold text-gradient-primary mb-1">{stat.number}</div>
                          <div className="text-xs text-text-gray font-medium">{stat.label}</div>
                    </div>
                  ))}
                    </div>

                  </div>
                )}
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
