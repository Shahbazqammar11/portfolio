import React from 'react'
import Hearo from './component/about'
import Contact from './component/contact'
import Projects from './component/projects'
import ServicesSection from './component/myservices'


export default function Homepage () {
  return (
    <div>
     
    <Hearo/>
    <ServicesSection/>
    <Projects/>
    <Contact/>
    </div>
    
  )
}

