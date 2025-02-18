/* landing splash w/ a terminal design for BCCSS 

  @author: Hunter Scheppat 
  @date: 2-13-2025 
  @description: 
    * mobile first 'retro' terminal design 
    * main bccss welcome message and subsequent links 
*/ 

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  
  // static links, need to fill these in 
  const links = [
    { path: '/about', label: 'about BCCSS' },
    { path: '/team', label: 'our team' },
    { path: '/join', label: 'get involved' },
    { path: '/example', label: 'fanum tax' },
    { path: '/example', label: 'rafael signer' }
  ];

  const splashText = `
  ######    #####    #####    #####    #####  
  #     #  #     #  #     #  #     #  #     # 
  #     #  #        #        #        #       
  ######   #        #         #####    #####  
  #     #  #        #              #        # 
  #     #  #     #  #     #  #     #  #     # 
  ######    #####    #####    #####    #####  
`;

// simulate the welcome message being typed 
useEffect(() => {
    let index = 0;
    let typing: number;
    let cursor: number;
    const welcomeText = './welcome.sh'

    const startTyping = setTimeout(() => {
      typing = window.setInterval(() => {
        if (index < welcomeText.length) {
          setText(prev => welcomeText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typing);
          setTypingComplete(true);
        }
      }, 75);
      
      cursor = window.setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
    }, 300);

    
    return () => {
      clearTimeout(startTyping);
      clearInterval(typing);
      clearInterval(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-font-gray flex flex-col">
      <div className="flex-1 p-2 sm:p-4 md:p-6 flex items-center justify-center">
        <div className="w-full h-full max-w-7xl border-2 border-gray-600 rounded-lg shadow-lg overflow-hidden">
          {/* terminal Header */}
          <div className="bg-gradient-to-b from-gray-300 to-gray-400 px-4 py-2 flex items-center justify-between border-b-2 border-gray-600">
            {/* left side circles */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full border border-gray-600 bg-red-500"></div>
              <div className="w-3 h-3 rounded-full border border-gray-600 bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full border border-gray-600 bg-green-500"></div>
            </div>
            {/* centered title */}
            <div className="flex-grow text-center">
              <span className="font-mono text-xs sm:text-sm text-background-black">
                bccss terminal — zsh
              </span>
            </div>
            {/* right spacer to balance the header */}
            <div className="w-8"></div>
          </div>
          
          {/* terminal Content */}
          <div className="p-2 sm:p-4 font-mono text-primary-green bg-background-black h-[85vh] overflow-y-auto">
            <div className="h-full flex flex-col">
              {/* command prompt line - add flex and better width management */}
              <div className="flex flex-wrap items-center gap-1 text-sm sm:text-base">
                <span className="text-blue-400">user@bccss</span>
                <span className="text-font-gray">:</span>
                <span className="text-blue-300">~</span>
                <span className="text-font-gray">$ </span>
                <span className="text-primary-green">
                  {text}
                  {showCursor && <span className="animate-pulse">█</span>}
                </span>
              </div>

              {/* welcome message - improve size on small screens */}
              {typingComplete && (
                <pre className="my-4 whitespace-pre text-[0.75rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold overflow-x-auto">
                  {splashText}
                </pre>
              )}
              
              {/* navigation links - improve responsive layout */}
              {typingComplete && (
                <div className="space-y-1 sm:space-y-2 text-md sm:text-base">
                  {links.map((link, index) => (
                    <div 
                      key={index} 
                      className="group hover:bg-orange-300/10 rounded transition-colors duration-200"
                    >
                      <Link 
                        to={link.path} 
                        className="flex flex-wrap items-center gap-1 py-1"
                      >
                        <span className="text-blue-400">user@bccss</span>
                        <span className="text-font-gray">:</span>
                        <span className="text-blue-300">~</span>
                        <span className="text-font-gray">$ cd </span>
                        <span className="group-hover:text-orange-300 transition-colors duration-200">
                          {link.label}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* bccss footer */}
      <footer className="p-4 text-center text-xs sm:text-sm font-mono text-gray-800">
        <span className="bg-gray-300 px-3 py-1 rounded border border-gray-600 shadow-sm hover:shadow-inner transition-shadow duration-200">
          Made with <span className="text-red-500">♥</span> @ Boston College
        </span>
      </footer>
    </div>
  );
};
