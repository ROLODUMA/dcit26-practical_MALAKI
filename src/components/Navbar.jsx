
import { NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode, favoritesCount }) {
  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
    }`;

  return (
    <nav className="border-b bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <NavLink
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          Team Directory
        </NavLink>

        <div className="flex flex-wrap items-center gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/users" className={linkClass}>
            Users
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <span className="rounded-lg bg-yellow-100 px-3 py-2 font-medium text-yellow-800">
            Favorites: {favoritesCount}
          </span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-lg bg-gray-200 px-3 py-2 font-medium text-gray-800 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
