import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import users from "../data/users";
import Button from "../components/Button";

function UserDetails({ favorites, setFavorites }) {

  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((user) => user.id === Number(id));

  const isFavorite = favorites.includes(user?.id);

const toggleFavorite = () => {
  setFavorites((previousFavorites) => {
    if (previousFavorites.includes(user.id)) {
      return previousFavorites.filter(
        (favoriteId) => favoriteId !== user.id
      );
    }

    return [...previousFavorites, user.id];
  });
};


  useEffect(() => {
    if (user) {
      document.title = `${user.name} - Team Directory`;
    } else {
      document.title = "User Not Found - Team Directory";
    }

    return () => {
      document.title = "Team Directory";
    };
  }, [user]);

  if (!user) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-xl border border-red-300 bg-red-50 p-8 text-center dark:bg-red-950">
          <h1 className="mb-3 text-3xl font-bold text-red-700 dark:text-red-300">
            User Not Found
          </h1>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            The user with ID {id} does not exist.
          </p>

          <Button onClick={() => navigate("/users")}>
            Back to Users
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="rounded-xl border bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
          {user.name.charAt(0)}
        </div>

        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {user.name}
        </h1>

        <p className="mb-6 text-lg text-blue-600 dark:text-blue-400">
          {user.role}
        </p>

        <button
            onClick={toggleFavorite}
            className={`mb-6 rounded-lg px-4 py-2 font-semibold transition ${
                isFavorite
                    ? "bg-yellow-500 text-white hover:bg-yellow-600"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white"
            }`}
        >
            {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
        </button>


        <div className="space-y-4">
          <div>
            <p className="font-semibold text-gray-500 dark:text-gray-400">
              Email
            </p>
            <p className="text-gray-900 dark:text-white">
              {user.email}
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-500 dark:text-gray-400">
              Company
            </p>
            <p className="text-gray-900 dark:text-white">
              {user.company}
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-500 dark:text-gray-400">
              Role
            </p>
            <p className="text-gray-900 dark:text-white">
              {user.role}
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Button onClick={() => navigate("/users")}>
            Back to Users
          </Button>

          <Link to="/users">
            <Button variant="danger">
              Return to User List
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
