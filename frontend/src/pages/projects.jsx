import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from '../components/Navigation/Navbar';
const Projects = () => {
  const projects = [
    'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
    'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/BEST/BEST_site_Thumbnail-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg',
    'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',




  ]

  gsap.registerPlugin(ScrollTrigger)
 
  useGSAP(() => {
    const cards = gsap.utils.toArray(".hero");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { height: 100, opacity: 0.5,  },
        {
          height: 400,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 110%",   // card jab viewport ke neeche se aayega
            end: "top -80%",     // card viewport ke beech tak aayega
            scrub: true,
             
          }
        }
      );
    });
  });


  return (
    <div className="">
      {/* navbar div */}
      <div className='absolute top-0 ml-3'>

      <Navbar/>
      </div>
       <div className='p-4'>

      <div className='pt-[45vh]'>
        <div className='font-[font2] text-[8.5vw]'>PROJECTS</div>
      </div>

      <div className="parentdiv grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {projects.map((elem, index) => (
               <div className='hero w-full h-[400px] relative group transition-all rounded-none hover:rounded-[70px] overflow-hidden'>
                 <ProjectCard key={index} image={elem} />
</div>
        ))}
      </div>
    </div>
    </div>
   
  )
}

export default Projects
