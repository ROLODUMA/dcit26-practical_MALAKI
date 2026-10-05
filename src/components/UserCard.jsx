import { Link } from "react-router-dom";
import Button from "./Button";

function UserCard({
  id,
  name,
  email,
  company,
  role,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="flex flex-col justify-between rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
            {name.charAt(0)}
          </div>

          <button
            onClick={onToggleFavorite}
            className="text-2xl"
            title="Toggle favorite"
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </div>

        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {name}
        </h2>

        <p className="mb-1 text-gray-600 dark:text-gray-300">
          {email}
        </p>

        <p className="mb-1 font-medium text-blue-600 dark:text-blue-400">
          {company}
        </p>

        <p className="text-gray-500 dark:text-gray-400">
          {role}
        </p>
      </div>

      <div className="mt-6">
        <Link to={`/users/${id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
