import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsGrid = () => {
  const projects = [
    {
      title: "Card Craft",
      description: "AI-powered web application that uses ChatGPT to dynamically generate flashcards from PDF notes and study guides",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&h=500",
      tags: ["React", "ChatGPT API", "PDF Processing"],
      role: "Front-end Developer",
      metrics: { stars: 24, forks: 8 },
      completion: 100,
      lastUpdated: "2024-03-15"
    },
    {
      title: "Close With Sandra",
      description: "Comprehensive real estate website showcasing property listings, client testimonials, and resources for home buyers and sellers",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=500",
      tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      role: "Full Stack Developer",
      metrics: { stars: 15, forks: 5 },
      completion: 100,
      lastUpdated: "2024-02-20"
    },
    {
      title: "Flexie Mobile App APIs",
      description: "Implemented various APIs using MVC framework for the Flexie mobile app, ensuring optimal performance and easy integration",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&h=500",
      tags: ["Node.js", "Jest", "RESTful API"],
      role: "Backend Developer",
      metrics: { stars: 32, forks: 12 },
      completion: 95,
      lastUpdated: "2024-03-01"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="max-w-sm mx-auto border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <div className="text-xs text-blue-600 mb-2">{project.role}</div>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                {/* Add more content here if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;