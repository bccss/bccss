import '../index.css'
import joinPhoto from '../assets/joinphoto.png'
import slack from '../assets/slacksvg.svg'
import insta from '../assets/instasvg.svg'
import mail from '../assets/mailsvg.svg'
import { useEffect } from 'react'
import { Footer } from '../components/Footer';

export const Join = () => {
  useEffect(() => {
    document.title = 'BCCSS | Join'
  }, [])
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-black via-surface-gray to-surface-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/10 to-primary-teal/10 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-header font-bold">
              <span className="text-gradient-primary">Join</span> BCCSS
            </h1>
            <p className="text-lg sm:text-xl text-text-gray max-w-3xl mx-auto leading-relaxed">
              Ready to be part of Boston College's most innovative tech community? Let's get you connected!
            </p>
            
            {/* Hero Image */}
            <div className="relative max-w-4xl mx-auto mt-12">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-green/20 to-primary-teal/20 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative group">
                <img 
                  src={joinPhoto} 
                  alt="BCCSS Community" 
                  className="w-full rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card-modern rounded-2xl p-8 sm:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-green to-primary-teal flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-surface-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5M3 16.5h18" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-header font-bold text-gradient-primary">
              Stay Connected
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Instructions */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-header font-semibold text-text-white">
                  Never Miss an Event
                </h3>
                <p className="text-text-gray leading-relaxed">
                  Click the <span className="text-primary-green font-medium">+</span> button in the bottom right corner of the calendar and follow the link to add our events to your Google Calendar.
                </p>
                <p className="text-text-gray leading-relaxed">
                  This is the best way to stay connected with us and never miss any of our amazing events, workshops, and hackathons!
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="space-y-3 pt-6 border-t border-surface-border">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📅</span>
                  <span className="text-text-gray">Weekly events & workshops</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <span className="text-text-gray">Yearly Hackathons</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-text-gray">Guest speaker series</span>
                </div>
              </div>
            </div>
            
            {/* Calendar Embed */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden border border-surface-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-primary-teal/5"></div>
                <iframe 
                  src="https://calendar.google.com/calendar/embed?src=bccssociety%40gmail.com&ctz=America%2FNew_York"
                  className="relative w-full h-[500px] bg-surface-black"
                  frameBorder="0"
                  scrolling="no"
                  title="BCCSS Calendar"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card-modern rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent-purple to-accent-pink flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-surface-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-header font-bold text-gradient-secondary">
                Get in Touch
              </h2>
            </div>
            <p className="text-lg text-text-gray max-w-2xl mx-auto">
              Connect with us on our social platforms and join our vibrant community
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                href: "https://bccss.slack.com",
                icon: slack,
                alt: "Slack",
                title: "Join our Slack",
                description: "Real-time discussions, project collaboration, and community updates",
                color: "primary-green"
              },
              {
                href: "https://www.instagram.com/bccssociety/",
                icon: insta,
                alt: "Instagram",
                title: "Follow on Instagram",
                description: "Behind-the-scenes content, event highlights, and community moments",
                color: "accent-purple"
              },
              {
                href: "https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss",
                icon: mail,
                alt: "Newsletter",
                title: "Subscribe to Newsletter",
                description: "Weekly updates, event announcements, and exclusive opportunities",
                color: "primary-teal"
              }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-modern rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className={`absolute -inset-2 bg-gradient-to-r from-${social.color}/20 to-${social.color}/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300`}></div>
                  <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                    <img 
                      src={social.icon} 
                      alt={social.alt}
                      className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <h3 className={`text-lg font-header font-semibold text-${social.color} mb-3 group-hover:text-text-white transition-colors duration-300`}>
                  {social.title}
                </h3>
                <p className="text-sm text-text-gray group-hover:text-text-white transition-colors duration-300 leading-relaxed">
                  {social.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-${social.color} text-sm font-medium`}>
                    Connect Now →
                  </span>
                </div>
              </a>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12 pt-8 border-t border-surface-border">
            <p className="text-text-gray mb-4">
              Ready to dive deeper into the tech world at BC?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://bccss.slack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-primary-green to-primary-teal text-surface-black font-medium rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-green/25"
              >
                Join Slack Community
              </a>
              <a
                href="https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss"
                className="px-6 py-3 border border-surface-border text-text-white font-medium rounded-xl hover:bg-surface-gray hover:scale-105 transition-all duration-300"
              >
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}
