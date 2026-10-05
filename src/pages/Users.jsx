import { useEffect, useState } from "react";
import usersData from "../data/users";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Users({ favorites, setFavorites }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setUsers(usersData);
        setLoading(false);
      } catch (err) {
        setError("Unable to load users.");
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = users.filter((user) => {
    const searchText = search.toLowerCase();

    return (
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText) ||
      user.company.toLowerCase().includes(searchText) ||
      user.role.toLowerCase().includes(searchText)
    );
  });

  const toggleFavorite = (id) => {
    setFavorites((previousFavorites) => {
      if (previousFavorites.includes(id)) {
        return previousFavorites.filter((favoriteId) => favoriteId !== id);
      }

      return [...previousFavorites, id];
    });
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Team Members
        </h1>

        <p className="text-gray-600 dark:text-gray-300">
          Showing {filteredUsers.length} user
          {filteredUsers.length !== 1 ? "s" : ""}.
        </p>
      </div>

      <div className="mb-8">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by name, email, company, or role..."
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found." />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              company={user.company}
              role={user.role}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={() => toggleFavorite(user.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
