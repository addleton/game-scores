import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Nav = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            myGameScores
          </Link>
        </div>
        <div className="flex-none gap-2">
          <button className="btn btn-outline">
            <Link to="/game-search" className="link link-hover">
              Search
            </Link>
          </button>
          <Link to="/game-search" className="link link-hover">
            Games
          </Link>
          {user === undefined ? null : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-24">
                  {user.img_url.length === 0 ? (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="/celeste.webp"
                    />
                  ) : (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.img_url}
                    />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>My Games</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
