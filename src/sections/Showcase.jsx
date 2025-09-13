import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ShowcaseSection = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state for all cards
    gsap.set(".project-card", {
      opacity: 0,
      y: 80,
      scale: 0.95,
    });

    // Create timeline for sequential card animation
    let scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      },
    });

    // Get all project cards
    const cards = gsap.utils.toArray(".project-card");

    // Animate each card one by one
    cards.forEach((card, index) => {
      scrollTimeline
        .to(
          card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          index * 0.2
        ) // Stagger delay of 0.2 seconds between each card

        // Animate card content after card appears
        .from(
          card.querySelectorAll(".showcase-title, .bottom-title"),
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",
          },
          `>-0.4`
        ) // Start 0.4 seconds before previous animation ends

        .from(
          card.querySelectorAll(".showcase-desc, .bottom-desc"),
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
          },
          `>-0.3`
        )

        .from(
          card.querySelectorAll(".showcase-stack, .bottom-stack"),
          {
            opacity: 0,
            y: 15,
            duration: 0.4,
            ease: "power2.out",
          },
          `>-0.2`
        )

        // Animate tech stack badges with stagger
        .from(
          card.querySelectorAll(".showcase-stack span, .bottom-stack span"),
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "back.out(1.7)",
            stagger: 0.1,
          },
          `>-0.2`
        );
    });
  }, []);

  return (
    <div
      id="work"
      className="w-full mt-10 px-5 md:px-20 md:py-10 flex items-center justify-center"
    >
      <div className="w-full p-5 mx-auto">
        {/* Top section */}
        <div className="grid md:grid-cols-12 md:gap-6 gap-4 md:mb-6 mb-4">
          <a
            href="https://jannoelpaed.vercel.app/"
            className="md:col-span-4 group project-card"
          >
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:bg-zinc-700/50 hover:border-zinc-600/50 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src="images/petition.png"
                  alt="Student Admin Petition System"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
                />

                <div className="space-y-4 mt-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 showcase-title">
                    Student / Admin Petition System
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 showcase-desc">
                    A comprehensive digital platform streamlining the petition
                    process between students and administrators with real-time
                    tracking.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 showcase-stack">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-lg border border-green-500/30">
                    MongoDB
                  </span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-lg border border-red-500/30">
                    Express
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-lg border border-blue-500/30">
                    React
                  </span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-lg border border-green-500/30">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://mojito-website-pexs3h5gj-jnpaeds-projects-63050fe3.vercel.app"
            className="md:col-span-8 group project-card"
          >
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:bg-zinc-700/50 hover:border-zinc-600/50 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src="images/Mojito.png"
                  alt="Mojito Website"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
                />

                <div className="space-y-4 mt-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 showcase-title">
                    Mojito Website
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 showcase-desc">
                    An elegant and interactive website showcasing modern web
                    design principles with smooth animations and responsive
                    layouts.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 showcase-stack">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-lg border border-blue-500/30">
                    React
                  </span>
                  <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-lg border border-teal-500/30">
                    Tailwind CSS
                  </span>
                  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-lg border border-emerald-500/30">
                    GSAP Animation
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Bottom section */}
        <a
          href="https://petition-system-in-school-nnoc.vercel.app/login"
          className="grid md:grid-cols-12 md:gap-6 gap-4 md:mb-6"
        >
          <div className="md:col-span-8 group project-card">
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:bg-zinc-700/50 hover:border-zinc-600/50 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src="images/polling.png"
                  alt="Polling App"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
                />

                <div className="space-y-4 mt-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 bottom-title">
                    Polling App
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 bottom-desc">
                    A real-time polling application enabling users to create,
                    participate in, and analyze polls with live results and
                    analytics.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 bottom-stack">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-lg border border-green-500/30">
                    MongoDB
                  </span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-lg border border-red-500/30">
                    Express
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-lg border border-blue-500/30">
                    React
                  </span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-lg border border-green-500/30">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 group project-card">
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:bg-zinc-700/50 hover:border-zinc-600/50 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src="images/donut.png"
                  alt="Donut Website"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
                />

                <div className="space-y-4 mt-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 bottom-title">
                    Donut Website
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 bottom-desc">
                    A deliciously designed website featuring interactive
                    elements and smooth scrolling animations to showcase
                    products.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 bottom-stack">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-lg border border-blue-500/30">
                    React
                  </span>
                  <span className="px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-lg border border-teal-500/30">
                    Tailwind CSS
                  </span>
                  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-lg border border-emerald-500/30">
                    GSAP Animation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ShowcaseSection;
