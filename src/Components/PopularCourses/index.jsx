import React from "react";
import { Link } from "react-router-dom";

class PopularCourses extends React.Component {
  constructor(props) {
    super();
    this.state = {
      allProducts: [
        {
          name: "Annual Program",
          img:"https://goldsgym.in/uploads/gallery/compress-GOLDS_1920x1080_2__1599152923_11541.jpg",
        },
        {
          name: "Personal Training",
          img: "https://goldsgym.in/uploads/gallery/compress-GOLDS_1920x1080_4__1599152983_33793.jpg",
        },
        {
          name: "Quarterly Training",
          img: 	"https://goldsgym.in/uploads/gallery/compress-GOLDS_1920x1080_3__1599152955_85549.jpg",
        },
        {
          name: "Monthly Training",
          img: "https://goldsgym.in/uploads/gallery/compress-GOLDS_1920x1080_5__1599153019_75619.jpg",
        },
        {
          name: "Online Training",
          img: "https://goldsgym.in/uploads/gallery/compress-GOLDS_1920x1080_6__1599153050_98558.jpg",
        },
      ],
    };
    //pushing new object by collecting from parent as props
    this.state.allProducts.push(props.addProducts);
    //Binding this keyword
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    //debugger;
    this.setState({
      allProducts: [
        ...this.state.allProducts,
        {
          name: "",
          img: "",
        },
      ],
    });
  }
  render() {
    var popularCourses;
    if (this.state.allProducts.length > 0) {
      popularCourses = this.state.allProducts.map((item, index) => {
        return (
          <div className="col-md-4 p-3" key={index}>
            <div className="shadow">
            <div className="card" >
              <img src={item.img} className="card-img-top" alt="FitIndia" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <Link to="/" className="btn btn-outline-warning btn-sm">More</Link>
              </div>
            </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="col-md-12">
          <div className="card">
            <div className="card-body text-danger">
              There is no products, Please try after some time
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
       <div className="container">
        <div className="row">
          {popularCourses}
        </div>
        
      </div>
      </>
    );
  }
}

export default PopularCourses;
