export default function Nav({ user }) {
  return (
    <nav className="flex justify-between py-4">
      <a href="#" className="text-2xl font-bold text-gray-800">
        TODO App
      </a>
      <ul className="flex">
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
