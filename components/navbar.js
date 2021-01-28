import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function Nav({ user }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme("light");
  }, []);

  return (
    <nav className="flex justify-between py-4">
      <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white">
        TODO App
      </a>
      <ul className="flex items-center">
        <li className="mr-3">
          <ThemeSwitch theme={theme} setTheme={setTheme} mounted={mounted} />
        </li>
        {user ? (
          <li>
            <a
              href="/api/logout"
              className="rounded text-white bg-blue-500 hover:bg-blue-600 py-2 px-4"
            >
              Logout
            </a>
          </li>
        ) : (
          <li>
            <a
              href="/api/login"
              className="rounded text-white bg-blue-500 hover:bg-blue-600 py-2 px-4"
            >
              Login
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
