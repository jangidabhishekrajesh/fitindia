import gym from "../../gym.jpg";
import gym1 from "../../gym1.jpg";
import gym2 from "../../gym2.jpg";
import gym3 from "../../gym3.jpg";
import gym4 from "../../gym4.jpg";
import gym5 from "../../gym5.jpg";
import gym6 from "../../gym6.jpg";
import gym7 from "../../gym7.jpg";
import gym8 from "../../gym8.jpg";
import bannerBig from "../../bannerBig.jpg";
import bannerSmall from "../../bannerSmall.jpg";
import { useState } from "react";

let Services = ()=> {

  const[form, setForm] = useState({
    name:"",
    email:"",
    city:"",
    state:"",
    company:""
  })
  const[errors, setErrors] = useState({
    nameErr:"",
    emailErr:"",
    cityErr:"",
    stateErr:"",
    companyErr:""
  })
  const handleChange = (e) =>{
    setForm({...form,[e.target.name]:e.target.value})
}
const validate = () =>{
    let nameErr = '';
    let emailErr = '';
    let cityErr = '';
    let stateErr = '';
    let companyErr ='';

    if (form.name.length <= 3){
        nameErr = "This is required!"
    }
    if (!form.email.includes('@')){
      emailErr = "Enter an valid email!"
  }
    if(form.city.length <= 3){
      cityErr = "This is required!"
    }
    if(form.state.length <= 3){
      stateErr = "This is required!"
    }
    if(form.company.length <= 6){
      companyErr = "This is required!"
    }
    if (nameErr||emailErr||cityErr||stateErr||companyErr){
        setErrors({...errors, nameErr, emailErr, cityErr, stateErr, companyErr})
        return false;
    }
    else{
        setErrors({...errors, nameErr, emailErr, cityErr, stateErr, companyErr}) 
    }
    return true;
}
const handleSubmit = (e) =>{
    e.preventDefault();
    const isValid = validate();
    if (isValid){
        // submitToServer();
    }
}
    return (
        <>
        <img src={gym} style={{width:"100%", marginBottom:"20px"}} alt="gym" />
        <div className="container">
          <h2 className="text-center">JOIN <span className="text-warning">THE MOVEMENT</span></h2>
          <div className="row shadow mb-4 mt-3 p-3">
            <div className="col-md-4 mt-4">
              <p className="text-muted">
                Gold's Gym has become the largest co-ed gym chain in the world with over 700+ clubs in 27 countries, across 6 continents serving more than 2 million customers...
                <br />
                <br />
                <br />
                <br />
                Gold’s Gym India started in the year 2002 in Mumbai.
                <br />
                <br />
                <br />
                The Year 2019 marked the 17th Anniversary of Gold’s Gym India.
                <br />
                <br />
                <br />
                <i className="fad fa-check-square text-dark"></i> 150+ active Gold’s Gym clubs in India and a few more under construction
                <br />
                <br />
                <br />
                <i className="fad fa-check-square text-dark"></i> Multiple gym formats – Regular, Express and Active.
                <br />
                <br />
                <i className="fad fa-check-square text-dark"></i> Presence in 95+ cities and 25 states
                <br />
                <br />
                <i className="fad fa-check-square text-dark"></i> 60+ years presence in the health and fitness industry
              </p>
            </div>
            <div className="col-md-8 mt-4">
              <form className="row" onSubmit={handleSubmit} noValidate>
                <div className="form-outline mb-4">
                  <label className="form-label text-muted" htmlFor="form4Example1">Enter Name</label>
                  <input name="name" type="text" id="form4Example1" className="form-control"onChange={handleChange}/>
                  <p className="text-danger">{errors.nameErr}</p>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label text-muted" htmlFor="form4Example2">Email Address</label>
                  <input name="email" type="email" id="form4Example2" className="form-control"  onChange={handleChange}/> 
                  <p className="text-danger">{errors.emailErr}</p>
                </div>

                <div className="col-md-6 form-outline mb-4">
                  <label className="form-label text-muted" htmlFor="form4Example5">City</label>
                  <input name="city" type="text" id="form4Example5" className="form-control"  onChange={handleChange}/>
                  <p className="text-danger">{errors.cityErr}</p>
                </div>

                <div className="col-md-6 form-outline mb-4">
                  <label className="form-label text-muted" htmlFor="form4Example6">State</label>
                  <input name="state" type="text" id="form4Example6" className="form-control" onChange={handleChange}/>
                  <p className="text-danger">{errors.stateErr}</p>
                </div>

                <div className="col-md-6 form-outline mb-4">
                  <label className="form-label text-muted" htmlFor="turnOver">Annual Turn Over in INR</label>
                  <input className="form-control" placeholder="25+ Lacs" type="tel" name="turnOver" id="turnOver" />
                </div>

                <div className="col-md-6 form-outline mb-4">
                  <label className="form-label text-muted" htmlFor="form4Example8">Company Name</label>
                  <input name="company" type="text" id="form4Example8" className="form-control"  onChange={handleChange}/>
                  <p className="text-danger">{errors.companyErr}</p>
                </div>

                <div className="col-12 mb-4 form-floating">
                    <textarea className="form-control" id="addText"></textarea>
                    <label htmlFor="addText">Your Message</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form4Example4"
                  />
                  <label className="form-check-label text-muted" htmlFor="form4Example4">
                    Send me a copy of this message
                  </label>
                </div>

                <button type="submit" className="btn btn-outline-warning mb-4 btn-block">JOIN NOW!</button>
                </form>
            </div>
          </div>
        </div>
        <img src={gym1} style={{width:"100%"}} alt="gym1" />
        <div className="container-fluid">
          <div className="row p-4" id="row-bg">
            <div className="col-md-3">
              <div className="shadow bg-dark p-3 mt-3 mb-3">
                <h1 className="text-center text-light">1 Million</h1>
                <hr style={{color:"yellow"}}/>
                <p className="text-center text-muted">Members World Wide</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow bg-dark p-3 mt-3 mb-3">
                <h1 className="text-center text-light">96%</h1>
                <hr style={{color:"yellow"}}/>
                <p className="text-center text-muted">Added Brand Awareness</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow bg-dark p-3 mt-3 mb-3">
                <h1 className="text-center text-light">79%</h1>
                <hr style={{color:"yellow"}}/>
                <p className="text-center text-muted">Un-Aided Brand Awareness</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow bg-dark p-3 mt-3 mb-3">
                <h1 className="text-center text-light">1 Billion</h1>
                <hr style={{color:"yellow"}}/>
                <p className="text-center text-muted">Annual PR Impression</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow bg-dark p-3 mt-2 mb-3">
                <h1 className="text-center text-light">Largest</h1>
                <hr style={{color:"yellow"}}/>
                <p className="text-center text-muted">Fitness Community Facebook</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow bg-dark p-3 mt-2 mb-3">
                <h1 className="text-center text-light">Consumer</h1>
                <hr style={{color:"yellow"}}/>
                <p className="text-center text-muted">4.9 Ratings World Wide </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow bg-dark p-3 mt-2 mb-3">
                <h1 className="text-center text-light">Celebrities</h1>
                <hr style={{color:"yellow"}}/>
                <p className="text-center text-muted">Community</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow bg-dark p-3 mt-2 mb-3">
                <h1 className="text-center text-light">Largest</h1>
                <hr style={{color:"yellow"}}/>
                <p className="text-center text-muted">Online Fitness Community</p>
              </div>
            </div>
          </div>
          <div className="row p-5">
            <div className="col-md-7 col-sm-12 col-xs-12 col-auto">
              <h2 className="text-center">
              LEADERS IN THE FITNESS MOVEMENT
              </h2>
              <hr />
              <p className="text-muted">
              FIT|INDIA's Gym has been leading the fitness movement and redefining strength since 1965 when Abhishek Jangid opened the original FIT|INDIA’s Gym in Jaipur, Bangalore. Long before the modern-day health club existed, the original Gold’s Gym featured three simple ingredients: The best equipment, a passion for fitness and an unparalleled dedication to results. It was an instant hit.
              </p>
            <br />
            <div className="row">
              <div className="col-md-9">
              <h4 className="text-warning mt-2 mb-4">REQUIREMENTS</h4>
              </div>
              <div className="col-md-3">
                <button className="carousel-control-prev-dark " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                  &nbsp;
                <button className="carousel-control-next-dark" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                  <div className="row p-4" id="require-bg">
                    <div className="col-md-5 m-4 shadow shadow-thunder p-4">
                      <h4><b>REGULAR GYMS</b></h4>
                      <hr />
                      <p><b>Requirements:</b> 5000-7000 sq ft. </p>
                      <p><b>Investments:</b> 2.5-4 Cr</p>
                      <p><b>Inclusion:</b> Yoga/ Group Ex/ Spinning Studio/ Cardio Strength/ Free Weight Area/ Swimming Pool/ Lockers/ Steam Bath/ Other wet. Areas Expansion Plans in metro/ Tier-1 Cities. Areas Expansion in small cities:Tier-1/ Tier-2.</p>
                    </div>
                    <div className="col-md-5 m-4 shadow shadow-mariyo p-4">
                      <h4><b>EXPRESS GYMS</b></h4>
                      <hr />
                      <p><b>Requirements:</b> 3000-5000 sq ft. </p>
                      <p><b>Investments:</b> 1-2.5 Cr</p>
                      <p><b>Inclusion:</b> Yoga/ Group Ex/ Spinning Studio/ Cardio Strength/ Free Weight Area/ Swimming Pool/ Lockers/ Steam Bath/ Other wet.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row p-4" id="require-bg">
                      <div className="col-md-5 shadow shadow-mariyo m-4 col-sm-5 col-xs-12 p-4">
                        <h4><b>ACTIVE GYMS</b></h4>
                        <hr />
                        <p><b>Requirements:</b> 5000-7000 sq ft. </p>
                        <p><b>Investments:</b> 1 Cr</p>
                        <p><b>Inclusion:</b> Yoga/ Group Ex/ Spinning Studio/ Cardio Strength/ Free Weight Area/ Swimming Pool/ Lockers/ Steam Bath/ Other wet. Areas Expansion Plans in metro/ Tier-1 Cities. Areas Expansion in small cities:Tier-1/ Tier-2.</p>
                      </div>
                      <div className="col-md-5 shadow shadow-thunder m-4 col-sm-5 col-xs-12 p-4">
                      <h4><b>ATHELETE GYMS</b></h4>
                      <hr />
                        <p><b>Requirements:</b> 3000-5000 sq ft. </p>
                        <p><b>Investments:</b> 1-2.5 Cr</p>
                        <p><b>Inclusion:</b> Yoga/ Group Ex/ Spinning Studio/ Cardio Strength/ Free Weight Area/ Swimming Pool/ Lockers/ Steam Bath/ Other wet.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12 col-xs-12">
              <img src={gym2} style={{width:"100%",height:"100%"}} alt="gym2" />
            </div>
          </div>
        </div>
        <div className="col-12 mb-2">
          <img src={gym3} style={{width:"100%"}} alt="gym3" />
        </div>
        <div className="container-fluid">
          <div className="col-12">
            <h2 className="text-center mt-5 mb-3">FLEXIBLE <span className="text-warning">FORMAT</span></h2>
          </div>
          <div className="row bg-dark py-5">
            <div className="col-md-7 p-5 mt-5">
              <b className="text-light">We understand that every community has its own unique make up and needs. So we work in tendem to help you design the gym that best suits your area with multiple formats & designs, conversion programs, amenties and pricing strategies. </b>
            </div>
            <div className="col-md-5 p-5">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={gym4} className="d-block w-100" alt="gym4"/>
                  </div>
                  <div className="carousel-item">
                    <img src={gym5} className="d-block w-100" alt="gym5"/>
                  </div>
                  <div className="carousel-item">
                    <img src={gym6} className="d-block w-100" alt="gym6"/>
                  </div>
                  <div className="carousel-item">
                    <img src={gym7} className="d-block w-100" alt="gym7"/>
                  </div>
                  <div className="carousel-item">
                    <img src={gym8} className="d-block w-100" alt="gym8"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="col-12">
            <h2 className="text-center mt-5 mb-3">WORLD CLASS <big><b className="text-warning">SUPPORT</b></big></h2>
          </div>
          <hr />
          <small><p className="text-muted text-center">With 50 years in the industry and 30+ years in franchising, we know what it takes to be a successful franchisor. Our depth of knowledge and commitment to helping our Franchisees succeed have helped us create training and support systems that are unparalleled in the industry. We provide extensive training with hands-on field operational support that starts the moment you become a franchisee. </p></small>
          <div className="row">
            <div className="col-md-6 p-5">
              <div className="shadow" style={{width:'100%'}}>
                <img src={bannerBig} className="card-img-top" alt="bannerBig"/>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <p className="card-text"><i className="fad fa-check-square text-dark"></i> Annual Convention</p>
                      <p className="card-text"><i className="fad fa-check-square text-dark"></i> Training Manuals</p>
                      <p className="card-text"><i className="fad fa-check-square text-dark"></i> FIT|INDIA's Connect Intranet</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <p className="card-text"><i className="fad fa-check-square text-dark"></i> Associate Training</p>
                      <p className="card-text"><i className="fad fa-check-square text-dark"></i> Brand Management</p>
                      <p className="card-text"><i className="fad fa-check-square text-dark"></i> Construction tools and models</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-5">
            <div className="card shadow" style={{width:'100%'}}>
                <img src={bannerSmall} className="card-img-top" alt="bannerSmall"/>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <p className="card-text"><i className="fad fa-check-square text-dark"></i> Online Marketing Asset Library</p>
                      <p className="card-text"><i className="fad fa-check-square text-dark"></i> Media Planning Tools</p>
                      <p className="card-text"><i className="fad fa-check-square text-dark"></i> Quarterly Launch Calls</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <p className="card-text"><i className="fad fa-check-square text-dark"></i> Branded Merchandise</p>
                      <p className="card-text"><i className="fad fa-check-square text-dark"></i> Exclusive Digital Content</p>
                      <p className="card-text"><i className="fad fa-check-square text-dark"></i> FIT|INDIA's Gym Fitness Institute</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Services;
