import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/react-chirper-app/">Home</Link>
        </li>
        <li>
          <Link to="/react-chirper-app/new">New Tweet</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
