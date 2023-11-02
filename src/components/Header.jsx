import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-2 sm:px-20 sm:py-4 bg-secondary items-center ">
      <h1 className="font-black logo md:text-2xl">
        <span className="text-gray-600">The</span>
        <span>Estate</span>
      </h1>
      <form
        action=""
        className="flex items-center bg-background p-2 sm:p-3 rounded-md "
      >
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-[10rem] sm:min-w-[40rem]"
        />
        <FaSearch />
      </form>
      <ul className="flex gap-4">
        <li className="text-lg font-semibold hidden sm:inline hover:text-primary">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="text-lg font-semibold hidden sm:inline hover:text-primary">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="text-lg font-semibold hover:text-primary">
          <Link to={"/sign-in"}>SignIn</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
