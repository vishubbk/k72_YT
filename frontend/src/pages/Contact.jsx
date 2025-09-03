import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navigation/Navbar";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const scrollRef = useRef(null);
  const marqueeRefs = useRef([]); // multiple marquee refs

  // ✅ GSAP marquee rotation for each duplicate
  useGSAP(() => {
    marqueeRefs.current.forEach((el) => {
      if (el) {
        gsap.to(el, {
          rotate: 5,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
          },
        });
      }
    });
  }, []);

  // ✅ Infinite scroll logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        container.scrollTop = clientHeight;
      }
      if (scrollTop <= 0) {
        container.scrollTop = scrollHeight - 2 * clientHeight;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Content component
  const Content = (index) => (
    <>
      {/* Contact container */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <ul className="uppercase flex flex-col items-center gap-4 font-[font2] leading-[1] text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[5vw] text-center">
          <li>To talk</li>
          <li>about</li>
          <li>your</li>
          <li>project</li>
        </ul>
      </div>

      {/* marquee div with GSAP */}
      <div
        ref={(el) => (marqueeRefs.current[index] = el)}
        className="bg-yellow-300 hover:bg-white hover:text-black transition-all flex justify-center items-center text-black font-[font2] text-[6vw] sm:text-[4vw] h-20 w-full"
      >
        <Marquee speed={200}>
          <p>hello@k72.ca ❤️</p>
        </Marquee>
      </div>

      {/* follow us */}
      <div className="flex flex-col gap-6 justify-center items-center font-[font2] mt-10 mb-20 px-4">
        <div className="text-3xl sm:text-4xl md:text-5xl">
          <p>FOLLOW US</p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {["FB", "IG", "IN", "BE"].map((item, i) => (
            <div
              key={i}
              className="border-2 rounded-2xl px-6 py-2 text-2xl sm:text-3xl md:text-4xl hover:text-yellow-400 transition-all"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      {/* ✅ Navbar */}
      <div className="fixed top-0 left-0 w-full px-4 z-50">
        <Navbar />
      </div>

      {/* ✅ Infinite Scroll Container with hidden scrollbar */}
      <div
        ref={scrollRef}
        className="h-screen overflow-y-scroll no-scrollbar"
      >
        {Content(0)}
        {Content(1)}
        {Content(2)}
      </div>
    </div>
  );
};

export default Contact;
