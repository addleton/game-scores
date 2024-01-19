import { Link } from "react-router-dom";

export const Login: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {" "}
        <img src="/link2.png" className="max-w-sm ml-20" />
        <div className="divider divider-horizontal"></div>
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 mr-20">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
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
};
