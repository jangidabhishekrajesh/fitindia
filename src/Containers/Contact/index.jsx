import { useState } from "react";

let Contact = () => {

  const[form, setForm] = useState({
    name:"",
    email:"",
    subject:"",
    phone:"",
    address:""
  })
  const [errors, setErrors] = useState({
    nameErr:"",
    emailErr:"",
    subjectErr:"",
    phoneErr:"",
    addressErr:""
})
const handleChange = (e) =>{
  setForm({...form,[e.target.name]:e.target.value})
}
const validate = () =>{
  let nameErr = '';
  let emailErr = '';
  let subjectErr ='';
  let phoneErr = '';
  let addressErr = '';

  if(form.name.length <= 3){
    nameErr = "This is required!"
  }
  if (!form.email.includes('@')){
      emailErr = "Enter an valid email!"
  }
  if(form.subject.length <= 8){
    subjectErr = "This is required! "
}
  if(form.phone.length <= 10){
      phoneErr = "Phone should be minimum 10 digits! "
  }
  if(form.address.length <= 6){
    addressErr = "This is required! "
}
  if (nameErr||emailErr||subjectErr||phoneErr||addressErr){
      setErrors({...errors, nameErr, emailErr, subjectErr, phoneErr, addressErr})
      return false;
  }
  else{
      setErrors({...errors, nameErr, emailErr, subjectErr, phoneErr, addressErr}) 
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
      <div id="contactFormImage">
        <div className="container">
          <h2 className="text-center text-dark p-5">Get In Touch</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="card shadow align-item-center p-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12"> <input name="name" type="text" placeholder="Your Name" className="form-control" onChange={handleChange} /></div>
                    <p className="text-danger">{errors.nameErr}</p>
                    <div className="col-12"> <input name="email" type="text" placeholder="Your Email" className="form-control" onChange={handleChange}/></div>
                    <p className="text-danger">{errors.emailErr}</p>
                    <div className="col-12 mt-4"> <input name="subject" type="text" placeholder="Subject" className="form-control" onChange={handleChange}/></div>
                    <p className="text-danger">{errors.subjectErr}</p>
                  </div>
                </div>
                <div className="col md-6">
                  <div className="row">
                  <div className="col-12"> <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Contact No." className="form-control" onChange={handleChange}/></div>
                  <p className="text-danger">{errors.phoneErr}</p>
                  <div className="col-12"> <input name="address" type="text" placeholder="Your Address" className="form-control" onChange={handleChange}/></div>
                  <p className="text-danger">{errors.addressErr}</p>
                  <div className="col-12 mt-1 form-floating">
                      <textarea className="form-control" id="addText"></textarea>
                      <label htmlFor="addText">Your Message</label>
                  </div>
                  </div>
                </div>
              </div>
              <div className="form-check mt-4">
                <input className="form-check-input" type="checkbox" value="" id="flexCheck"/>
                <label className="form-check-label text-info" htmlFor="flexCheck">
                <b>Update Us for new Offers</b>
                </label>
              </div>
              <button className="btn btn-info mt-2">Click to touch</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
