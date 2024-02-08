import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { signOutUser } from "../utils/gamesApi";

const Nav = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState("desktop");
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser();
    setUser(undefined);
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setScreenSize("mobile");
      } else {
        setScreenSize("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenSize === "desktop") {
    return (
      <nav>
        <div className="navbar border-b border-secondary">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              myGameScores
            </Link>
          </div>
          <div className="flex-none gap-2">
            <Link to="/game-search" className="link link-hover">
              <button className="btn btn-ghost">Search</button>
            </Link>
            <Link to="/games" className="link link-hover">
              <button className="btn btn-ghost">Games</button>
            </Link>
            {user === null || user === undefined ? null : (
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
                    <Link to="/profile">
                      <p className="justify-between">Profile</p>
                    </Link>
                  </li>
                  <li>
                    <a>My Games</a>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleSignOut();
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/game-search"}>Search</Link>
                </li>
                <li>
                  <Link to={"/games"}>All Games</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">myGameScores</a>
          </div>
          <div className="navbar-end">
            {user === null || user === undefined ? null : (
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
                    <Link to="/profile">
                      <p className="justify-between">Profile</p>
                    </Link>
                  </li>
                  <li>
                    <a>My Games</a>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleSignOut();
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
};

export default Nav;
