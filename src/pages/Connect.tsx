import '../index.css'
import joinPhoto from '../assets/joinphoto.png'
import slack from '../assets/slacksvg.svg'
import insta from '../assets/instasvg.svg'
import mail from '../assets/mailsvg.svg'
import { useEffect } from 'react'
import { Footer } from '../components/Footer';

export const Connect = () => {
  useEffect(() => {
    document.title = 'BCCSS | Connect'
  }, [])
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-black via-surface-gray to-surface-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/10 to-primary-teal/10 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-header font-bold">
              <span className="text-gradient-primary">Connect</span> with BCCSS
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-text-gray max-w-3xl mx-auto leading-relaxed">
              Join Boston College's most innovative tech community through our communication channels and social platforms.
            </p>
            
            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4">
              <a
                href="https://bccss.slack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-green to-primary-teal text-surface-black font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-green/25 text-base sm:text-lg"
              >
                💬 Join Slack Community
              </a>
              <a
                href="https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 border border-primary-teal text-primary-teal font-semibold rounded-xl hover:bg-primary-teal/10 hover:scale-105 transition-all duration-300 text-base sm:text-lg"
              >
                📧 Subscribe to Newsletter
              </a>
            </div>
            
            {/* Hero Image */}
            <div className="relative max-w-4xl mx-auto mt-8 sm:mt-12">
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

      {/* Social Media Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="card-modern rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-accent-purple to-accent-pink flex items-center justify-center mr-3 sm:mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-surface-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-header font-bold text-gradient-secondary">
                Communication Channels
              </h2>
            </div>
            <p className="text-base sm:text-lg text-text-gray max-w-2xl mx-auto">
              Connect with us on our social platforms and join our vibrant community
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
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
                className="group card-modern rounded-2xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4 sm:mb-6">
                  <div className={`absolute -inset-2 bg-gradient-to-r from-${social.color}/20 to-${social.color}/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300`}></div>
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center">
                    <img 
                      src={social.icon} 
                      alt={social.alt}
                      className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <h3 className={`text-base sm:text-lg font-header font-semibold text-${social.color} mb-2 sm:mb-3 group-hover:text-text-white transition-colors duration-300`}>
                  {social.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-gray group-hover:text-text-white transition-colors duration-300 leading-relaxed">
                  {social.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-${social.color} text-xs sm:text-sm font-medium`}>
                    Connect Now →
                  </span>
                </div>
              </a>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-surface-border">
            <p className="text-text-gray mb-4 text-sm sm:text-base">
              Ready to dive deeper into the tech world at BC?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="https://bccss.slack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary-green to-primary-teal text-surface-black font-medium rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-green/25 text-sm sm:text-base"
              >
                Join Slack Community
              </a>
              <a
                href="https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss"
                className="px-4 sm:px-6 py-2.5 sm:py-3 border border-surface-border text-text-white font-medium rounded-xl hover:bg-surface-gray hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Connect Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-header font-bold text-gradient-primary mb-3 sm:mb-4">
            Why Connect with Us?
          </h2>
          <p className="text-base sm:text-lg text-text-gray">The benefits of joining our community</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              icon: "🚀",
              title: "Career Growth",  
              description: "Access to internships, job opportunities, and career advice",
              color: "primary-green"
            },
            {
              icon: "🤝",
              title: "Networking",
              description: "Connect with peers, alumni, and industry professionals",
              color: "primary-teal"
            },
            {
              icon: "📚",
              title: "Learning",
              description: "Workshops, tutorials, and study groups for skill development",
              color: "accent-purple"
            },
            {
              icon: "🎯",
              title: "Projects",
              description: "Collaborate on exciting projects and hackathon teams",
              color: "accent-pink"
            }
          ].map((benefit, index) => (
            <div
              key={index}
              className="group card-modern rounded-2xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                {benefit.icon}
              </div>
              <h3 className={`text-lg font-header font-semibold mb-2 text-${benefit.color} group-hover:text-text-white transition-colors duration-300`}>
                {benefit.title}
              </h3>
              <p className="text-sm text-text-gray group-hover:text-text-white transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 