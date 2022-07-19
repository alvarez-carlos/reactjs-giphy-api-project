import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <header>
      <div>Gifs</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lions">Lion</Link>
          </li>
          <li>
            <Link to="/pandas">Pandas</Link>
          </li>
          <li>
            <Link to="/cats">Cats</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
