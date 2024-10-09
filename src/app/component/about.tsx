"use client";

import { client } from '@/sanity/lib/client'; // Adjust the path to your Sanity client configuration
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

// Define the About interface
interface About {
  name: string;
  profession: string;
  typewriterStrings: string[];
  introduction: string;
  imageUrl: string;
  imageAlt: string;
  resumeUrl: string;
}

const Hearo = () => {
  // State to hold the about data
  const [aboutData, setAboutData] = useState<About | null>(null);

  // Fetch the about data from Sanity using useEffect
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await client.fetch<About>(`
          *[_type == "about"]{
            name,
            profession,
            typewriterStrings,
            introduction,
            "imageUrl": image.asset->url, // Fetch the URL of the image
            imageAlt,
            "resumeUrl": resume.asset->url // Fetch the URL of the resume file
          }[0] // Fetch only the first document
        `);
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  // Display loading message while data is being fetched
  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div id='About'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am a
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: aboutData.typewriterStrings,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className='w-[100px] h-[2px] bg-blue-700'></div>
            <p className="mb-8 leading-relaxed">
              {aboutData.introduction}
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="#contact">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Contact
                </button>
              </Link>
              

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src={aboutData.imageUrl}
              alt={aboutData.imageAlt}
              height={300}
              width={300}
              className='object-cover object-center rounded mx-auto w-[20rem] h-[22rem]'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hearo;
