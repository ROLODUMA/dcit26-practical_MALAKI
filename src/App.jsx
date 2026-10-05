import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div
        className={
          darkMode
            ? "min-h-screen bg-gray-900 text-white"
            : "min-h-screen bg-gray-50 text-gray-900"
        }
      >
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          favoritesCount={favorites.length}
        />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/users"
              element={
                <Users
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />

            <Route
              path="/users/:id"
              element={
                <UserDetails
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />


            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
