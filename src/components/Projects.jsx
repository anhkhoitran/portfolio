import React from "react";
import shopaaPic from "../assets/shopaa.png";
import netflixPic from "../assets/netflix_2.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-screen text-gray-300 bg-slate-800">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold inline border-b-4">Projects</h1>
      </div>
    <div className="flex justify-center gap-20">
      <div className="max-w-[500px]  p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="py-10">
          <div>
            <img
              className="rounded-md hover:scale-110 duration-500"
              src={shopaaPic}
              alt="shopaa pic"
            />
            <p className="text-2xl text-center py-4">Ecommerce Website</p>
            <p className="text-justify py-2">
              Features: Add products to cart, Remove products from cart, Edit
              quantity, View product detail.{" "}
            </p>
            <p className="text-justify py-2">
              Technology: ReactJS, Redux, TailwindCSS.
            </p>
          </div>
          <div>
            <a href="https://github.com/anhkhoitran/shopping-web">
              <button
                className="text-center rounded-lg px-4 py-2 my-4 mr-4 bg-white font-bold text-gray-700
                         hover:bg-black hover:text-white"
              >
                Github
              </button>
            </a>
            <a href="https://shopaa-anhkhoitran.netlify.app">
              <button
                className="text-center rounded-lg px-4 py-2 my-4 bg-white font-bold text-gray-700
                         hover:bg-black hover:text-white"
              >
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[500px]  p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="py-10">
          <div>
            <img
              className="rounded-md hover:scale-110 duration-500"
              src={netflixPic}
              alt="netflix pic"
            />
            <p className="text-2xl text-center py-4">Movie Website</p>
            <p className="text-justify py-2">
              Features: Sign In and Sign Up for account using Google Firebase Authentication, Add movies to user's favorite list .{" "}
            </p>
            <p className="text-justify py-2">
              Technology: ReactJS, Firebase Authentication, Firestore , TailwindCSS.
            </p>
          </div>
          <div>
            <a href="https://github.com/anhkhoitran/netflix_clone">
              <button
                className="text-center rounded-lg px-4 py-2 my-4 mr-4 bg-white font-bold text-gray-700
                         hover:bg-black hover:text-white"
              >
                Github
              </button>
            </a>
            <a href="https://netflix2-78564.web.app/">
              <button
                className="text-center rounded-lg px-4 py-2 my-4 bg-white font-bold text-gray-700
                         hover:bg-black hover:text-white"
              >
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
