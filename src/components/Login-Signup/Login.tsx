import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../utils/gamesApi";
import { useUserContext } from "../../context/UserContext";
import { resizeFunction } from "../../utils/utils";
import { User } from "../../types/Types";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser } = useUserContext();
  const [screenSize, setScreenSize] = useState<string>("desktop");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const signedInUser = (await signIn(email, password)) as User | null;
    setUser(signedInUser);
    if (signedInUser) {
      navigate("/");
    }
  };

  useEffect(() => {
    const resize = resizeFunction(setScreenSize);
    return () => {
      resize();
    };
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="hero min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  } else if (screenSize === "desktop") {
    return (
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {" "}
          <img src="/link2.png" className="max-w-sm ml-20" />
          <div className="divider divider-horizontal"></div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 mr-20">
            <form className="card-body" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <label className="label">
                <Link to="/signup" className="label-text-alt link link-hover">
                  Dont have an account? Create one here
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-md bg-base-100">
            <form className="card-body" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <label className="label">
                <Link to="/signup" className="label-text-alt link link-hover">
                  Dont have an account? Create one here
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
};
