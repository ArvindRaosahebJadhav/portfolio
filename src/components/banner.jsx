import { useEffect, useRef } from "react";
import bannerImage from "../assets/1.jpg";
import bannerBackground from "../assets/er_2.jpg";
import Typed from "typed.js";

// import { url } from "./../../node_modules/tailwindcss/src/util/dataTypes";
const Banner = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "PHP Developer",
        "Web Developer",
        "Larave Developer",
        "Wordpress Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center", // Centers the image
      }}
      className="banner-main flex items-center p-8"
    >
      <div
        // style={{
        //   backgroundImage: `url(${bannerBackground}})`,
        // }}

        className="banner-item w-full flex justify-center items-center"
      >
        <div className="w-2/3 text-white">
          <h3 className="text-3xl font-semibold">Hi I am</h3>
          <h1 className="mt-4 text-5xl font-bold">Arvind Jadhav</h1>
          <h2 className="mt-4 text-3xl font-semibold">
            I am <span className="font-bold" ref={el}></span>
          </h2>
          <p className="mt-4 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, at?
          </p>
          <div className="icon-main space-x-5 py-4 flex">
            <a className="h-12 w-12 rounded-full justify-center items-center bg-gray-800 flex hover:bg-pink-800 px-2 py-2 cursor-pointer">
              <i class="fa-brands fa-facebook text-2xl"></i>
            </a>
            <a className="h-12 w-12 rounded-full justify-center items-center bg-gray-800 flex hover:bg-pink-800 px-2 py-2 cursor-pointer">
              <i class="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a className="h-12 w-12 rounded-full justify-center items-center bg-gray-800 flex hover:bg-pink-800 px-2 py-2 cursor-pointer">
              <i class="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a className="h-12 w-12 rounded-full justify-center items-center bg-gray-800 flex hover:bg-pink-800 px-2 py-2 cursor-pointer">
              <i class="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a className="h-12 w-12 rounded-full justify-center items-center bg-gray-800 flex hover:bg-pink-800 px-2 py-2 cursor-pointer">
              <i class="fa-brands fa-whatsapp text-2xl"></i>
            </a>
          </div>
          <a
            className="px-3 py-2 bg-orange-600 rounded-full shadow-lg"
            href="/contact-me"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="banner-item w-full flex justify-center ">
        <img
          className="rounded-full shadow-lg w-1/2"
          src={bannerImage}
          alt=""
        />
      </div>
    </div>
  );
};
export default Banner;
