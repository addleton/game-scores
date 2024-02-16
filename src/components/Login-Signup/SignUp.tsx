import { useEffect, useState } from "react";
import { checkUsernames, createUser } from "../../utils/gamesApi";
import { useNavigate } from "react-router-dom";
import { resizeFunction } from "../../utils/utils";

export const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [usernameTaken, setUsernameTaken] = useState<boolean | null>(null);
  const [usernameValid, setUsernameValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState<string>("desktop");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && lastName && usernameValid && email && password) {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
      };
      await createUser(userDetails);
      navigate("/login");
    }
  };

  const handleOnBlur = async () => {
    if (username.length < 5) {
      setUsernameValid(false);
    } else {
      setUsernameValid(true);
    }
    try {
      const doesUserExist = (await checkUsernames(username)) as boolean;
      setUsernameTaken(doesUserExist);
    } catch (err) {
      console.error(err);
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
        <div className="hero-content flex-col 2xl:flex-row">
          {" "}
          <img src="/aloy2.png" className="max-w-md mr-20" />
          <div className="divider divider-horizontal"></div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 ml-20">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First name</span>
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="input input-bordered"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  value={firstName}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last name</span>
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="input input-bordered"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  value={lastName}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="john_doe"
                  className="input input-bordered"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  onBlur={handleOnBlur}
                  value={username}
                  required
                />
                {usernameValid === false ? (
                  <label className="label absolute top-full mt-2">
                    <p className="label-text-alt text-error text-base">
                      Username must be at least 5 characters long
                    </p>
                  </label>
                ) : usernameTaken === null ? null : usernameTaken === true ? (
                  <label className="label absolute top-full mt-2 ">
                    <p className="label-text-alt text-error text-base">
                      Username taken
                    </p>
                  </label>
                ) : (
                  <label className="label absolute top-full mt-2">
                    <p className="label-text-alt text-success text-base">
                      Username available
                    </p>
                  </label>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="johndoe@email.com"
                  className="input input-bordered"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-md bg-base-100 ">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First name</span>
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="input input-bordered"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  value={firstName}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last name</span>
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="input input-bordered"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  value={lastName}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="john_doe"
                  className="input input-bordered"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  onBlur={handleOnBlur}
                  value={username}
                  required
                />
                {usernameValid === false ? (
                  <label className="label absolute top-full mt-2">
                    <p className="label-text-alt text-error text-base">
                      Username must be at least 5 characters long
                    </p>
                  </label>
                ) : usernameTaken === null ? null : usernameTaken === true ? (
                  <label className="label absolute top-full mt-2 ">
                    <p className="label-text-alt text-error text-base">
                      Username taken
                    </p>
                  </label>
                ) : (
                  <label className="label absolute top-full mt-2">
                    <p className="label-text-alt text-success text-base">
                      Username available
                    </p>
                  </label>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="johndoe@email.com"
                  className="input input-bordered"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};
