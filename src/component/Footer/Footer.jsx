import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-base-content p-10">
      <footer className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-2">
          <div className="flex items-center mb-5">
            <img src={logo} alt="logo" className="w-10" />
            <span className="font-bold ms-1 text-purple-500">HERO.IO</span>
          </div>

          <p className="w-4/5 text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            quibusdam, nobis exercitationem molestias cupiditate aliquam a non
            quam ratione minima!
          </p>
        </aside>

        <nav className="space-y-3 text-gray-400">
          <h6 className="font-semibold text-white">Company</h6>
          <a className="link link-hover block">About us</a>
          <a className="link link-hover block">Our Mission</a>
          <a className="link link-hover block">Contact Us</a>
        </nav>

        <nav className="space-y-3 text-gray-400">
          <h6 className="font-semibold text-white">Products & Services</h6>
          <a className="link link-hover block">Customer Stories</a>
          <a className="link link-hover block">Download Apps</a>
        </nav>

        <nav className="text-white">
          <h6 className="font-semibold">Social Links</h6>
          <div className="flex gap-2">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
          </div>
        </nav>

        <div className="lg:col-span-6 border-t border-base-300 pt-4 text-center text-white text-sm mt-4">
          © {new Date().getFullYear()} HERO.IO - All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
