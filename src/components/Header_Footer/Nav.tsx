import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/api";
import { resizeFunction } from "../../utils/utils";

const Nav = () => {
    const navigate = useNavigate();
    const [screenSize, setScreenSize] = useState<string>("desktop");
    const { user, setUser } = useUserContext();

    const handleSignOut = async () => {
        await signOutUser();
        await setUser(undefined);
        navigate("/");
    };

    useEffect(() => {
        const resize = resizeFunction(setScreenSize);
        return () => {
            resize();
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
                                        <p>{user.username}</p>
                                    </li>
                                    <li>
                                        <Link to={`/${user.username}/games`}>
                                            My Games
                                        </Link>
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
                <div className="navbar border-b border-secondary">
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
                        <p className=" text-xl font-bold">myGameScores</p>
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
                                        <p className="justify-between">
                                            {user.username}
                                        </p>
                                    </li>
                                    <li>
                                        <Link to={`/${user.username}/games`}>
                                            My Games
                                        </Link>
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
