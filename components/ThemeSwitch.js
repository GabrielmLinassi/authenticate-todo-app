import React, { useEffect, useState } from "react";

export default function ThemeSwitch({ theme, setTheme, mounted }) {
  const [toggleActive, setToggleActive] = useState(false);

  const switchTheme = () => {
    if (mounted) {
      setToggleActive(!toggleActive);
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div className="flex items-center">
      <h2 className="text-xl mr-3 dark:text-white">Dark Mode</h2>
      <div
        onClick={switchTheme}
        className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out 
        ${toggleActive && "bg-gray-700"}`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out 
        ${toggleActive && "translate-x-6"}`}
        ></div>
      </div>
    </div>
  );
}
