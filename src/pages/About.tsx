/* https://heroicons.com/ for icons! */

import viteLogo from '/vite.svg';
import '../index.css';

const eBoardMembers = [
    { name: "e", title: "e", linkedin: "e" },
    { name: "e", title: "e", linkedin: "e" },
    { name: "e", title: "e", linkedin: "e" },
  ];

export const About = () => {
  return (
        <div className="bg-backgroundBlack text-fontGray w-full min-h-screen mx-auto">
        {/* Navigation here */}

        {/* About */}
        <div className="max-w-md mx-auto py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-primaryGreen flex items-center justify-left">            
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-8 h-8 mr-4 text-primaryGreen">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
            Our Mission
        </h2>
        <div className="flex flex-row items-start space-x-8"> 
            <div className="flex flex-col">
            <p className="text-font-gray mb-6 font-inter text-left">
                The Boston College Computer Science Society (BCCSS) is dedicated to helping students interested in technology and entrepreneurship to achieve their goals. Throughout the school year we host events such as guest lectures, workshops, hackathons, collaborative projects, and more.
            </p>
            <p className="text-font-gray mb-6 font-inter text-left">
                We work closely with the Computer Science department at BC to create a better environment for students to learn and find new opportunities. Further, we collaborate with many departments and clubs in the Carroll School of Management at BC to encourage entrepreneurship and promote collaboration between business and computer science students.
            </p>
            </div>
        <div className="bg-gray-400 w-[50%] h-[100%] flex items-center justify-center rounded-lg">
            <img src={viteLogo} className="about_club_photo" alt="BCCSS Club Photo for About Page" />
        </div>
        </div>
        </div>

        
        {/* Club Stats */}
        <div className="flex justify-center gap-8 my-8">
            <div className="group p-4 rounded-lg text-center w-48 text-secondaryTeal 
            border-2 border-teal-300 bg-transparent
            hover:bg-radial-[at_50%_75%] hover:from-teal-200 hover:via-teal-300 hover:to-teal-500
           hover:border-teal-400 hover:shadow-2xl hover:translate-y-[-8px] hover:text-backgroundBlack transition-all duration-400 ease-in-out">
                <h4 className="text-3xl font-bold">1000+</h4>
                <p className="text-xl font-inter">members</p>
        </div>
        <div className="group p-4 rounded-lg text-center w-48 text-secondaryTeal 
            border-2 border-teal-300 bg-transparent
            hover:bg-radial-[at_50%_75%] hover:from-teal-200 hover:via-teal-300 hover:to-teal-500
          hover:border-teal-400 hover:shadow-2xl hover:translate-y-[-8px] hover:text-backgroundBlack transition-all duration-400 ease-in-out">
                <h4 className="text-3xl font-bold">34</h4>
                <p className="text-xl font-inter">events hosted</p>
        </div>
        </div>

        {/* EBoard */}
        <div className="max-w-md mx-auto py-20 px-4">
        <h2 className="text-2xl font-bold mb-4 text-primaryGreen flex items-center justify-center">            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-8 h-8 mr-2 color-primaryGreen">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            Meet the Board
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 rounded-lg">
                {eBoardMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-lg overflow-hidden mb-4">
                        <img src={viteLogo} className="w-full h-full object-cover" alt="BCCSS Eboard PFP" />
                    </div>
                <h4 className="text-lg font-montserrat text-primaryGreen">{member.name}</h4>
                <p className="text-sm text-secondaryTeal font-inter">{member.title}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z" fill="#35d2a1"></path><path d="M12,19h5v17h-5zM14.485,17h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM36,36h-5v-9.099c0,-2.198 -1.225,-3.698 -3.192,-3.698c-1.501,0 -2.313,1.012 -2.707,1.99c-0.144,0.35 -0.101,1.318 -0.101,1.807v9h-5v-17h5v2.616c0.721,-1.116 1.85,-2.616 4.738,-2.616c3.578,0 6.261,2.25 6.261,7.274l0.001,9.726z" fill="#ffffff"></path></g></g>
                    </svg>
                </a>
                </div>
                ))}
            </div>
      </div>
        {/* Footer Component here \*/}
    </div>
  )
};