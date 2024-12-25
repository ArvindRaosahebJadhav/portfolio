import { useState } from "react";

const Services = () => {
  const [services, setServices] = useState({
    title1: "Laravel Development",
    desc1: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores excepturi veniam rerum voluptatibus velit,
              exercitationem quia voluptates illo culpa ipsam?`,
    title2: "Wordpress Development",
    desc2: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores excepturi veniam rerum voluptatibus velit,
              exercitationem quia voluptates illo culpa ipsam?`,
    title3: "BackEnd Development",
    desc3: `  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores excepturi veniam rerum voluptatibus velit,
              exercitationem quia voluptates illo culpa ipsam?`,
  });
  return (
    <>
      <div className="services-main mb-4">
        <h1 className="text-4xl underline text-center font-bold py-4 space-x-5 px-5">
          My Services
        </h1>
        <div className="flex space-x-5 px-5">
          <div className="space-y-4 bg-gray-300 shadow-lg rounded-xl p-5 text-center">
            <i class="fa-brands fa-laravel text-3xl"></i>
            <h2 className="text-4xl">{services.title1}</h2>
            <p>{services.desc1}</p>
            <button className="bg-orange-500 rounded-full text-1xl shadow-lg px-3 py-2">
              Check
            </button>
          </div>
          <div className="space-y-4 bg-gray-300 shadow-lg rounded-xl p-5 text-center">
            <i class="fa-brands fa-wordpress text-3xl"></i>
            <h2 className="text-4xl"> {services.title2} </h2>
            <p>{services.desc2}</p>
            <button className="bg-orange-500 rounded-full text-1xl shadow-lg px-3 py-2">
              Check
            </button>
          </div>
          <div className="space-y-4 bg-gray-300 shadow-lg rounded-xl p-5 text-center">
            <i class="fa-solid fa-server text-3xl"></i>
            <h2 className="text-4xl"> {services.title3} </h2>
            <p>{services.desc3}</p>
            <button className="bg-orange-500 rounded-full text-1xl shadow-lg px-3 py-2">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
