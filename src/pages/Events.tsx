import { useEffect } from 'react';
import { Footer } from '../components/Footer';

export const Events = () => {
  useEffect(() => {
    document.title = 'BCCSS | Events';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-black via-surface-gray to-surface-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/10 to-primary-teal/10 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-header font-bold">
              <span className="text-gradient-primary">Events</span> & Calendar
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-text-gray max-w-3xl mx-auto leading-relaxed">
              Never miss an event! Stay up to date with all our workshops, hackathons, and community gatherings.
            </p>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4">
              <a
                href="https://calendar.google.com/calendar?cid=bccssociety%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-green to-primary-teal text-surface-black font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-green/25 text-base sm:text-lg"
              >
                📅 Add to Your Calendar
              </a>
              <a
                href="https://bccss.slack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 border border-primary-green text-primary-green font-semibold rounded-xl hover:bg-primary-green/10 hover:scale-105 transition-all duration-300 text-base sm:text-lg"
              >
                💬 Join Slack for Updates
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Section - Main Focus */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="card-modern rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-primary-green to-primary-teal flex items-center justify-center mr-3 sm:mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-surface-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5M3 16.5h18" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-header font-bold text-gradient-primary">
              Event Calendar
            </h2>
          </div>

          {/* Calendar Embed - Full Width Priority */}
          <div className="relative rounded-2xl overflow-hidden border border-surface-border mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-primary-teal/5"></div>
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=bccssociety%40gmail.com&ctz=America%2FNew_York"
              className="relative w-full h-[500px] sm:h-[600px] bg-surface-black"
              frameBorder="0"
              scrolling="no"
              title="BCCSS Event Calendar"
            ></iframe>
          </div>

          {/* Quick Instructions */}
          <div className="text-center">
            <p className="text-sm sm:text-base text-text-gray leading-relaxed mb-4">
              Click the <span className="text-primary-green font-medium">+</span> button in the bottom right corner of the calendar to add our events to your Google Calendar.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-green/10 text-primary-green rounded-full text-xs sm:text-sm font-medium border border-primary-green/20">
                📅 Weekly events
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-teal/10 text-primary-teal rounded-full text-xs sm:text-sm font-medium border border-primary-teal/20">
                🏆 Hackathons
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent-purple/10 text-accent-purple rounded-full text-xs sm:text-sm font-medium border border-accent-purple/20">
                🎯 Guest speakers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* This Week's Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-header font-bold text-gradient-secondary mb-3 sm:mb-4">
              Fall 2025's Highlights
          </h2>
          <p className="text-base sm:text-lg text-text-gray">Don't miss these upcoming events</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Example events - these would be dynamic in a real implementation */}
          {[
            {
              title: "First General Meeting",
              date: "Date TBD",
              location: "Room TBD",
              type: "General Meeting",
              color: "primary-green"
            }
          ].map((event, index) => (
            <div
              key={index}
              className="group card-modern rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 bg-${event.color}/10 text-${event.color} border border-${event.color}/20`}>
                {event.type}
              </div>
              <h3 className="text-lg font-header font-semibold text-text-white mb-2 group-hover:text-primary-green transition-colors">
                {event.title}
              </h3>
              <div className="space-y-1 text-sm text-text-gray">
                <div className="flex items-center gap-2">
                  <span>🕐</span>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Events CTA */}
        <div className="text-center mt-8">
          <p className="text-text-gray mb-4 text-sm sm:text-base">
            Check the calendar above for all upcoming events and details
          </p>
          <a
            href="https://bccss.slack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-surface-border text-text-white font-medium rounded-xl hover:bg-surface-gray hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            <span>💬</span>
            Get Event Reminders on Slack
          </a>
        </div>
      </div>

      {/* Event Types Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-header font-bold text-gradient-primary mb-3 sm:mb-4">
            What We Host
          </h2>
          <p className="text-base sm:text-lg text-text-gray">Diverse events for every interest and skill level</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              icon: "💻",
              title: "Workshops",
              description: "Hands-on learning sessions",
              color: "primary-green"
            },
            {
              icon: "🏆", 
              title: "Hackathons",
              description: "24-hour coding competitions",
              color: "primary-teal"
            },
            {
              icon: "🎯",
              title: "Tech Talks",
              description: "Industry expert presentations",
              color: "accent-purple"
            },
            {
              icon: "🤝",
              title: "Networking",
              description: "Connect with peers and alumni",
              color: "accent-pink"
            }
          ].map((type, index) => (
            <div
              key={index}
              className="group card-modern rounded-2xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                {type.icon}
              </div>
              <h3 className={`text-lg font-header font-semibold mb-2 text-${type.color} group-hover:text-text-white transition-colors duration-300`}>
                {type.title}
              </h3>
              <p className="text-sm text-text-gray group-hover:text-text-white transition-colors duration-300">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}; 