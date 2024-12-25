import { useState } from "react";
import aboutImage from "../assets/1.jpg";
const About = () => {
  const [data, setData] = useState({
    image: aboutImage,
    title: "PHP Laravel Developer",
    desc1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              at?`,
    desc2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              accusantium provident animi ab nulla asperiores!`,
  });
  return (
    <>
      <div className="about-main bg-gray-100">
        <h1 className="text-4xl underline font-bold text-center p-5">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="about-item w-full flex justify-center">
            <img
              className="rounded-full shadow-lg w-4/5 md:w-1/2"
              src={data.image}
              alt="Arvind Jadhav's profile picture"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="space-y-5 w-full px-4 md:w-2/3 text-center md:text-left">
              {/* <h3 className="text-2xl md:text-3xl font-semibold">Hi I am</h3> */}
              <h1 className="text-4xl md:text-5xl font-bold">{data.title}</h1>
              {/* <h2 className="text-2xl md:text-3xl font-semibold">
              Full Stack Developer
            </h2> */}
              <p className="text-gray-700">
                {/* Replace with actual bio */}
                {data.desc1}
              </p>
              <p>{data.desc2}</p>
              <a
                className="inline-block px-6 py-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-colors"
                href="/contact-me"
                aria-label="Contact Arvind Jadhav"
              >
                Read More..
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
