"use client";

import React, { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { projects } from '@/lib/projectsData';

const FeaturedProjectScroll = () => {
    const featuredProject = projects.find(p => p.featured) || projects[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-screen'>
            <ScrollExpandMedia
                mediaType='image'
                mediaSrc={featuredProject.image || '/pics/DoccuQuery.png'}
                bgImageSrc='https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop&q=80'
                title={featuredProject.title}
                date='Featured Project'
                scrollToExpand='Scroll to Expand'
                textBlend
            >
                <div className='max-w-4xl mx-auto text-white'>
                    <h2 className='text-3xl font-bold mb-6'>{featuredProject.tagline}</h2>

                    <div className='space-y-6'>
                        <div>
                            <h3 className='text-xl font-semibold text-primary mb-2'>Problem</h3>
                            <p className='text-lg text-gray-300'>{featuredProject.problem}</p>
                        </div>

                        <div>
                            <h3 className='text-xl font-semibold text-primary mb-2'>Approach</h3>
                            <p className='text-lg text-gray-300'>{featuredProject.approach}</p>
                        </div>

                        <div>
                            <h3 className='text-xl font-semibold text-primary mb-2'>Impact</h3>
                            <p className='text-lg text-gray-300'>{featuredProject.impact}</p>
                        </div>

                        <div>
                            <h3 className='text-xl font-semibold text-primary mb-3'>Tech Stack</h3>
                            <div className='flex flex-wrap gap-3'>
                                {featuredProject.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className='px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-sm'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className='flex gap-4 pt-6'>
                            {featuredProject.live && (
                                <a
                                    href={featuredProject.live}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold'
                                >
                                    View Live Demo
                                </a>
                            )}
                            {featuredProject.github && (
                                <a
                                    href={featuredProject.github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold'
                                >
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </ScrollExpandMedia>
        </div>
    );
};

export default FeaturedProjectScroll;
