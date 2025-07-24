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
            <a className="navbar-brand" to="#">
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
                  <a className="nav-link" to="/">
                    Home<span className="visually-hidden">(current)</span>
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

      {/* main */}
      <main>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Welcome to our e-commerce</h1>
            <p className="col-md-8 fs-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              nulla esse eaque id fugit molestias nemo cum aliquid? Quasi error
              expedita obcaecati aperiam atque molestias, incidunt aliquid
              officiis quos. Numquam.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="text-center text-lg-start py-4 mt-5">
        <div className="container">
          <div className="row row-col-1 row-cols-md-3">
            <div className="col">
              <h3>Company</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione assumenda aliquid laudantium architecto officiis est, ut
                officia vitae quaerat nesciunt rem, modi sequi in voluptatibus
                eum. Unde at nostrum amet?
              </p>
            </div>
            <div className="col">
              <h3>Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Legal</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Lorem</a>
                </li>
                <li>
                  <a href="#">Lorem</a>
                </li>
                <li>
                  <a href="#">Lorem</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

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
