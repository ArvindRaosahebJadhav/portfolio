import bannerBackground from "../assets/er_2.jpg";
const Expertise = () => {
  return (
    <>
      <div className="expertise-main items-center ">
        <h1 className="my-10 text-4xl font-bold underline text-center">
          My Expertise
        </h1>
        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover", // Ensures the image covers the container
            backgroundPosition: "center", // Centers the image
          }}
          className="exp-container flex py-10"
        >
          <div className="exp-item text-white flex justify-center ">
            <div className="w-2/3 text-center space-y-3 ">
              <h2 className="text-2xl ">I Love These Technology</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo vel libero architecto illum aspernatur nesciunt.
              </p>
              <button className="bg-orange-600 rounded-full shadow-lg text-1xl py-2 px-3">
                Hire Me
              </button>
            </div>
          </div>
          <div className="exp-item flex justify-center">
            <div className=" w-2/3 flex space-x-2 h-fit flex-wrap justify-center">
              <p className="bg-white w-fit px-3 py-2 rounded-full mt-2 cursor-pointer hover:bg-orange-500">
                HTML
              </p>
              <p className="bg-white w-fit px-3 py-2 rounded-full mt-2 cursor-pointer hover:bg-orange-500">
                CSS
              </p>
              <p className="bg-white w-fit px-3 py-2 rounded-full mt-2 cursor-pointer hover:bg-orange-500">
                JavaScript
              </p>
              <p className="bg-white w-fit px-3 py-2 rounded-full mt-2 cursor-pointer hover:bg-orange-500">
                Bootstrap
              </p>
              <p className="bg-white w-fit px-3 py-2 rounded-full mt-2 cursor-pointer hover:bg-orange-500">
                Wordpress
              </p>
              <p className="bg-white w-fit px-3 py-2 rounded-full mt-2 cursor-pointer hover:bg-orange-500">
                Laravel
              </p>
              <p className="bg-white w-fit px-3 py-2 rounded-full mt-2 cursor-pointer hover:bg-orange-500">
                React
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Expertise;
