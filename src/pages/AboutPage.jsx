import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      {/* header */}
      <Header />

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
      <Footer />
    </>
  );
}
