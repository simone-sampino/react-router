import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import DefaultLayout from "./layouts/DefaultLayout";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/products" Component={ProductsPage} />
            <Route path="/products/:id" Component={ProductsDetailsPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
