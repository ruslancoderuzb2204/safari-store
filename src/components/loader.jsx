// components/Loader.js

import { useEffect, useState } from "react";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(true), 100); // Delay showing the loader for better visual effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-screen ${
        showLoader ? "opacity-100" : "opacity-0"
      }`}
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <div className="animate-pulse rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900"></div>
    </div>
  );
};

export default Loader;
