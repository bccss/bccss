import { useState, useEffect, useRef } from 'react';

interface TerminalLine {
  type: 'command' | 'output' | 'error' | 'success' | 'info';
  text: string;
  timestamp?: string;
}

export const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<TerminalLine[]>([
    { type: 'info', text: '┌─────────────────────────────────────────────────────────────┐' },
    { type: 'info', text: '│  BCCSS Newsletter Terminal v2.0.0                           │' },
    { type: 'info', text: '│  Stay connected with the CS community                       │' },
    { type: 'info', text: '└─────────────────────────────────────────────────────────────┘' },
    { type: 'output', text: '' },
    { type: 'output', text: 'Welcome! Subscribe to receive:' },
    { type: 'output', text: '  ✓ Event notifications and workshops' },
    { type: 'output', text: '  ✓ Career opportunities and networking' },
    { type: 'output', text: '  ✓ Exclusive member updates' },
    { type: 'output', text: '' },
    { type: 'info', text: 'Type your email and press ENTER to subscribe...' },
    { type: 'output', text: '' },
  ]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when terminal history updates
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  // Focus input when clicking anywhere in the terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const addToHistory = (line: TerminalLine) => {
    setTerminalHistory(prev => [...prev, line]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      addToHistory({ type: 'command', text: `$ subscribe ${email}` });
      addToHistory({ type: 'error', text: '✗ Error: Invalid email address' });
      addToHistory({ type: 'output', text: 'Please enter a valid email and try again.' });
      addToHistory({ type: 'output', text: '' });
      setEmail('');
      return;
    }

    // Add command to history
    addToHistory({ type: 'command', text: `$ subscribe ${email}` });
    addToHistory({ type: 'output', text: 'Processing subscription request...' });
    
    setIsSubmitting(true);
    
    try {
      // Simulate network delay for effect
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Use different API endpoint based on deployment platform
      let apiEndpoint = '/api/subscribe'; // Default for Vercel
      
      if (window.location.hostname.includes('netlify')) {
        apiEndpoint = '/.netlify/functions/subscribe';
      } else if (process.env.NODE_ENV === 'development' || window.location.hostname.includes('github')) {
        // For GitHub Pages fallback, use Formspree (replace with your Formspree endpoint)
        apiEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
      }
        
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        addToHistory({ type: 'output', text: '[████████████████████] 100%' });
        addToHistory({ type: 'success', text: '✓ Successfully subscribed!' });
        addToHistory({ type: 'output', text: `Welcome to the BCCSS community, ${email}!` });
        addToHistory({ type: 'info', text: '🚀 Check your inbox for a confirmation email.' });
        addToHistory({ type: 'output', text: '' });
        setEmail('');
      } else {
        addToHistory({ type: 'error', text: `✗ Error: ${data.message || 'Subscription failed'}` });
        addToHistory({ type: 'output', text: 'Please try again or contact us for help.' });
        addToHistory({ type: 'output', text: '' });
      }
    } catch (error) {
      addToHistory({ type: 'error', text: '✗ Network error: Connection failed' });
      addToHistory({ type: 'output', text: 'Please check your connection and try again.' });
      addToHistory({ type: 'output', text: '' });
    } finally {
      setIsSubmitting(false);
      setEmail('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Epic Terminal Window */}
        <div className="card-modern rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary-green/10 transition-shadow duration-500">
          {/* Terminal Header */}
          <div className="bg-surface-black/90 px-4 sm:px-6 py-3 border-b border-surface-border flex items-center justify-between">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-primary-green hover:bg-primary-teal cursor-pointer transition-colors"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-text-gray font-mono text-xs sm:text-sm">newsletter@bccss.co</span>
              <span className="hidden sm:inline text-text-dim font-mono text-xs">~/subscribe</span>
            </div>
            <div className="w-12"></div>
          </div>

          {/* Interactive Terminal Content */}
          <div 
            className="bg-gradient-to-b from-surface-black to-surface-black/95 p-4 sm:p-6 lg:p-8 font-mono text-sm min-h-[400px] max-h-[600px] overflow-y-auto cursor-text"
            onClick={handleTerminalClick}
          >
            {/* Terminal History */}
            <div className="space-y-1">
              {terminalHistory.map((line, index) => (
                <div 
                  key={index} 
                  className={`
                    ${line.type === 'command' ? 'text-primary-green font-semibold' : ''}
                    ${line.type === 'output' ? 'text-text-gray' : ''}
                    ${line.type === 'error' ? 'text-red-400' : ''}
                    ${line.type === 'success' ? 'text-primary-green' : ''}
                    ${line.type === 'info' ? 'text-primary-teal' : ''}
                    transition-all duration-300
                  `}
                >
                  {line.text}
                </div>
              ))}
            </div>

            {/* Command Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center mt-2">
              <span className="text-primary-green mr-2 font-bold">$</span>
              <span className="text-text-gray mr-2">subscribe</span>
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="your.email@domain.com"
                className="flex-1 bg-transparent border-none outline-none text-text-white placeholder-text-dim/50 font-mono caret-primary-green"
                disabled={isSubmitting}
                autoFocus
              />
              {/* Blinking cursor */}
              {isFocused && !isSubmitting && (
                <span className="inline-block w-2 h-4 bg-primary-green ml-0.5 animate-pulse"></span>
              )}
              {isSubmitting && (
                <span className="text-primary-teal ml-2 animate-pulse">⏳</span>
              )}
            </form>

            {/* Auto-scroll anchor */}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Footer with Tips */}
          <div className="bg-surface-black/80 px-4 sm:px-6 py-3 border-t border-surface-border">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center space-x-4 text-text-dim">
                <span>⏎ ENTER to submit</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">ESC to clear</span>
              </div>
              <div className="text-text-dim">
                <span className="text-primary-green">500+</span> members subscribed
              </div>
            </div>
          </div>
        </div>

        {/* Helper Text */}
        <p className="text-center text-xs text-text-dim mt-6 font-mono">
          No spam • Unsubscribe anytime • Privacy respected
        </p>
      </div>
    </div>
  );
}; 