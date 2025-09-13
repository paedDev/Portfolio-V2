import React, { useRef, useState } from "react";
import IphoneCanvas from "../components/Iphone Model/IphoneCanvas";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);
const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // service_spx180v
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      toast.success(
        "🎉 Message sent successfully! I'll get back to you soon.",
        {
          position: "center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "white",
        }
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("EmailJs Error", error);
      toast.error(
        "😔 Oops! Something went wrong. Please try again or contact me directly.",
        {
          position: "center",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "white",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  useGSAP(() => {
    let split = SplitText.create(".tech-title", {
      type: "chars",
      autoSplit: true,
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
    tl.fromTo(
      split.chars,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.05,
        duration: 0.2,
        autoAlpha: 0,
      }
    )
      .fromTo(
        ".contact",
        {
          opacity: 0,
        },
        {
          opacity: 1,

          ease: "power2.inOut",
        }
      )
      .fromTo(
        ".iphone",
        {
          opacity: 0,
        },
        {
          opacity: 1,

          ease: "power2.inOut",
        }
      );
  }, []);
  return (
    <section
      id="contact"
      className="w-full min-h-screen overflow-hidden bg-zinc-850/50 lg:px-6 px-0 "
    >
      <div className="flex flex-col items-center justify-center space-y-8 mb-12 pt-16">
        <h1 className="px-4 py-2 bg-gray-800 text-lg rounded-xl">
          📩 Contact Information
        </h1>
        <h2 className=" tech-title text-4xl lg:text-6xl font-bold tracking-wide">
          Get in Touch - Let's Connect
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col items-center p-10 gap-8 max-w-8xl mx-auto">
        {/* left section */}
        <div className="contact w-full lg:w-1/2 flex justify-center ">
          {/* 2 section here */}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-zinc-800/50 w-[500px] lg:w-[600px] h-full rounded-xl p-8 flex flex-col space-y-8 z-50 mx-auto"
          >
            <div className=" group relative">
              <label
                htmlFor="name"
                className="absolute -left-3 -top-2 group-focus-within:left-4 group-focus-within:top-1  text-gray-300  px-4 py-1 text-xs group-focus-within:text-white transition-all duration-400  z-30 rounded-md group-focus-within:bg-zinc-800   "
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What's your name"
                className="w-full px-4 py-2  text-gray-300 outline-none rounded-sm duration-500 border border-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-800 focus:outline-none z-10 mt-5  text-sm "
              />
            </div>
            <div className=" group relative">
              <label
                htmlFor="email"
                className="absolute -left-3 -top-2 group-focus-within:left-4 group-focus-within:top-1  text-gray-300  px-4 py-1 text-xs group-focus-within:text-white transition-all duration-400  z-30 rounded-md group-focus-within:bg-zinc-800   "
              >
                Your Email
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="What's your email address?"
                className="w-full px-4 py-2  text-gray-300 outline-none rounded-sm duration-500 border border-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-800 focus:outline-none z-10 mt-5 text-sm  "
              />
            </div>
            <div className=" group relative">
              <label
                htmlFor="message"
                className="absolute -left-3 -top-2 group-focus-within:left-4 group-focus-within:top-1  text-gray-300  px-4 py-1 text-xs group-focus-within:text-white transition-all duration-400  z-30 rounded-md group-focus-within:bg-zinc-800   "
              >
                Your message
              </label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                type="text"
                id="message"
                name="message"
                placeholder="What's your message"
                className="w-full px-4 py-2  text-gray-300 outline-none rounded-sm duration-500 border border-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-800 focus:outline-none z-10 mt-5 min-h-[150px] max-h-[170px] text-sm "
              />
            </div>
            {/* button */}
            <div className="bg-white-50 rounded-lg">
              <button
                disabled={loading}
                className="px-4 py-3 w-full text-center text-black font-bold"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
        {/* right 3d section*/}
        <div className="iphone lg:w-1/2 w-full h-[400px] lg:h-[500px] mx-auto ">
          <figure className="flex items-center justify-center h-full w-full">
            <IphoneCanvas />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Contact;
