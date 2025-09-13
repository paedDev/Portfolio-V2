import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);
const Footer = () => {
  const icons = [
    {
      logo: <FaGithub />,
      link: "https://github.com/paedDev",
    },
    {
      logo: <FaFacebook />,
      link: "https://www.facebook.com/jannoel.paed/",
    },
    {
      logo: <CiLinkedin />,
      link: "https://www.linkedin.com/in/jan-noel-s-paed-paed-115358347/",
    },
    {
      logo: <FaInstagramSquare />,
    },
  ];
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".icons",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: -0,
        ease: "power2.inOut",
        stagger: 0.02,
      }
    );
  }, []);
  return (
    <section id="footer" className="w-full h-40 lg:p-6">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex lg:flex-row flex-col space-y-2 lg:space-y-0 items-center justify-between text-gray-400">
          <h1>Visit my Github</h1>

          <div className=" flex justify-between items-center space-x-4 shadow-2xl">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="bg-gray-700 p-4 rounded-xl text-white-50 icons "
              >
                <a href={icon.link} className="text-xl ">
                  {icon.logo}
                </a>
              </div>
            ))}
          </div>

          <div>
            <h2> &#9400; Jan Noel S. Paed.All rights reserved.</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
