import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { addInstalledApps, getInstalledApps } from "../../utils/localstorage";
import Swal from "sweetalert2";
import AppNotFound from "../../component/appNotFound/AppNotFound";

const AppDetailsPage = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const { id } = useParams();
  const data = useLoaderData();

  const app = data.find((a) => a.id === parseInt(id));
  if (!app) {
    return <AppNotFound />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const installedApps = getInstalledApps();
    if (installedApps.includes(app.id)) {
      setIsInstalled(true);
    }
  }, [app.id]);

  const handleInstallButton = () => {
    const isAdded = addInstalledApps(app.id);

    if (isAdded) {
      setIsInstalled(true);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${app.title} has downloaded successfully`,
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      });
    }
  };

  return (
    <div className="my-10 space-y-8 w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={app.image}
          alt=""
          className="w-40 md:w-56 lg:w-64 mx-auto md:mx-0"
        />

        <div className="flex flex-col w-full space-y-5">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">{app.title}</h1>
            <p>
              Developed by{" "}
              <span className="font-semibold text-purple-500">
                {app.companyName}
              </span>
            </p>
          </div>

          <div className="border-t flex flex-wrap gap-8 md:gap-20 pt-5 py-2">
            <div>
              <img src={downloadImg} alt="" className="w-6" />
              <p className="text-sm">Downloads</p>
              <h2 className="text-xl md:text-2xl font-bold">{app.downloads}</h2>
            </div>

            <div>
              <img src={ratingImg} alt="" className="w-6" />
              <p className="text-sm">Average Ratings</p>
              <h2 className="text-xl md:text-2xl font-bold">{app.ratingAvg}</h2>
            </div>

            <div>
              <img src={reviewImg} alt="" className="w-6" />
              <p className="text-sm">Total Reviews</p>
              <h2 className="text-xl md:text-2xl font-bold">{app.reviews}</h2>
            </div>
          </div>

          {isInstalled ? (
            <button
              className="btn  w-full sm:w-60 mt-4 btn-disabled bg-gray-400 cursor-not-allowed"
              disabled
            >
              Installed
            </button>
          ) : (
            <button
              className="btn btn-success text-white w-full sm:w-60 mt-4"
              onClick={() => handleInstallButton(app.id)}
            >
              Install Now ({app.size})
            </button>
          )}
        </div>
      </div>

      <div className="pt-5 border-t w-full">
        <h3 className="font-semibold mb-3">Ratings</h3>
        <div className="w-full h-60 md:h-72 lg:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[...app.ratings].reverse()} layout="vertical">
              <XAxis type="number" axisLine={false} tickLine={false} />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="pt-5 border-t">
        <h3 className="font-semibold mb-3">Description</h3>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetailsPage;
