import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import heroImg from "../../assets/hero.png";
import { Link, useLoaderData } from "react-router";
import AppCard from "../../component/appCard/AppCard";

const HomePage = () => {
  const apps = useLoaderData();
  return (
    <div className="my-10 space-y-10">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-sm mx-auto">
          We Build <span className="text-purple-500">Productive</span> Apps
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn">
            <FaGooglePlay />
            Google Play
          </button>

          <button className="btn">
            <FaAppStoreIos />
            App Store
          </button>
        </div>
      </div>

      <div className="text-center">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full sm:w-4/5 lg:w-3/5 mx-auto"
        />
        <div className="bg-purple-500 space-y-6 text-white px-4 py-8">
          <h1 className="text-xl sm:text-2xl font-semibold">
            Trusted by Millions, Built for You
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <p className="text-xs">Total Downloads</p>
              <h1 className="text-2xl sm:text-3xl font-bold">29.6M</h1>
              <p className="text-xs">21% more than last month</p>
            </div>

            <div>
              <p className="text-xs">Total Reviews</p>
              <h1 className="text-2xl sm:text-3xl font-bold">906K</h1>
              <p className="text-xs">46% more than last month</p>
            </div>

            <div>
              <p className="text-xs">Active Apps</p>
              <h1 className="text-2xl sm:text-3xl font-bold">132+</h1>
              <p className="text-xs">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-11/12 mx-auto">
          {apps.slice(0, 8).map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <button className="btn bg-purple-500 text-white text-center mt-5">
          <Link to="/apps">Show All</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
