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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod assumenda veniam ipsam nostrum harum a velit cumque incidunt nihil sunt. Soluta quaerat assumenda temporibus nesciunt esse architecto minus saepe itaque ipsum, recusandae voluptatibus eligendi, fugiat, culpa a qui tempore veritatis. Quae nam dolores, quidem earum sint totam commodi impedit aut temporibus incidunt? Mollitia assumenda a ut excepturi saepe consectetur vero ipsum, in soluta aliquam enim praesentium quis odio, et officia laborum molestias debitis ad delectus labore, explicabo facilis? Impedit reprehenderit voluptate, facilis laudantium debitis magnam tempore doloribus delectus atque magni recusandae quis provident natus animi ex modi vero officiis similique perspiciatis doloremque! Alias ratione omnis culpa quaerat accusantium? Laborum consequuntur dolorum nam, aspernatur suscipit mollitia quo. Perspiciatis, sapiente pariatur voluptatum temporibus beatae ipsum, optio vero error illum neque praesentium, quo in veritatis rem aperiam quis distinctio. Provident similique quis, possimus a numquam amet dolores aspernatur quidem deleniti sequi tempora veritatis molestias reiciendis, voluptatibus laudantium eum laboriosam consequatur necessitatibus culpa, quos aperiam quasi tempore. Aut omnis molestiae deserunt libero, corporis odit reprehenderit consequuntur vero facilis inventore sit nihil laboriosam nam obcaecati itaque commodi. Atque veritatis expedita tempora aut rem repellendus nulla labore molestiae. Repellendus, ut eveniet provident accusamus quaerat inventore? Ad quo inventore corporis. Rem doloremque quidem minus impedit. Eius at voluptas cumque totam ex, ea, sed deserunt tenetur velit excepturi consectetur libero voluptates rerum itaque ab nesciunt fugiat sint alias, ad dolorum consequatur! Blanditiis non quisquam fugiat dicta, voluptatum, magnam officiis voluptatem quaerat sit illum animi odio aperiam modi totam ipsum ipsa est molestias ea, architecto deserunt? Ullam, labore molestiae qui at voluptatem nesciunt doloribus asperiores officiis quis placeat assumenda necessitatibus atque reiciendis vero vel aliquam soluta, quibusdam beatae cumque inventore maiores, temporibus aperiam. Maxime architecto ad consectetur aspernatur distinctio animi nulla labore vel doloremque earum cum quis obcaecati in asperiores eaque ut quam perferendis quos non dolores libero quidem sequi, explicabo nostrum. Necessitatibus praesentium deserunt quis possimus, reprehenderit quisquam atque sunt odio, commodi facere voluptate odit aliquid dolorem! Voluptatem amet, neque enim incidunt laudantium quod non placeat sapiente! Fugiat possimus cupiditate totam quo neque corporis doloremque quod accusantium animi! Inventore, incidunt fugiat. Cumque reprehenderit dicta dolorem facilis neque illum sapiente ullam quibusdam eligendi. Veniam iusto fuga temporibus odit aliquid, sapiente maxime dolores ad consequatur ut! Aperiam nostrum est, accusantium consequatur fuga earum deleniti eligendi fugiat eius deserunt consectetur error iusto excepturi amet asperiores obcaecati veniam totam. Distinctio commodi unde nihil soluta placeat excepturi dicta magni temporibus mollitia reiciendis vero recusandae maiores fugiat maxime laborum sequi eligendi, explicabo, sed perferendis impedit dolor modi accusamus? Aut modi, accusamus quas deleniti magni alias molestiae nostrum deserunt excepturi sed! Dolor earum nisi veniam quia, optio accusamus ea cum vel officiis alias nam nostrum sint magnam fuga. Eos cum illum eius quas asperiores provident, aliquam atque exercitationem iure vel voluptatem recusandae qui aut quae necessitatibus, commodi odio molestiae natus, ipsa quasi. Sunt quas, facilis molestiae animi laborum facere consequatur numquam quo deserunt nostrum dolore amet quasi, tempore quis obcaecati cupiditate tempora, nulla voluptatibus rem.
      </div>
    </div>
  );
};

export default Agence;
