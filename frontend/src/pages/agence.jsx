/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "../components/Navigation/Navbar";
import Marquee from "react-fast-marquee";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const ConvertBlack = useRef(null);

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

  // ✅ Image Scroll Animation
  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function () {
        gsap.to(imageDivRef.current, {
          scrollTrigger: {
            trigger: imageDivRef.current,
            start: "top 18%",
            end: "top -80%",
            pin: true,
            scrub: true,
            onUpdate: function (elem) {
              const imageIndex = Math.floor(
                elem.progress * (imageArray.length - 1)
              );
              imageRef.current.src = imageArray[imageIndex];
            },
          },
        });
      },

      "(min-width: 769px)": function () {
        gsap.to(imageDivRef.current, {
          scrollTrigger: {
            trigger: imageDivRef.current,
            start: "top 18%",
            end: "top -220%",
            pin: true,
            scrub: true,
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

  // ✅ ConvertBlack Background Animation
  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function () {
        gsap.to(ConvertBlack.current, {
          scrollTrigger: {
            trigger: ConvertBlack.current,
            start: "top -=500",
            toggleActions: "play none none reverse",
          },
          backgroundColor: "black",
          color: "white",
        });
      },

      "(min-width: 769px)": function () {
        gsap.to(ConvertBlack.current, {
          scrollTrigger: {
            trigger: ConvertBlack.current,
            start: "top -=1200",
            toggleActions: "play none none reverse",
          },
          backgroundColor: "black",
          color: "white",
          duration: 1,
        });
      },
    });
  });

  return (
    <div ref={ConvertBlack} className="main ">
      {/* Navbar */}
      <div className="absolute top-0 w-full ml-5">
        <Navbar />
      </div>

      <div className="section1">
        {/* Pinned Image */}
        <div
          ref={imageDivRef}
          className="object-cover rounded-4xl overflow-hidden absolute 
             -top-12 left-[30vw]
             w-[120px] h-[180px]   
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

      {/* O container */}
      <div className="section2  w-full font-[font2]">
        {/* section-1 */}
        <div className="flex mt-50  justify-between items-center  list-none w-[30%] ml-[19%]">
          <div className="font-semibold text-xl">
            <li className="mr-20">Expertise</li>
          </div>
          <div className="font-semibold text-xl">
            <li>Strategy</li>
            <li>Advertising</li>
            <li>Branding</li>
            <li>Design</li>
            <li>Content</li>
          </div>
        </div>

        {/* section-2 */}
        <div>
          <div className="flex justify-evenly w-[80%] m-auto mt-30   gap-30 leading-8  text-xl">
            <div>
              <p>
                Our Work_ Born in curiosity, raised by dedication and fed with a
                steady diet of creativity.
              </p>
            </div>
            <div>
              <p>
                Our Creative_ Simmering in an environment where talent can come
                to a full boil. Encouraged to become the best versions of
                ourselves.
              </p>
            </div>
            <div>
              <p>
                Our Culture_ We’re open to each other. Period. The team works
                together to create a space that makes us proud.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* animation black container */}
      <div className="p-10 font-[font2] w-full relative transition-colors duration-700">
        {/* 🔥 text in background */}
        <div className="absolute top-16 left-0 w-full z-0">
          <Marquee speed={200} gradient={false}>
            <span className="text-[10vw] text-yellow-300 font-bold tracking-widest">
              HUGO• &nbsp; HUGO• &nbsp; HUGO• &nbsp; HUGO•
            </span>
          </Marquee>
        </div>

        {/* image in front */}
        <div className="relative z-5 w-[90%] m-auto rounded-2xl  overflow-hidden shadow-xl">
          <img
            src="https://k72.ca/uploads/teamMembers/HugoJoseph_640X960-640x960.jpg"
            alt="Hugo"
            className=" w-100 m-auto object-cover"
          />
        </div>
        {/* 🔥 text in background */}
        <div className="absolute top-90 z-10 left-0 w-full ">
          <Marquee speed={200} gradient={false} direction="right">
            <span className=" tracking-widest">
              <div className="flex gap-30 justify-center items-end">
                <span className="text-[10vw]  text-yellow-300 font-bold">JOSEPH</span>
                <span className="text-white text-[2rem]">Associate Creative Director</span>
              </div>

              {/* HUGO• &nbsp; HUGO• &nbsp; HUGO• &nbsp; HUGO• */}
            </span>
          </Marquee>
        </div>
      </div>

      
    </div>
  );
};

export default Agence;
