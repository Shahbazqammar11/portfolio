"use client";
import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';

interface Project {
  _id: string;
  title: string;
  description: string;
  link: string;
  githubLink: string;
  technologies: string[];
  imageUrl: string;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetch the projects data from Sanity
    const fetchProjects = async () => {
      try {
        const data = await client.fetch<Project[]>(`*[_type == "project"]{
          _id,
          title,
          description,
          link,
          githubLink,
          technologies,
          "imageUrl": image.asset->url // Fetch the URL of the project image
        }`);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div id="Projects" className="py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">
          My <span className="text-blue-500">Projects</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project._id} className="bg-white p-6 rounded-lg shadow-lg text-center">
              {project.imageUrl && (
                <div className="mb-4">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
                </div>
              )}
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center space-x-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
