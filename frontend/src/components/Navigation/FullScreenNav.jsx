import React, { useEffect, useRef, useContext } from "react";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";
import NavContext from "../../context/NavContext";
import gsap from "gsap";
import { Link } from "react-router-dom";

const FullScreenNav = () => {
  const { fullScreenNav, setFullScreenNav } = useContext(NavContext);
  const navRef = useRef(null);

  useEffect(() => {
    const links = navRef.current.querySelectorAll(".stair"); // sab link divs ko target
    if (fullScreenNav) {
      gsap.set(navRef.current, { display: "block" });

      const tl = gsap.timeline();
      tl.fromTo(
        navRef.current,
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      ).fromTo(
        links,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15, // stairs effect
          ease: "power3.out",
        },
        "-=0.3"
      );
    } else {
      const links = navRef.current.querySelectorAll(".stair");
      const tl = gsap.timeline({
        onComplete: () => gsap.set(navRef.current, { display: "none" }),
      });

      tl.to(links, {
        y: 100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.in",
      }).to(navRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
      });
    }
  }, [fullScreenNav]);

  return (
    <div
      id="fullscreenNav"
      ref={navRef}
      className="h-screen w-full font-[font2] bg-black text-white fixed top-0 left-0 z-100 hidden"
    >
      {/* NAVBAR DIV */}
      <div className="w-full">
        <div className="fixed z-50 flex justify-between w-screen">
          <Link to={"/"}>
          <div className="left mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="107"
              height="47"
              viewBox="0 0 103 44"
            >
              <path d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.2594819e-14 L35.1441047,-1.2594819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000225366492 L8.83414254,25.3432589 L18.4876971,25.3432589 L29.5733875,0.000225366492 L20.0019577,0.000225366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8952589 L102.80937,16.8952589 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.25398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.25398043e-14,0.0057591623 L-1.25398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
          </div>
          </Link>
          


          <button
            onClick={() => {
              setFullScreenNav(false);
            }}
          >
            <div className="right cursor-pointer h-22 mt-3 relative w-[16vw] overflow-hidden group">
              {/* X Cut */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <span className="absolute left-0 top-1/2 w-full h-[2px] bg-white rotate-45 origin-center transition-colors duration-250 group-hover:bg-[#c3fd50]"></span>
                  <span className="absolute left-0 top-1/2 w-full h-[2px] bg-white -rotate-45 origin-center transition-colors duration-250 group-hover:bg-[#c3fd50]"></span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* ALL LINKS */}
      <div onClick={()=>{setFullScreenNav(false)}} id="All-Links" className="absolute top-[14vh] w-full">
        <div className="w-screen h-0.5 bg-[#836060]"></div>

        {/* FIRST LINK */}
        <Link to={"/Works"}>
          <div className="FirstLink stair relative group hover:bg-[#D3FD50] mt-0.5 transition-all duration-250 hover:text-black flex font-bold m-auto text-[8vw] gap-5 h-[20vh] bg-black w-full justify-center items-center overflow-hidden">
            <div className="flex absolute gap-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-5">
              <h1>WORK</h1>
            </div>
            <Marquee
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-20 justify-center"
              gradient={false}
              speed={200}
            >
              <img
                className="h-25  rounded-full overflow-hidden"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className="text-black text-[8vw] mx-10">SEE EVERYTHING</h2>
            </Marquee>
          </div>
        </Link>
        <div className="w-full h-0.5 bg-[#836060]"></div>

        {/* SECOND-LINK */}
        <Link to={"/Agency"}>
          <div className="SecondLink relative group hover:bg-[#D3FD50] mt-0.5 transition-all duration-250 hover:text-black flex font-bold m-auto text-[8vw] gap-5 h-[20vh] bg-black w-full justify-center items-center overflow-hidden">
            <div className="flex absolute gap-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-5">
              <h1>AGENCE</h1>
            </div>

            <Marquee
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-250 translate-x-10 group-hover:translate-y-0 flex items-center justify-center"
              gradient={false}
              speed={200}
            >
              <img
                className="h-25 rounded-full"
                src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg"
                alt=""
              />
              <h2 className="text-black text-[8vw] mx-10">KNOW US</h2>
              <img
                className="h-25 rounded-full"
                src="https://k72.ca/uploads/teamMembers/Arnaud_640X290-640x290.jpg"
                alt=""
              />
              <h2 className="text-black text-[8vw] mx-10">KNOW US</h2>
            </Marquee>
          </div>
        </Link>
        <div className="w-full h-0.5 bg-[#836060]"></div>

        {/* THIRD LINK */}
        <Link to={"/Contact"}>
          <div className="ThirdLink relative group hover:bg-[#D3FD50] mt-0.5 transition-all duration-250 hover:text-black flex font-bold m-auto text-[8vw] gap-5 h-[20vh] bg-black w-full justify-center items-center overflow-hidden">
            <div className="flex absolute gap-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-5">
              <h1>CONTACT</h1>
            </div>

            <Marquee
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-250 translate-x-10 group-hover:translate-y-0 flex items-center justify-center"
              gradient={false}
              speed={200}
            >
              <p>🖤</p>
              <h2 className="text-black text-[8vw] mx-10">SEND US A FAX</h2>
              <p>🖤</p>
              <h2 className="text-black text-[8vw] mx-10">SEND US A FAX</h2>
            </Marquee>
          </div>
        </Link>
        <div className="w-full h-0.5 bg-[#836060]"></div>

        {/* FOURTH LINK */}
        <Link to={"/Blogs"}>
          <div className="FourthLink relative group hover:bg-[#D3FD50] mt-0.5 transition-all duration-250 hover:text-black flex font-bold m-auto text-[8vw] gap-5 h-[20vh] bg-black w-full justify-center items-center overflow-hidden">
            <div className="flex absolute gap-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-5">
              <h1>BLOG</h1>
            </div>

            <Marquee
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-250 gap-20 translate-x-10 group-hover:translate-y-0 flex items-center justify-center"
              gradient={false}
              speed={200}
            >
              <img
                className="h-25 rounded-full"
                src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                alt=""
              />
              <h2 className="text-black text-[8vw] mx-10">READ ARTICLES</h2>
              <img
                className="h-25 rounded-full"
                src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                alt=""
              />
              <h2 className="text-black text-[8vw] mx-10">READ ARTICLES</h2>
            </Marquee>
          </div>
        </Link>

        <div className="w-full h-0.5 my-2 bg-[#836060]"></div>
      </div>
    </div>
  );
};

export default FullScreenNav;
