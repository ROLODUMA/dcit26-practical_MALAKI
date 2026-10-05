import { Link } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-2xl bg-blue-600 px-6 py-16 text-center text-white shadow-lg">
        <h1 className="mb-4 text-4xl font-bold">
          Welcome to the Team Directory
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
          Browse our team members, search for users, save your favorite
          members, and view their complete details.
        </p>

        <Link to="/users">
          <Button variant="primary">View Team Members</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
