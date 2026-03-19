import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../../component/appCard/AppCard";

const AppPage = () => {
  const [searchText, setSearchText] = useState("");
  const apps = useLoaderData();
  const [filteredApps, setFilteredApps] = useState(apps);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filtered = apps.filter((app) =>
      app.title.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredApps(filtered);
  };
  return (
    <div className="my-8 w-11/12 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
          Our All Applications
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Explore all apps on the market developed by us. We code for millions.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 gap-3">
        <h2 className="font-semibold text-sm sm:text-base">
          ({filteredApps.length}) Apps Found
        </h2>

        <div className="w-full sm:w-auto">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="grow"
              value={searchText}
              onChange={handleSearch}
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredApps.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">
            No App Found
          </p>
        ) : (
          filteredApps.map((app) => <AppCard key={app.id} app={app} />)
        )}
      </div>
    </div>
  );
};

export default AppPage;
