import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/join', label: 'Join' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-surface-black/95 backdrop-blur-md border-b border-surface-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="group flex items-center">
              <span className="text-2xl font-header font-bold text-gradient-primary group-hover:scale-105 transition-transform duration-300">
                BCCSS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group
                    ${isActivePath(item.path)
                      ? 'text-primary-green bg-primary-green/10 border border-primary-green/20'
                      : 'text-text-gray hover:text-text-white hover:bg-surface-gray'
                    }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  {isActivePath(item.path) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-green rounded-full"></div>
                  )}
                  {/* Hover effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-primary-green/10 to-primary-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10
                    ${isActivePath(item.path) ? 'opacity-100' : ''}`}></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-text-gray hover:text-primary-green hover:bg-surface-gray focus:outline-none focus:ring-2 focus:ring-primary-green/50 transition-all duration-300"
              aria-label="Main menu"
            >
              <svg
                className="h-6 w-6 transition-transform duration-300"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              >
                {!isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-surface-gray/50 backdrop-blur-sm border-t border-surface-border">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 animate-slideUp
                ${isActivePath(item.path)
                  ? 'text-primary-green bg-primary-green/10 border border-primary-green/20'
                  : 'text-text-gray hover:text-text-white hover:bg-surface-gray'
                }`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>{item.label}</span>
                {isActivePath(item.path) && (
                  <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
