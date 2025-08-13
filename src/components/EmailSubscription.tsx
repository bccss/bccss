import { useState } from 'react';

export const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);
    
    try {
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
        setMessage({ type: 'success', text: 'Welcome to the BCCSS community! 🚀' });
        setEmail('');
      } else {
        setMessage({ type: 'error', text: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        {/* Clean Terminal Window */}
        <div className="card-modern rounded-2xl overflow-hidden">
          {/* Simple Terminal Header */}
          <div className="bg-surface-black/80 px-4 sm:px-6 py-3 border-b border-surface-border flex items-center justify-between">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-primary-green"></div>
            </div>
            <span className="text-text-gray font-mono text-sm">newsletter@bccss.co</span>
            <div></div>
          </div>

          {/* Clean Content */}
          <div className="p-6 sm:p-8 lg:p-12 text-center space-y-6 sm:space-y-8">
            {/* Simple Header */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-header font-bold text-gradient-primary">
                Stay in the Loop
              </h2>
              <p className="text-base sm:text-lg text-text-gray leading-relaxed max-w-lg mx-auto">
                Get updates on events, workshops, and opportunities
              </p>
            </div>

            {/* Clean Email Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (message.type) setMessage({ type: null, text: '' });
                  }}
                  placeholder="your.email@domain.com"
                  className="w-full px-6 py-4 rounded-full bg-surface-black border border-surface-border text-text-white placeholder-text-dim font-mono text-center focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all duration-300 hover:border-primary-green/50"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-primary-green to-primary-teal text-surface-black font-semibold rounded-full hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-primary-green/25"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-surface-black border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    '→'
                  )}
                </button>
              </div>

              {/* Status Message */}
              {message.type && (
                <div className={`mt-4 p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  message.type === 'success' 
                    ? 'bg-primary-green/10 text-primary-green border border-primary-green/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {message.text}
                </div>
              )}
            </form>

            {/* Simple Footer */}
            <p className="text-xs text-text-dim">
              No spam • Unsubscribe anytime • Join 500+ members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 