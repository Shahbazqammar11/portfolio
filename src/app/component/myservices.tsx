"use client"
import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';


interface Skill {
  _id: string;
  name: string;
  iconUrl: string;
}

const ServicesSection = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    // Fetch the skills data from Sanity
    const fetchSkills = async () => {
      try {
        const data = await client.fetch<Skill[]>(`*[_type == "skill"]{
          _id,
          name,
          "iconUrl": icon.asset->url // Fetch the URL of the icon image
        }`);
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <>
    <div id="Myservices">
      <div className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">
            My <span className="text-blue-500">Services</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill._id} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="mb-4">
                  <img src={skill.iconUrl} alt={skill.name} className="w-16 h-16 mx-auto" />
                </div>
                <h4 className="text-xl font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicesSection;
