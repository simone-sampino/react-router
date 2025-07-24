import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import reactLogo from "./assets/react.svg";
// import AboutPage from "./pages/AboutPage";
// import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <>
      {/* header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" to="/">
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
                <li className="nav-item">
                  <a className="nav-link active" to="/" aria-current="page">
                    Home
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="/about">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="/products">
                    Products
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <BrowserRouter>
        <Routes>
          <Route index Component={HomePage}></Route>
          {/* <Route path="/about" Component={AboutPage}></Route>
          <Route path="/products" Component={ProductsPage}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
