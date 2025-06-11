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
    <div className="min-h-screen bg-gradient-to-br from-surface-black via-surface-gray to-surface-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/5 to-primary-teal/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          
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
              <div className="bg-gradient-to-b from-surface-black to-surface-gray p-6 sm:p-8 lg:p-10 min-h-[60vh]">
                
                {/* Command Line */}
                <div className="flex items-center gap-2 mb-8 font-mono text-lg">
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
                  <div className="space-y-8 animate-fadeIn">
                    
                    {/* ASCII Logo */}
                    <div className="text-center">
                      <div className="text-gradient-primary font-mono text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                        BCCSS
                  </div>
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-header font-bold text-text-white mb-2">
                        Boston College Computer Science Society
                      </h1>
                      <p className="text-lg text-text-gray max-w-2xl mx-auto">
                        Empowering the next generation of technologists and innovators
                      </p>
                </div>

                    {/* Navigation Cards */}
                    <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {links.map((link, index) => (
                        <Link
                      key={index}
                          to={link.path}
                          className="group card-modern rounded-xl p-6 hover:scale-105 transition-all duration-300 border border-surface-border hover:border-primary-green/30 animate-slideUp"
                          style={{ animationDelay: `${index * 200}ms` }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-primary-teal font-mono">$</span>
                            <span className="text-primary-green font-mono">cd</span>
                            <span className="text-text-white font-medium">{link.label.toLowerCase().replace(' ', '-')}</span>
                          </div>
                          <h3 className="text-xl font-header font-semibold text-text-white mb-2 group-hover:text-primary-green transition-colors">
                            {link.label}
                          </h3>
                          <p className="text-text-gray text-sm group-hover:text-text-white transition-colors">
                            {link.description}
                          </p>
                          <div className="mt-4 flex items-center text-primary-green opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-sm font-medium">Explore</span>
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Quick Links */}
                    <div className="border-t border-surface-border pt-6">
                      <p className="text-text-gray font-mono text-sm mb-4 text-center">
                        <span className="text-primary-teal">$</span> quick-links --all
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                        {quickLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center p-4 rounded-xl bg-surface-gray/30 hover:bg-surface-gray border border-surface-border hover:border-primary-green/30 transition-all duration-300 hover:scale-105 animate-slideUp"
                            style={{ animationDelay: `${400 + index * 100}ms` }}
                          >
                            <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{link.icon}</span>
                            <span className="text-xs font-medium text-text-gray group-hover:text-primary-green transition-colors">
                          {link.label}
                        </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
                      {[
                        { number: "500+", label: "Members" },
                        { number: "30+", label: "Events" },
                        { number: "$5k+", label: "Prizes" }
                      ].map((stat, index) => (
                        <div key={index} className="animate-slideUp" style={{ animationDelay: `${600 + index * 100}ms` }}>
                          <div className="text-2xl font-bold text-gradient-primary mb-1">{stat.number}</div>
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
