/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "../components/Navigation/Navbar";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    


  ];

  gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    // ✅ Mobile screens
    "(max-width: 768px)": function () {
      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: "top 18%",
          end: "top -80%",
          pin: true,
          onUpdate: function (elem) {
            const imageIndex = Math.floor(
              elem.progress * (imageArray.length - 1)
            );
            imageRef.current.src = imageArray[imageIndex];
          },
        },
      });
    },

    // ✅ Laptop / Desktop
    "(min-width: 769px)": function () {
      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: "top 18%", // 👈 thoda adjust karke laptop ke liye
          end: "top -220%",
          pin: true,
          onUpdate: function (elem) {
            const imageIndex = Math.floor(
              elem.progress * (imageArray.length - 1)
            );
            imageRef.current.src = imageArray[imageIndex];
          },
        },
      });
    },
  });
});


  return (
    <div className="main mb-70 ">
      {/* Navbar */}
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>

      <div className="section1">
        {/* Pinned Image */}
      <div
  ref={imageDivRef}
  className="object-cover rounded-4xl overflow-hidden absolute 
             -top-12 left-[30vw]
             w-[120px] h-[180px]   /* default mobile */
             sm:w-[200px] sm:h-[280px] 
             md:w-[250px] md:h-[350px] 
             lg:w-[184px] lg:h-[246px]"
>
  <img
    ref={imageRef}
    className="h-full w-full object-cover"
    src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
    alt=""
  />
</div>


        {/* Text */}
        <div className="font-[font2] relative">
          <div className="mt-[55vh]">
            <h1 className="text-[19vw] md:text-[14vw] lg:text-[10vw] text-center uppercase leading-[18vw] md:leading-[14vw] lg:leading-[10vw]">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>
          <div className="pl-[10%] md:pl-[25%] lg:pl-[40%]">
            <p className="text-base sm:text-lg md:text-2xl lg:text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we
              make sure creativity crowds out ego from every corner. A brand is
              a living thing, with values, a personality and a story. If we
              ignore that, we can achieve short-term success, but not influence
              that goes the distance. We bring that perspective to every brand
              story we help tell.
            </p>
          </div>
        </div>
      </div>

      <div className="section2 bg-yellow-500"> 
      </div>
    </div>
  );
};

export default Agence;
