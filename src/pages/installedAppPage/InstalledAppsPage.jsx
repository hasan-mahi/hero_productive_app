import React, { useState } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { getInstalledApps, removeInstalledApp } from "../../utils/localstorage";
import { useLoaderData } from "react-router";
import { BiSolidDownArrow } from "react-icons/bi";
import Swal from "sweetalert2";

const InstalledAppsPage = () => {
  const allApps = useLoaderData();
  const installedApps = getInstalledApps();
  const resApps = allApps.filter((app) => installedApps.includes(app.id));
  const [apps, setApps] = useState(resApps);
  const [sortOrder, setSortOrder] = useState("");

  const getDownloadNumber = (value) => {
    if (value.includes("B")) {
      return parseFloat(value) * 1000000000;
    }
    if (value.includes("M")) {
      return parseFloat(value) * 1000000;
    }
    if (value.includes("K")) {
      return parseFloat(value) * 1000;
    }
    return parseFloat(value);
  };

  const handleSort = (type) => {
    setSortOrder(type);

    let sorted = [...apps];

    if (type === "high") {
      sorted.sort(
        (a, b) =>
          getDownloadNumber(b.downloads) - getDownloadNumber(a.downloads),
      );
    } else if (type === "low") {
      sorted.sort(
        (a, b) =>
          getDownloadNumber(a.downloads) - getDownloadNumber(b.downloads),
      );
    }

    setApps(sorted);
  };

  const handleUninstallApp = (app) => {
    removeInstalledApp(app.id);
    const upAppsList = apps.filter((a) => a.id !== app.id);
    setApps(upAppsList);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${app.title} has been uninstalled successfully`,
      showConfirmButton: false,
      timer: 1500,
      toast: true,
    });
  };

  return (
    <div className="w-11/12 max-w-7xl mx-auto my-5 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Explore all trending apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h3 className="font-semibold text-sm sm:text-base">
          {apps.length} Apps Found
        </h3>

        <div className="dropdown dropdown-bottom dropdown-end w-full sm:w-auto text-gray-500">
          <div
            tabIndex={0}
            role="button"
            className="btn w-full sm:w-auto flex justify-between sm:justify-center items-center text-gray-500"
          >
            {sortOrder === "high"
              ? "High-Low"
              : sortOrder === "low"
                ? "Low-High"
                : "Sort By Downloads"}

            <BiSolidDownArrow />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-full sm:w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => handleSort("high")}>High-Low</button>
            </li>
            <li>
              <button onClick={() => handleSort("low")}>Low-High</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {apps.length === 0 ? (
          <p className="text-center text-gray-400">No installed apps found.</p>
        ) : (
          apps.map((app) => (
            <div
              key={app.id}
              className="card card-side bg-base-100 shadow-sm p-3 flex flex-col sm:flex-row items-center gap-4"
            >
              <figure className="shrink-0">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl"
                />
              </figure>
              <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-3 sm:gap-4">
                <div className="flex-1">
                  <h2 className="card-title text-base sm:text-lg font-semibold">
                    {app.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 mt-2 text-sm sm:text-base items-center">
                    <p className="flex items-center gap-1">
                      <img
                        src={downloadImg}
                        alt="downloads"
                        className="h-4 w-4"
                      />
                      <span>{app.downloads}</span>
                    </p>

                    <p className="flex items-center gap-1">
                      <img src={ratingImg} alt="rating" className="h-4 w-4" />
                      <span>{app.ratingAvg}</span>
                    </p>

                    <p>{app.size}</p>
                  </div>
                </div>

                <div className="shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
                  <button
                    className="btn btn-success text-white w-full sm:w-auto"
                    onClick={() => handleUninstallApp(app)}
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InstalledAppsPage;
