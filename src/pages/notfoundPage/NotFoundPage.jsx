import React from "react";
import notFoundImg from "../../assets/error-404.png";

const NotFoundPage = () => {
  return (
    <div className="text-center space-y-4 my-10 px-4">
      <img
        src={notFoundImg}
        alt="Not Found"
        className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/5 mx-auto"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        Oops, page not found!
      </h1>
      <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
        The page you are looking for is not available.
      </p>
      <button className="btn bg-purple-500 text-white px-6 py-2 sm:px-8 sm:py-3 mt-2">
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
