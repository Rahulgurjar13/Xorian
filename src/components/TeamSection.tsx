import { Linkedin, Twitter } from 'lucide-react';

const team = [
    {
        name: 'Vishal Yadav',
        role: 'Founder & CEO',
        description: 'Visionary leader driving the mission to revolutionize India\'s defense technology landscape.',
        // Replace with your actual photo URL
        image: 'https://via.placeholder.com/300x300?text=VY',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'Rahul Gurjar',
        role: 'Co-Founder & COO',
        description: 'Operations strategist ensuring seamless execution and scaling of defense solutions.',
        // Replace with your actual photo URL
        image: 'https://via.placeholder.com/300x300?text=RG',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'Naitik Tiwari',
        role: 'Co-Founder & CTO',
        description: 'Technical architect leading innovation in autonomous systems and flight control technology.',
        // Replace with your actual photo URL
        image: 'https://via.placeholder.com/300x300?text=NT',
        linkedin: '#',
        twitter: '#',
    },
];

const TeamSection = () => {
    return (
        <section id="team" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 tech-grid opacity-10" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="h-px w-8 sm:w-12 bg-foreground" />
                        <span className="text-foreground font-tech font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase">
                            Leadership
                        </span>
                        <div className="h-px w-8 sm:w-12 bg-foreground" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 text-foreground leading-tight">
                        Meet Our
                        <span className="text-gradient block mt-2">Founders</span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground px-4">
                        A passionate team of innovators committed to building India's next-generation
                        defense technology from the ground up.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {team.map((member, index) => (
                        <div
                            key={member.name}
                            className="group relative bg-card/50 backdrop-blur-xl border border-border/30 hover:border-foreground/30 transition-all duration-500 hover-card-smooth overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Corner brackets */}
                            <div className="corner-tl absolute top-0 left-0 opacity-0 group-hover:opacity-100 pointer-events-none z-20" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)' }}>
                                <div className="bracket-line w-6 h-[1px] origin-left scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0ms' }} />
                                <div className="bracket-line w-[1px] h-6 origin-top scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0ms' }} />
                            </div>
                            <div className="corner-tr absolute top-0 right-0 opacity-0 group-hover:opacity-100 pointer-events-none z-20 flex flex-col items-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }}>
                                <div className="bracket-line w-6 h-[1px] origin-right scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }} />
                                <div className="bracket-line w-[1px] h-6 origin-top scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '50ms' }} />
                            </div>
                            <div className="corner-bl absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 pointer-events-none z-20 flex flex-col justify-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }}>
                                <div className="bracket-line w-[1px] h-6 origin-bottom scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }} />
                                <div className="bracket-line w-6 h-[1px] origin-left scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '100ms' }} />
                            </div>
                            <div className="corner-br absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 pointer-events-none z-20 flex flex-col justify-end items-end" style={{ transition: 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }}>
                                <div className="bracket-line w-[1px] h-6 origin-bottom scale-y-0 group-hover:scale-y-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }} />
                                <div className="bracket-line w-6 h-[1px] origin-right scale-x-0 group-hover:scale-x-100" style={{ transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '150ms' }} />
                            </div>

                            {/* Photo */}
                            <div className="relative h-64 sm:h-72 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-6 sm:p-8 -mt-12">
                                {/* Name & Role */}
                                <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-tech tracking-wider text-foreground/70 mb-4">
                                    {member.role}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    {member.description}
                                </p>

                                {/* Social Links */}
                                <div className="flex items-center gap-3">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={member.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
