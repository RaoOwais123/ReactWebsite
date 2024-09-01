import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1 className="text-center text-5xl text-red-500">Not Found!!!</h1>
      <div className="flex justify-center my-4 items-center">
        <Link to={"/"} className="flex self-center text-center text-2xl rounded-md p-1 text-green-500 border-lime-600 border-2 hover:text-white hover:bg-slate-600">
          Go To Home Page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;