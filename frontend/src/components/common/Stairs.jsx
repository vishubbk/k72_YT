import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

export const Stairs = () => {
  const currentPath = useLocation().pathname;

  useGSAP(() => {
    // Reset loader before animating
    gsap.set(".loader-wrapper", { display: "flex", zIndex: 20 });
    gsap.set(".main-container", { height: "100%", y: "0%" });

    const tl = gsap.timeline();

    tl.to(".main-container", {
      height: "0%",
      duration: 0.5,
      stagger: { amount: -0.3 },
    })
      .to(".main-container", {
        y: "100%",
        duration: 0.5,
        stagger: { amount: -0.2 },
      })
      .to(".loader-wrapper", {
        display: "none",
        zIndex: 0,
      });
  }, [currentPath]);

  return (
    <div className="loader-wrapper fixed top-0 left-0 w-full h-screen flex z-20">
      <div className="main-container h-full w-1/5 bg-black"></div>
      <div className="main-container h-full w-1/5 bg-black"></div>
      <div className="main-container h-full w-1/5 bg-black"></div>
      <div className="main-container h-full w-1/5 bg-black"></div>
      <div className="main-container h-full w-1/5 bg-black"></div>
    </div>
  );
};

export default Stairs;
