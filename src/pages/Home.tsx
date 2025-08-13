import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { EmailSubscription } from '../components/EmailSubscription';

export const Home = () => {
  useEffect(() => {
    document.title = 'BCCSS | Boston College Computer Science Society';
  }, []);

  // Recent event images for preview
  const recentEventImages = [
    "events/IMG_9188.jpg",
    "events/IMG_7503.jpg", 
    "events/IMG_7367.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-black via-surface-gray to-surface-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/10 to-primary-teal/10 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Logo and Title */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-header font-bold text-gradient-primary mb-4">
                BCCSS
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-header font-semibold text-text-white">
                Boston College Computer Science Society
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-text-gray max-w-2xl mx-auto leading-relaxed">
                Empowering the next generation of technologists and innovators
              </p>
            </div>

            {/* Quick Stats Bar */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 pt-6">
              {[
                { number: "500+", label: "Members" },
                { number: "30+", label: "Events" },
                { number: "$5k+", label: "Prizes" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-primary mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-text-gray font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Email Subscription Section */}
      <EmailSubscription />

      {/* Primary Action Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-header font-bold text-gradient-secondary mb-3 sm:mb-4">
            Get Started
          </h2>
          <p className="text-base sm:text-lg text-text-gray">
            Everything you need to connect with our community
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Events Card */}
          <Link
            to="/events"
            className="group card-modern rounded-2xl p-6 sm:p-8 text-center hover:scale-105 transition-all duration-300 animate-slideUp"
            style={{ animationDelay: '0ms' }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-r from-primary-green to-primary-teal flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl sm:text-3xl">📅</span>
            </div>
            <h3 className="text-lg sm:text-xl font-header font-bold text-text-white mb-2 sm:mb-3 group-hover:text-primary-green transition-colors">
              View Events
            </h3>
            <p className="text-sm sm:text-base text-text-gray group-hover:text-text-white transition-colors leading-relaxed mb-4">
              Check our calendar for workshops, hackathons, and tech talks
            </p>
            <div className="inline-flex items-center text-primary-green font-medium text-sm group-hover:scale-105 transition-transform">
              See Calendar →
            </div>
          </Link>

          {/* Slack Card */}
          <a
            href="https://bccss.slack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group card-modern rounded-2xl p-6 sm:p-8 text-center hover:scale-105 transition-all duration-300 animate-slideUp"
            style={{ animationDelay: '100ms' }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-r from-accent-purple to-accent-pink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl sm:text-3xl">💬</span>
            </div>
            <h3 className="text-lg sm:text-xl font-header font-bold text-text-white mb-2 sm:mb-3 group-hover:text-accent-purple transition-colors">
              Join Slack
            </h3>
            <p className="text-sm sm:text-base text-text-gray group-hover:text-text-white transition-colors leading-relaxed mb-4">
              Connect with members, ask questions, and collaborate on projects
            </p>
            <div className="inline-flex items-center text-accent-purple font-medium text-sm group-hover:scale-105 transition-transform">
              Join Community →
            </div>
          </a>

          {/* Newsletter Card */}
          <a
            href="https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss"
            target="_blank"
            rel="noopener noreferrer"
            className="group card-modern rounded-2xl p-6 sm:p-8 text-center hover:scale-105 transition-all duration-300 animate-slideUp"
            style={{ animationDelay: '200ms' }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-r from-primary-teal to-primary-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl sm:text-3xl">📧</span>
            </div>
            <h3 className="text-lg sm:text-xl font-header font-bold text-text-white mb-2 sm:mb-3 group-hover:text-primary-teal transition-colors">
              Get Updates
            </h3>
            <p className="text-sm sm:text-base text-text-gray group-hover:text-text-white transition-colors leading-relaxed mb-4">
              Weekly newsletters with events, opportunities, and announcements
            </p>
            <div className="inline-flex items-center text-primary-teal font-medium text-sm group-hover:scale-105 transition-transform">
              Subscribe →
            </div>
          </a>
        </div>
      </div>

      {/* Recent Events Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-header font-bold text-gradient-primary mb-3 sm:mb-4">
            Recent Events
          </h2>
          <p className="text-base sm:text-lg text-text-gray">
            Highlights from our amazing community gatherings
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {recentEventImages.map((image, index) => (
            <Link
              key={index}
              to="/events"
              className="group relative rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={image}
                  alt={`Recent BCCSS Event ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-text-white text-sm font-medium">View All Events →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More Events CTA */}
        <div className="text-center mt-8">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary-green text-primary-green font-semibold rounded-xl hover:bg-primary-green/10 hover:scale-105 transition-all duration-300"
          >
            <span>📅</span>
            View Full Calendar
          </Link>
        </div>
      </div>

      {/* Secondary Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-header font-bold text-text-white mb-4">
            Learn More
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link
            to="/about"
            className="px-4 py-2 border border-surface-border text-text-gray hover:text-text-white hover:border-primary-green rounded-xl transition-all duration-300 text-sm sm:text-base"
          >
            About Us
          </Link>
          <Link
            to="/connect"
            className="px-4 py-2 border border-surface-border text-text-gray hover:text-text-white hover:border-primary-teal rounded-xl transition-all duration-300 text-sm sm:text-base"
          >
            Connect
          </Link>
          <a
            href="https://github.com/bccss"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-surface-border text-text-gray hover:text-text-white hover:border-accent-purple rounded-xl transition-all duration-300 text-sm sm:text-base"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/bccssociety/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-surface-border text-text-gray hover:text-text-white hover:border-accent-pink rounded-xl transition-all duration-300 text-sm sm:text-base"
          >
            Instagram
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
