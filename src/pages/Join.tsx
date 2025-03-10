import '../index.css'
import joinPhoto from '../assets/joinphoto.png'
import slack from '../assets/slacksvg.svg'
import insta from '../assets/instasvg.svg'
import mail from '../assets/mailsvg.svg'
import discord from '../assets/discordsvg.svg'
import { useEffect } from 'react'

export const Join = () => {
  useEffect(() => {
    document.title = 'BCCSS | Join'
  }, [])
  return (
    <div className="min-h-screen bg-backgroundBlack p-8">
      <h1 className="text-5xl text-primaryGreen font-bold text-center font-header mb-12 
        hover:scale-105 transition-transform duration-300">
        Join BCCSS
      </h1>

      {/* Image with hover effect */}
      <div className="max-w-2xl mx-auto mb-16 transform hover:scale-[1.02] transition-transform duration-300">
        <img src={joinPhoto} alt="photo" className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"/>
      </div>

      {/* Calendar Section with hover effect */}
      <div className="max-w-6xl mx-auto bg-backgroundBlack rounded-lg p-8 hover:bg-white/5 transition-colors duration-300">
        <h2 className="text-3xl text-secondaryTeal font-header font-bold mb-8 text-center
          hover:text-primaryGreen transition-colors duration-300">
          Add Our Calendar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-10 md:gap-8">
          {/* Text Column */}
          <div className="space-y-4 col-span-3 text-center pb-8 md:text-left">
            <p className="font-body"> {/* actual text says what */}
               Click the plus in the bottom right and follow the link to add our calendar to your Google Calendar. This is a great way to stay connected with us and never miss any of our great events!
            </p>
          </div>
          {/* Calendar Embed Column */}
          <div className="h-[450px] bg-white/10 rounded-lg col-span-7">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=bccssociety%40gmail.com&ctz=America%2FNew_York"
              className="w-full h-full rounded-lg bg-backgroundBlack"
              frameBorder="0"
              scrolling="no"
              title="BCCSS Calendar"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Socials Section with enhanced interactions */}
      <div className="max-w-6xl mx-auto bg-backgroundBlack rounded-lg p-8 hover:bg-white/5 transition-colors duration-300">
        <h2 className="text-3xl text-secondaryTeal font-header font-bold mb-8 text-center
          hover:text-primaryGreen transition-colors duration-300">
          Get in Touch!
        </h2>
        <div className="max-w-[700px] mx-auto">
          {/*note: icon coloring is done in each svg file - theres definitely another way to do this*/}
          {/*note: discord link, mail is not working rn bc we don't have one*/}
          <div className="rounded-lg flex items-center justify-center p-4 gap-8">
            {/* Social icons with hover effects */}
            <a href="https://bccss.slack.com" target="_blank" rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300 hover:opacity-80">
              <img src={slack} alt="slack icon" className="w-11 h-11 md:w-15 md:h-15 lg:w-18 lg:h-18"/>
            </a>
            <a href="https://www.instagram.com/bccssociety/" target="_blank" rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300 hover:opacity-80">
              <img src={insta} alt="insta icon" className="w-14 h-14 md:w-18 md:h-18 lg:w-21 lg:h-21"/>
            </a>
            <a href="https://mailchi.mp/8125d9b64c7b/sign-up-for-our-newsletter-bccss"
              className="transform hover:scale-110 transition-transform duration-300 hover:opacity-80">
              <img src={mail} alt="mail icon" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
