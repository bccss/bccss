import '../index.css'
export const Join = () => {
  return (
    <div className="min-h-screen bg-backgroundBlack p-8">
      <h1 className="text-5xl text-primaryGreen font-bold text-center font-header mb-12">
        Join BCCSS
      </h1>

      {/* board photo? community photo? */}
      <div className="max-w-2xl mx-auto mb-16">
        <img src="#" alt="cool photo man" className="w-full rounded-lg"/>
      </div>

      {/* Calendar Section */}
      <div className="max-w-6xl mx-auto bg-backgroundBlack rounded-lg p-8">
        <h2 className="text-3xl text-secondaryTeal font-header font-bold mb-8 text-center">
          Add Our Calendar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
          {/* Text Column */}
          <div className="space-y-4 col-span-3">
            <p className="font-body"> {/* actual text says what */}
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Calendar Embed Column */}
          <div className="h-[450px] bg-white/10 rounded-lg col-span-7">
            {/* Replace with actual Google Calendar embed */}
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=c_38182a0bf0baa4187042244866d480f737a02c57a92d89437c0d74c4170de0f8%40group.calendar.google.com&ctz=America%2FNew_York"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              scrolling="no"
              title="BCCSS Calendar"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Socials Section */}
      <div className="max-w-6xl mx-auto bg-backgroundBlack rounded-lg p-8">
        <h2 className="text-3xl text-secondaryTeal font-header font-bold mb-8 text-center">
          Get in Touch!
        </h2>
        {/* suggestion: make a component for reuse / consistency throughout site? */}
        <div className="grid grid-cols-2 gap-8 max-w-[400px] mx-auto">
          <div className="bg-white/10 rounded-full aspect-square flex items-center justify-center">
            <img src="#" alt="slack icon" className="w-12 h-12"/>
          </div>
          <div className="bg-white/10 rounded-full aspect-square flex items-center justify-center">
            <img src="#" alt="insta icon" className="w-12 h-12"/>
          </div>
          <div className="bg-white/10 rounded-full aspect-square flex items-center justify-center">
            <img src="#" alt="email icon" className="w-12 h-12"/>
          </div>
          {/* do we have a discord ? i hope so i fw squares */}
          <div className="bg-white/10 rounded-full aspect-square flex items-center justify-center">
            <img src="#" alt="discord icon" className="w-12 h-12"/>
          </div>
        </div>
      </div>
    </div>
  )
}
