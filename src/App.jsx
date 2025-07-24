import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index Component={HomePage}></Route>
          <Route path="/about" Component={AboutPage}></Route>
          <Route path="/products" Component={ProductsPage}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
