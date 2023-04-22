import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">friendsbook</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
