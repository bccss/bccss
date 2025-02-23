import about_club_photo from '/about_club_photo.jpg';
import '../index.css';
import boardMembers from '../../board_members.json';
import { ImageCarousel } from "../../src/components/ImageCarousel";

type BoardMember = {
    name: string;
    title: string;
    linkedin: string;
    image: string;
};
const eBoardMembers: BoardMember[] = boardMembers;

export const About = () => {
  return (
    <div className="bg-backgroundBlack text-fontGray w-full min-h-screen mx-auto px-4 sm:px-8">
        {/* Navigation here */}

        {/* About */}
        <div className="mx-auto py-8 text-left max-w-screen-lg">
            <h2 className="text-2xl font-bold mb-4 pt-8 text-primaryGreen flex items-center">            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-8 h-8 mr-4 text-primaryGreen">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                Our Mission
            </h2>
            <div className="flex flex-col md:flex-row md:space-x-8 items-center">
                <div className="flex-1">
                    <p className="text-font-gray mb-6 mt-4 font-inter">
                        The Boston College Computer Science Society (BCCSS) is dedicated to helping students interested in technology and entrepreneurship to achieve their goals. We host events such as guest lectures, workshops, hackathons, collaborative projects, and more.
                    </p>
                    <p className="text-font-gray mb-6 font-inter">
                        We work closely with the Computer Science department at BC to create a better environment for students to learn and find new opportunities. Further, we collaborate with many departments and clubs in the Carroll School of Management at BC to encourage entrepreneurship.
                    </p>
                </div>
                <img src={about_club_photo} className="w-full md:w-1/2 lg:w-1/3 h-auto border-3 border-dashed rounded-lg border-teal-300 bg-transparent mt-4" alt="BCCSS Club Photo" />
            </div>
        </div>

        {/* Club Stats */}
        <div className="flex flex-wrap justify-center gap-8 my-8">
            <div className="group p-4 rounded-lg text-center w-40 md:w-48 text-secondaryTeal border-2 border-teal-300 bg-transparent hover:bg-teal-500 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <h4 className="text-3xl font-bold group-hover:!text-black">1000+</h4>
                <p className="text-xl font-inter group-hover:!text-black">members</p>
            </div>
            <div className="group p-4 rounded-lg text-center w-40 md:w-48 text-secondaryTeal border-2 border-teal-300 bg-transparent hover:bg-teal-500 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <h4 className="text-3xl font-bold group-hover:!text-black">34</h4>
                <p className="text-xl font-inter group-hover:!text-black">events hosted</p>
            </div>
        </div>

        {/* Image Carousel */}
        <div className="my-24 max-w-screen-lg mx-auto">
            <ImageCarousel />
        </div>

        {/* EBoard */}
        <div className="max-w-screen-lg mx-auto py-20 px-4">
            <h2 className="text-2xl font-bold mb-4 text-primaryGreen flex items-center justify-center">            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-8 h-8 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
                Meet the Board
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {eBoardMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg shadow-lg min-h-[250px]">
                        <div className="w-28 h-28 bg-gray-300 rounded-full overflow-hidden mb-4">
                            <img src={member.image} className="w-full h-full object-cover" alt="Board Member" />
                        </div>
                        <h4 className="text-lg font-semibold text-primaryGreen min-h-[24px]">{member.name}</h4>
                        <p className="text-sm text-secondaryTeal font-inter min-h-[40px]">{member.title}</p>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mt-2">
                            LinkedIn
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
