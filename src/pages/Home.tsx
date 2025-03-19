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
  const [activeLink, setActiveLink] = useState<number | null>(null);

  // static links, need to fill these in 
  const links = [
    { path: '/about', label: 'about BCCSS' },
    { path: '/join', label: 'get involved' },
  ];

  const splashText = `
BBBBBBBBBBBBBBBBB           CCCCCCCCCCCCC       CCCCCCCCCCCCC   SSSSSSSSSSSSSSS    SSSSSSSSSSSSSSS 
B::::::::::::::::B       CCC::::::::::::C    CCC::::::::::::C SS:::::::::::::::S SS:::::::::::::::S
B::::::BBBBBB:::::B    CC:::::::::::::::C  CC:::::::::::::::CS:::::SSSSSS::::::SS:::::SSSSSS::::::S
BB:::::B     B:::::B  C:::::CCCCCCCC::::C C:::::CCCCCCCC::::CS:::::S     SSSSSSSS:::::S     SSSSSSS
  B::::B     B:::::B C:::::C       CCCCCCC:::::C       CCCCCCS:::::S            S:::::S            
  B::::B     B:::::BC:::::C             C:::::C              S:::::S            S:::::S            
  B::::BBBBBB:::::B C:::::C             C:::::C               S::::SSSS          S::::SSSS         
  B:::::::::::::BB  C:::::C             C:::::C                SS::::::SSSSS      SS::::::SSSSS    
  B::::BBBBBB:::::B C:::::C             C:::::C                  SSS::::::::SS      SSS::::::::SS  
  B::::B     B:::::BC:::::C             C:::::C                     SSSSSS::::S        SSSSSS::::S 
  B::::B     B:::::BC:::::C             C:::::C                          S:::::S            S:::::S
  B::::B     B:::::B C:::::C       CCCCCCC:::::C       CCCCCC            S:::::S            S:::::S
BB:::::BBBBBB::::::B  C:::::CCCCCCCC::::C C:::::CCCCCCCC::::CSSSSSSS     S:::::SSSSSSSS     S:::::S
B:::::::::::::::::B    CC:::::::::::::::C  CC:::::::::::::::CS::::::SSSSSS:::::SS::::::SSSSSS:::::S
B::::::::::::::::B       CCC::::::::::::C    CCC::::::::::::CS:::::::::::::::SS S:::::::::::::::SS 
BBBBBBBBBBBBBBBBB           CCCCCCCCCCCCC       CCCCCCCCCCCCC SSSSSSSSSSSSSSS    SSSSSSSSSSSSSSS   
`;

  // simulate the welcome message being typed with improved animation
  useEffect(() => {
    let index = 0;
    let typing: number;
    let cursor: number;
    const welcomeText = './welcome.sh'

    const seenObj = localStorage.getItem("seen")
    if (seenObj) {
      const { seen, expirationDate } = JSON.parse(seenObj)
      const animationSeenExpired = (new Date()).getTime() > expirationDate
      if (seen && !animationSeenExpired) {
        setAnimationSeen(true)
        setText(welcomeText)
      }
    }

    if (!animationSeen) {
      // Initial delay before typing starts
      const startTyping = setTimeout(() => {
        // Variable typing speed to simulate human typing
        const getTypingSpeed = () => {
          // Base speed with some randomness
          return Math.floor(Math.random() * 30) + 50;
        };

        typing = window.setInterval(() => {
          if (index < welcomeText.length) {
            setText(welcomeText.slice(0, index + 1));
            index++;

            // Adjust interval dynamically for more natural typing
            clearInterval(typing);
            typing = window.setInterval(() => {
              if (index < welcomeText.length) {
                setText(welcomeText.slice(0, index + 1));
                index++;
              } else {
                clearInterval(typing);
                setTypingComplete(true);

                // Add a small pause after typing completes before showing content
                setTimeout(() => {
                  setTypingComplete(true);
                }, 300);
              }
            }, getTypingSpeed());
          } else {
            clearInterval(typing);
            setTypingComplete(true);
          }
        }, getTypingSpeed());

        // Smoother cursor blinking
        cursor = window.setInterval(() => {
          setShowCursor(prev => !prev);
        }, 530);

        const expirationDate = (new Date()).getTime() + EXPIRATION_TIME
        const seenObj = {
          seen: "true",
          expirationDate,
        }
        localStorage.setItem("seen", JSON.stringify(seenObj))
      }, 300);

      return () => {
        clearTimeout(startTyping)
        clearInterval(typing);
        clearInterval(cursor);
      }
    } else {
      setText(welcomeText)
      setTypingComplete(true);
    }
  }, [animationSeen]);

  return (
    <div className="min-h-100vh bg-fontGray flex flex-col">
      <div className="flex-1 p-2 sm:p-4 md:p-6 flex items-center justify-center">
        <div className="w-full h-full max-w-7xl border-2 border-gray-600 rounded-lg shadow-lg overflow-hidden">
          {/* terminal Header */}
          <div className="bg-gradient-to-b from-gray-300 to-gray-400 px-4 py-2 flex items-center justify-between border-b-2 border-gray-600">
            {/* left side circles */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full border border-gray-600 bg-red-500 hover:opacity-80 cursor-pointer transition-opacity"></div>
              <div className="w-3 h-3 rounded-full border border-gray-600 bg-yellow-500 hover:opacity-80 cursor-pointer transition-opacity"></div>
              <div className="w-3 h-3 rounded-full border border-gray-600 bg-green-500 hover:opacity-80 cursor-pointer transition-opacity"></div>
            </div>
            {/* centered title */}
            <div className="flex-grow text-center">
              <span className="font-mono text-xs sm:text-sm text-backgroundBlack">
                bccss terminal — zsh
              </span>
            </div>
            {/* right spacer to balance the header */}
            <div className="w-8"></div>
          </div>

          {/* terminal Content */}
          <div className="p-2 sm:p-4 font-mono text-primaryGreen bg-black h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-black">
            <div className="h-full flex flex-col">
              {/* command prompt line - updating size to match navigation */}
              <div className="flex flex-wrap items-center gap-1 text-sm sm:text-md md:text-lg">
                <span className="text-blue-400">user@bccss</span>
                <span className="text-fontGray">:</span>
                <span className="text-blue-300">~</span>
                <span className="text-fontGray">$ </span>
                <span className="text-primaryGreen">
                  {text}
                  {showCursor && <span className="opacity-80 animate-pulse">■</span>}
                </span>
              </div>

              {/* welcome message with fade-in animation */}
              {(typingComplete || animationSeen) && (
                <div className="my-4 animate-fadeIn">
                  <div className="w-full overflow-hidden">
                    <pre className="whitespace-pre text-center text-[0.35rem] xs:text-[0.40rem] sm:text-[0.45rem] md:text-[0.55rem] lg:text-[0.65rem] font-bold max-w-full">
                      {splashText}
                    </pre>
                  </div>
                  <p className="mt-4 text-sm sm:text-base md:text-lg text-center">Welcome to Boston College Computer Science Society</p>
                  <p className="mt-2 text-xs sm:text-sm text-gray-400 text-center">Select a command below to navigate</p>
                </div>
              )}

              {/* navigation links with staggered fade-in */}
              {(typingComplete || animationSeen) && (
                <div className="space-y-1 sm:space-y-2 text-sm sm:text-md md:text-lg mt-4">
                  {links.map((link, index) => (
                    <div
                      key={index}
                      className={`group hover:bg-orange-300/10 rounded transition-colors duration-200 ${activeLink === index ? 'bg-orange-300/10' : ''} animate-fadeIn`}
                      style={{ animationDelay: `${index * 100}ms` }}
                      onMouseEnter={() => setActiveLink(index)}
                      onMouseLeave={() => setActiveLink(null)}
                    >
                      <Link
                        to={link.path}
                        className="flex flex-wrap items-center gap-1 py-1 px-2"
                      >
                        <span className="text-blue-400">user@bccss</span>
                        <span className="text-fontGray">:</span>
                        <span className="text-blue-300">~</span>
                        <span className="text-fontGray">$ cd </span>
                        <span className={`ml-2 transition-colors duration-200 ${activeLink === index ? 'text-orange-300 underline' : 'group-hover:text-orange-300'}`}>
                          {link.label}
                        </span>
                      </Link>
                    </div>
                  ))}

                  <div className="mt-6 pt-4 border-t border-gray-700 animate-fadeIn" style={{ animationDelay: `${links.length * 100 + 100}ms` }}>
                    <p className="text-sm sm:text-base text-gray-400 mb-2">Quick Commands:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      <a href="https://github.com/bccss" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded transition-colors">
                        <span className="text-fontGray">$</span> <span className="text-primaryGreen">git clone</span> <span className="text-blue-300">github.com/bccss</span>
                      </a>
                      <a href="https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss"
                        className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded transition-colors">
                        <span className="text-fontGray">$</span> <span className="text-primaryGreen">mail</span> <span className="text-blue-300">bccssociety@gmail.com</span>
                      </a>
                      <a href="https://bccss.slack.com/" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded transition-colors">
                        <span className="text-fontGray">$</span> <span className="text-primaryGreen">join</span> <span className="text-blue-300">https://bccss.slack.com/</span>
                      </a>
                      <a href="https://calendar.google.com/calendar/u/0/embed?src=bccssociety@gmail.com&ctz=America/New_York"
                        className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded transition-colors">
                        <span className="text-fontGray">$</span> <span className="text-primaryGreen">cat</span> <span className="text-blue-300">upcoming_events.txt</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
