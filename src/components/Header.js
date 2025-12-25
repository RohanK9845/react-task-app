import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1>My Tasks</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default Header;
