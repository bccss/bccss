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
`

// simulate the welcome message being typed 
useEffect(() => {
    let index = 0;
    let typing: number;
    let cursor: number;
    const welcomeText = './welcome.sh'

    setTimeout(() => {
      typing = setInterval(() => {
        if (index < welcomeText.length) {
          setText(welcomeText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typing);
          setTypingComplete(true);
        }
      }, 50);
      
      cursor = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 1000);
    }, 500)

    
    return () => {
      clearInterval(typing);
      clearInterval(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-font-gray px-4 py-4 flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto flex-grow flex items-center">
        <div className="border-2 border-gray-600 rounded-lg shadow-lg overflow-hidden w-full">
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
          <div className="p-2 sm:p-4 font-mono text-primary-green bg-background-black min-h-[40vh] shadow-inner">
            <div className="text-sm sm:text-base lg:text-lg w-full">
              {/* command prompt line - add flex and better width management */}
              <div className="flex flex-wrap items-center gap-1">
                <span className="text-blue-400">user@bccss</span>
                <span className="text-font-gray">:</span>
                <span className="text-blue-300">~</span>
                <span className="text-font-gray">$ </span>
                <span className="text-primary-green">
                  {text}
                  {showCursor && <span className="animate-pulse">█</span>}
                </span>
              </div>

              {/* welcome message - improve wrapping behavior */}
              {typingComplete && (
                <pre className="whitespace-pre-wrap font-bold break-words w-full">
                  {splashText}
                </pre>
              )}
              
              {/* navigation links - improve responsive layout */}
              {typingComplete && (
                <div className="space-y-2 w-full">
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
      <footer className="text-center py-4 text-xs sm:text-sm font-mono text-gray-800">
        <span className="bg-gray-300 px-3 py-1 rounded border border-gray-600 shadow-sm hover:shadow-inner transition-shadow duration-200">
          Made with <span className="text-red-500">♥</span> @ Boston College
        </span>
      </footer>
    </div>
  );
};
