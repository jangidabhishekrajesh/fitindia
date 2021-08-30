import { Link } from "react-router-dom";
import { useState } from "react";

let Corporate = () =>{
   const[form, setForm] = useState({
     name:'',
     email:'',
     phone:'',
     company:'',
     companyPhone:'',
     address:'',
     city:''
   })
   const[errors, setErrors] = useState({
    nameErr:'',
    emailErr:'',
    phoneErr:'',
    companyErr:'',
    companyPhoneErr:'',
    addressErr:'',
    cityErr:''
  })
  const handleChange = (e) =>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
}
const validate = () =>{
  let nameErr = '';
  let emailErr = '';
  let phoneErr = '';
  let companyErr = '';
  let companyPhoneErr = '';
  let addressErr = '';
  let cityErr = '';

  if(form.name.length <= 3){
    nameErr = "This is required!"
  }
  if (!form.email.includes('@')){
      emailErr = "Enter an valid email!"
  }
  if(form.phone.length <= 10){
      phoneErr = "Phone should be minimum 10 digits! "
  }
  if(form.company.length <= 3){
    companyErr = "This is required!"
  }
  if(form.companyPhone.length <= 3){
    companyPhoneErr = "This is required!"
  }
  if(form.address.length <= 3){
    addressErr = "This is required!"
  }
  if(form.city.length <= 3){
    cityErr = "This is required!"
  }
  if (nameErr||emailErr||phoneErr||companyErr||companyPhoneErr||addressErr||cityErr){
      setErrors({...errors, nameErr, emailErr, phoneErr, companyErr, companyPhoneErr, addressErr, cityErr})
      return false;
  }
  else{
      setErrors({...errors, nameErr, emailErr, phoneErr, companyErr, companyPhoneErr, addressErr, cityErr}) 
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
      <div className="container">
        <h1 className="container text-center text-dark p-2 mt-5"> <b className="text-warning">FIT | INDIA's</b> GYM CORPORATE WELLNESS PROGRAM</h1> 
        <div className="shadow p-5 mt-4">
          <p className="text-muted">
            <b> Why Physical Fitness Matters</b>
            <br />
            <br />
            A Sedentary Lifestyle And Elevated Stress Levels Are Not Uncommon In Corporate Executives. Insufficient Physical Activity Leads To A Decline In Energy, Stamina And Health, Which Adversely Affects Productivity And Performance. 
            <br />
            <br />
            Aside From Reducing The Risk Of Heart Disease, High Blood Pressure, High Cholesterol, Stroke, Type 2 Diabetes And Certain Types Of Cancer, Regular Exercise Keeps You Energised And Helps You Carry Out Your Daily Activities More Efficiently. 
            <br />
            <br />
            <b>Why Corporate Wellness Programs</b> 
            <br />
            <br />
            Corporate Wellness Programs Not Only Serve To Improve Output, But Also To Enhance Employee Loyalty. They Help Strengthen Team Spirit, Boost Confidence And Workforce Morale.
            <br />
            <br />
            At FIT | INDIA's GYM, We Understand Both The Toll Corporate Lifestyle Can Take On Health, And The Benefits Of Establishing A Personal Fitness Regime. With The Ultimate Goal Of Spreading Fitness Through Well-Rounded Organisations, We Have Developed A Range Of Solutions And Services To Meet The Fitness Requirements Of Corporate Employees.
          </p>
          <p className="text-muted">
            <b>To View FIT | INDIA GYM List, </b><Link to="/signin" style={{color:"orange"}}>View List.</Link>
          </p>
        </div> 
        <h2 className="container text-dark mt-4">REQUEST MORE INFORMATION ABOUT OUR CORPORATE WELLNESS PROGRAM</h2>
        <div className="col-12 text-center mb-5">
        
            <button type="button" className="btn btn-outline-warning mt-4" data-bs-toggle="modal" data-bs-target="#btnRegister">
              Register
            </button>

            <div className="modal fade" id="btnRegister" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="btnRegisterLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header bg-warning">
                    <h5 className="modal-title" id="btnRegisterLabel">Intrested in our corporate solutions?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form className="row g-3" onSubmit={handleSubmit} noValidate>
                      <div className="col-md-6">
                        <input name="name" type="text" className="form-control" id="inputText" placeholder="Your Name" onChange={handleChange}/>
                        <p className="text-danger">{errors.nameErr}</p>
                      </div>
                      <div className="col-md-6">
                        <input name="email" type="email" className="form-control" id="inputEmail" placeholder="Your Email" onChange={handleChange}/>
                        <p className="text-danger">{errors.emailErr}</p>
                      </div>
                      <h5 className="text-dark text-xs bg-warning p-2">Company Info</h5>
                      <div className="col-md-6">
                        <input name="company" type="text" className="form-control" id="inputText1" placeholder="Company Name" onChange={handleChange}/>
                        <p className="text-danger">{errors.companyErr}</p>
                      </div>
                      <div className="col-md-6">
                        <input name="companyPhone" type="Tel" className="form-control" id="inputTel1" placeholder="Phone Number" onChange={handleChange}/>
                        <p className="text-danger">{errors.companyPhoneErr}</p>
                      </div>
                      <div className="col-md-4">
                        <input name="address" type="text" className="form-control" id="inputAddress" placeholder="Address" onChange={handleChange}/>
                        <p className="text-danger">{errors.addressErr}</p>
                      </div>
                      <div className="col-md-4">
                        <input name="city" type="text" className="form-control" id="inputCity" placeholder="Mumbai" onChange={handleChange}/>
                        <p className="text-danger">{errors.cityErr}</p>
                      </div>
                      <div className="col-md-4">
                        <input className="form-control" type="text" name="stateName" id="stateName" placeholder="Enter your state" />
                      </div>
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label htmlFor="floatingTextarea">Message</label>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-warning">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      </>
    );
  }

export default Corporate;
