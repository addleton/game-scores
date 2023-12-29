import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/recommended-games">Recommended</Link>
    </nav>
  );
};

export default Nav;
