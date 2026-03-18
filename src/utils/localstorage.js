const getInstalledApps = () => {
  const apps = localStorage.getItem("installedApps");
  if (!apps) {
    return [];
  }
  return JSON.parse(apps);
};

const addInstalledApps = (id) => {
  const appsArray = getInstalledApps();

  if (!appsArray.includes(id)) {
    appsArray.push(id);
    const apps = JSON.stringify(appsArray);
    localStorage.setItem("installedApps", apps);
    return true;
  };
};

const removeInstalledApp = (id) => {
  const appsArray = getInstalledApps();
  const updated = appsArray.filter((appId) => appId !== id);
  const apps = JSON.stringify(updated);
  localStorage.setItem("installedApps", apps);
};

export { getInstalledApps, addInstalledApps, removeInstalledApp };
