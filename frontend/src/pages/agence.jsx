/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "../components/Navigation/Navbar";


const agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',















  ]
  gsap.registerPlugin(ScrollTrigger);

  //pin the image div
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
     scrollTrigger:{
      trigger: imageDivRef.current,
      start:"top 28%",
      end:"top -160%",
      pin:true,
      onUpdate:function(elem){
        const imageIndex =Math.floor(elem.progress * (imageArray.length -1))
        imageRef.current.src = imageArray[imageIndex]


      }
     }
    });
  });

  //image animation

  return (
    <div className="main mb-70 " >
      <div className="absolute top-0">
        <Navbar/>
      </div>
      
      <div className="section1 ">
        <div
          ref={imageDivRef}
          className="h-70 w-50  object-cover rounded-4xl overflow-hidden absolute top-25 left-88 "
        >
          <img
          ref={imageRef}
            className="h-full w-full"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>

        <div className="font-[font2] relative">
          <div className=" mt-[55vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[18vw]">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>
          <div className="pl-[40%]  ">
            <p className="text-6xl ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2"></div>
    </div>
  );
};

export default agence;
