"use client";

import React from 'react';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';
import { projects } from '@/lib/projectsData';

const ProjectsCircularGallery = () => {
    // Transform projects data to gallery format
    const galleryData: GalleryItem[] = projects.map((project) => ({
        common: project.title,
        binomial: project.tagline,
        photo: {
            url: project.image || '/pics/DoccuQuery.png',
            text: project.title,
            pos: 'center',
            by: 'Satvik Sharma',
        },
    }));

    return (
        <div className="w-full bg-black text-white" style={{ height: '400vh' }}>
            <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
                <div className="text-center mb-8 absolute top-16 z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-gradient">Projects Gallery</span>
                    </h1>
                    <p className="text-gray-400 text-lg">Scroll to rotate • Click to explore</p>
                </div>
                <div className="w-full h-full">
                    <CircularGallery items={galleryData} radius={500} autoRotateSpeed={0.015} />
                </div>
            </div>
        </div>
    );
};

export default ProjectsCircularGallery;
