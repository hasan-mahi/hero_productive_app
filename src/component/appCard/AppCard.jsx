import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-80 sm:w-96 shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition-shadow duration-300">
        <Link to={`/apps/${app.id}`}>
          <figure className="overflow-hidden rounded-t-2xl p-3">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-52 object-cover rounded-xl"
            />
          </figure>
          <div className="px-5 pb-4">
            <h2 className="card-title text-lg sm:text-xl font-semibold mb-1">
              {app.title}
            </h2>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2 bg-green-100 text-green-600 rounded-full px-3 py-1 text-sm font-medium shadow-sm">
                <img src={downloadImg} alt="downloads" className="w-4 h-4" />
                {app.downloads}
              </div>
              <div className="flex items-center gap-2 bg-orange-100 text-orange-600 rounded-full px-3 py-1 text-sm font-medium shadow-sm">
                <img src={ratingImg} alt="rating" className="w-4 h-4" />
                {app.ratingAvg}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AppCard;
