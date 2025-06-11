import about_club_photo from '/board/about_club_photo.jpg';
import '../index.css';
import boardMembers from '../assets/board_members.json';
import { ImageCarousel } from "../../src/components/ImageCarousel";
import { useEffect } from 'react'
import { Footer } from '../components/Footer';

type BoardMember = {
    name: string;
    title: string;
    linkedin: string;
    github: string;
    image: string;
};

const eBoardMembers: BoardMember[] = boardMembers;

export const About = () => {
    useEffect(() => {
        document.title = 'BCCSS | About'
    }, [])
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-surface-black via-surface-gray to-surface-black text-text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-green/10 to-primary-teal/10 opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-header font-bold">
                            <span className="text-gradient-primary">About</span> BCCSS
                        </h1>
                        <p className="text-lg sm:text-xl text-text-gray max-w-3xl mx-auto leading-relaxed">
                            Empowering the next generation of technologists at Boston College
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="card-modern rounded-2xl p-8 sm:p-12">
                    <div className="flex items-center mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-green to-primary-teal flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-surface-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-header font-bold text-gradient-primary">
                    Our Mission
                </h2>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-text-gray leading-relaxed">
                                The Boston College Computer Science Society (BCCSS) is dedicated to helping students interested in technology and entrepreneurship achieve their goals. We host events such as guest lectures, workshops, hackathons, collaborative projects, and more.
                        </p>
                            <p className="text-lg text-text-gray leading-relaxed">
                            We work closely with the Computer Science department at BC to create a better environment for students to learn and find new opportunities. Further, we collaborate with many departments and clubs in the Carroll School of Management at BC to encourage entrepreneurship.
                        </p>
                            <div className="flex flex-wrap gap-3 pt-4">
                                <span className="px-4 py-2 bg-primary-green/10 text-primary-green rounded-full text-sm font-medium border border-primary-green/20">
                                    Technology
                                </span>
                                <span className="px-4 py-2 bg-primary-teal/10 text-primary-teal rounded-full text-sm font-medium border border-primary-teal/20">
                                    Entrepreneurship
                                </span>
                                <span className="px-4 py-2 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium border border-accent-purple/20">
                                    Innovation
                                </span>
                            </div>
                    </div>
                        
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-green to-primary-teal rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                    <img
                        src={about_club_photo}
                                className="relative w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                        alt="BCCSS Club Photo"
                    />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-header font-bold text-gradient-secondary mb-4">
                        Our Impact
                    </h2>
                    <p className="text-lg text-text-gray">Making a difference in the BC tech community</p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { number: "500+", label: "Members", color: "primary-green", icon: "👥" },
                        { number: "30+", label: "Events Hosted", color: "primary-teal", icon: "🎯" },
                        { number: "9", label: "24-hour Hackathons", color: "accent-purple", icon: "⚡" },
                        { number: "$5k+", label: "In Prizes Given", color: "accent-pink", icon: "🏆" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="group card-modern rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-slideUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                                {stat.icon}
                            </div>
                            <div className={`text-3xl sm:text-4xl font-bold mb-2 text-${stat.color}`}>
                                {stat.number}
                            </div>
                            <div className="text-text-gray font-medium">
                                {stat.label}
                            </div>
                    </div>
                    ))}
                </div>
                    </div>

            {/* Image Carousel Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-header font-bold text-gradient-primary mb-4">
                        Our Events
                    </h2>
                    <p className="text-lg text-text-gray">Capturing moments from our amazing community</p>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-green/20 to-primary-teal/20 rounded-3xl blur-xl opacity-30"></div>
                    <div className="relative">
                        <ImageCarousel />
                    </div>
                </div>
            </div>

            {/* Board Members Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent-purple to-accent-pink flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-surface-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-header font-bold text-gradient-secondary">
                    Meet the Board
                </h2>
                    </div>
                    <p className="text-lg text-text-gray">The passionate leaders driving our mission forward</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {eBoardMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group card-modern rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 animate-slideUp"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="relative mb-6">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary-green to-primary-teal rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-surface-border">
                                    <img 
                                        src={member.image} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                                        alt={`${member.name} - ${member.title}`} 
                                    />
                                </div>
                            </div>
                            
                            <h4 className="text-lg font-header font-semibold text-text-white mb-2">
                                {member.name}
                            </h4>
                            <p className="text-sm text-primary-green font-medium mb-4">
                                {member.title}
                            </p>
                            
                            <div className="flex justify-center space-x-4">
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-surface-gray hover:bg-primary-teal/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group/link"
                                    aria-label={`${member.name}'s LinkedIn`}
                                >
                                    <svg className="w-5 h-5 text-text-gray group-hover/link:text-primary-teal transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-surface-gray hover:bg-primary-green/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group/link"
                                    aria-label={`${member.name}'s GitHub`}
                                >
                                    <svg className="w-5 h-5 text-text-gray group-hover/link:text-primary-green transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer/>
        </div>
    );
};
