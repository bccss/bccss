import about_club_photo from '/board/about_club_photo.jpg';
import '../index.css';
import boardMembers from '../assets/board_members.json';
import { ImageCarousel } from "../../src/components/ImageCarousel";

type BoardMember = {
    name: string;
    title: string;
    linkedin: string;
    github: string;
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
            <div className="flex flex-wrap justify-center gap-8 my-12 px-4">
                <div className="group p-6 rounded-xl text-center w-44 md:w-52 text-secondaryTeal border-2 border-teal-300 bg-transparent hover:bg-teal-500 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <h4 className="text-4xl font-bold group-hover:!text-black mb-2">1000+</h4>
                    <p className="text-xl font-inter group-hover:!text-black">members</p>
                </div>
                <div className="group p-6 rounded-xl text-center w-44 md:w-52 text-secondaryTeal border-2 border-teal-300 bg-transparent hover:bg-teal-500 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <h4 className="text-4xl font-bold group-hover:!text-black mb-2">34</h4>
                    <p className="text-xl font-inter group-hover:!text-black">events hosted</p>
                </div>
            </div>

            {/* Image Carousel */}
            <div className="my-24 max-w-screen-lg mx-auto">
                <ImageCarousel />
            </div>

            {/* EBoard */}
            <div className="max-w-screen-lg mx-auto py-20 px-4">
                <h2 className="text-3xl font-bold mb-8 text-primaryGreen flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-8 h-8 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    Meet the Board
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {eBoardMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden mb-4 border-2 border-teal-300">
                                <img src={member.image} className="w-full h-full object-cover" alt={`${member.name} - ${member.title}`} />
                            </div>
                            <h4 className="text-xl font-semibold text-primaryGreen mb-2">{member.name}</h4>
                            <p className="text-md text-secondaryTeal font-inter mb-4">{member.title}</p>
                            <div className="flex space-x-4 mt-2">
                                <a 
                                    href={member.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-secondaryTeal hover:text-teal-400 transition-colors duration-300"
                                    aria-label={`${member.name}'s LinkedIn`}
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a 
                                    href={member.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-secondaryTeal hover:text-teal-400 transition-colors duration-300"
                                    aria-label={`${member.name}'s GitHub`}
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
