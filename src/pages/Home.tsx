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

  // simulate the welcome message being typed 
  useEffect(() => {
    const welcomeText = '$ Boston College\n$ Computer Science Society';
    let index = 0;
    
    const typing = setInterval(() => {
      if (index < welcomeText.length) {
        // grab text one character at a time 
        setText(welcomeText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
        setTypingComplete(true);
      }
    }, 50);

    // blink the cursor after typing 
    const cursor = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typing);
      clearInterval(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-font-gray p-2 sm:p-4 lg:p-8 flex flex-col">
      <div className="p-8 sm:p-4 lg:p-8 max-w-6xl mx-auto w-full flex-grow">
        {/* terminal window with retro styling */}
        <div className="border-2 border-gray-600 rounded shadow-lg overflow-hidden">
          {/* terminal header - classic MacOS/Linux style */}
          <div className="bg-gradient-to-b from-gray-300 to-gray-400 px-4 py-2 flex items-center border-b-2 border-gray-600">
            {/* left side circles */}
            <div className="flex space-x-2 min-w-[70px]">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-600 bg-red-500"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-600 bg-yellow-500"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-600 bg-green-500"></div>
            </div>
            {/* centered title */}
            <div className="flex-grow text-center">
              <span className="font-mono text-xs sm:text-sm lg:text-lg text-background-black">bccss terminal — zsh</span>
            </div>
          </div>
          
          {/* terminal content with responsive text sizing */}
          <div className="p-2 sm:p-4 lg:p-8 font-mono text-primary-green bg-background-black min-h-[70vh] sm:min-h-[75vh] lg:min-h-[85vh] shadow-inner">
            {/* adjust base text sizes for better mobile display */}
            <div className="text-sm sm:text-base lg:text-xl xl:text-2xl space-y-4">
              {/* command prompt with text-wrap handling */}
              <div className="break-words">
                <span className="text-blue-400">user@bccss</span>
                <span className="text-font-gray">:</span>
                <span className="text-blue-300">~</span>
                <span className="text-font-gray">$ </span>
                <span className="text-primary-green">./welcome.sh</span>
              </div>

              {/* welcome text with overflow handling */}
              <pre className="whitespace-pre-wrap font-bold break-words">
                {text}
                {showCursor && <span className="animate-pulse">█</span>}
              </pre>
              
              {/* navigation links with better mobile handling */}
              {typingComplete && (
                <div className="space-y-2 sm:space-y-4">
                  {links.map((link, index) => (
                    <div 
                      key={index} 
                      className="group hover:bg-orange-300/10 rounded transition-colors duration-200"
                    >
                      <Link 
                        to={link.path} 
                        className="block break-words pb-1 pt-1 sm:pb-2 sm:pt-2"
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
      
      {/* footer with retro styling */}
      <footer className="text-center py-4 text-xs sm:text-sm lg:text-base xl:text-lg font-mono text-gray-800">
        <span className="bg-gray-300 px-3 py-1 rounded border border-gray-600 shadow-sm hover:shadow-inner transition-shadow duration-200">
          Made with <span className="text-red-500">♥</span> @ Boston College
        </span>
      </footer>
    </div>
  );
};