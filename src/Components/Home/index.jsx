import PopularCourses from "../PopularCourses";
import ban from "../../ban.jpg";
import bann from "../../bann.jpg";
import banne from "../../banne.jpg";

let Home = () => {
  var newProduct = {
    name: "Zumba Program",
    img: "https://goldsgym.in/uploads/gallery/compress-GOLDS_1920x1080_7__1599153086_66614.jpg",
  };
  return (
      <>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={ban}
                className="d-block w-100"
                alt="gymgold"/>
            </div>
            <div className="carousel-item">
              <img
                src={bann}
                className="d-block w-100"
                alt="golggym"/>
            </div>
            <div className="carousel-item">
              <img
                src={banne}
                className="d-block w-100"
                alt="fitgym"/>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      <h5 className="container text-center bg-warning text-dark p-2 mt-5">FIT | INDIA</h5>
      <PopularCourses addProducts={newProduct} />
    </>
  );
};

export default Home;
