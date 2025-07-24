import { Link, NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";

export default function Header() {
  const menu = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About us",
    },
    {
      id: 3,
      path: "/products",
      text: "Products",
    },
  ];

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={reactLogo} alt="reactLogo" />
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                {menu.map((item) => {
                  return (
                    <li key={item.id} className="nav-item">
                      <NavLink className="nav-link" to={item.path}>
                        {item.text}
                      </NavLink>
                    </li>
                  );
                })}

                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home<span className="visually-hidden">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
