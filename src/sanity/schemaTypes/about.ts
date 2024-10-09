import { defineType } from 'sanity';

// schemas/about.js
export const about = defineType( {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the person',
    },
    {
      name: 'profession',
      title: 'Profession',
      type: 'string',
      description: 'Profession or main title for the person',
    },
    {
      name: 'typewriterStrings',
      title: 'Typewriter Strings',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Strings to be displayed in the typewriter effect',
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      description: 'Brief introduction or bio of the person',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping and focusing
      },
      description: 'Image of the person',
    },
    {
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      description: 'Alternative text for the image',
    },
   
    {
      name: 'resume',
      title: 'resume',
      type: 'file',
      
    },
  ],
}
);

