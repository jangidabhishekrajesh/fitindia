import { useState } from "react";
import { Link } from "react-router-dom";


let Signup = () =>{
    const [form, setForm] = useState({
        fName : '',
        lName : '',
        email : '',
        password : '',
        rPassword : '',
        contact :'',
        cName :'',
    })
    const [errors, setErrors] = useState({
        fNameErr : '',
        lNameErr : '',
        emailErr : '',
        passwordErr : '',
        rPasswordErr : '',
        contactErr : '',
        cNameErr : '',
        })
    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
        console.log(form)
    }
    const validate = () =>{
        let fNameErr ='';
        let lNameErr ='';
        let emailErr ='';
        let passwordErr ='';
        let rPasswordErr ='';
        let contactErr ='';
        let cNameErr ='';

        if (form.fName.length <3){
            fNameErr = 'First Name should be 3 characters!'
        }
        if(form.lName.length <3){
            lNameErr = 'Last Name should be 3 characters!'
        }
        if(!form.email.includes('@')){
            emailErr = 'Enter an valid email.'
        }
        if(form.password.length <8){
            passwordErr='Password should be 8 characters!'
        }
        if(form.rPassword.length <8){
            rPasswordErr = 'Password should be match'
        }
        if(form.contact.length <10){
            contactErr = 'Contact should be 10 digits!'
        }
        if(form.cName.length<3){
            cNameErr = 'Company Name should be 3 character!'
        }
        if(fNameErr||lNameErr||emailErr||passwordErr||rPasswordErr||contactErr||cNameErr){
            setErrors({...errors, fNameErr, lNameErr, emailErr, passwordErr, rPasswordErr, contactErr, cNameErr})
            return false;
        }
        else{
            setErrors({...errors, fNameErr, lNameErr, emailErr, passwordErr, rPasswordErr, contactErr, cNameErr})  
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

    return(
        <>
            <div className="bg-warning p-5">
                <h1 className="text-center bg-light p-3 rounded-bottom"><b className="text-warning">FIT</b>|<b className="text-success">INDIA</b></h1>
                <h2 className="text-center text-light mt-5">SIGN UP</h2>
                <hr style={{color:"white"}}/>
                <div className="container p-5">
                    <div className="shadow card p-5 bg-light">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label text-info">First Name</label>
                                        <input name="fName" type="text" className="form-control" id="firstName" aria-describedby="textHelp" onChange={handleChange}/>
                                        <p className="text-danger">{errors.fNameErr}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label text-info">Last Name</label>
                                        <input name="lName" type="text" className="form-control" id="lastName" aria-describedby="textHelp" onChange={handleChange}/>
                                        <p className="text-danger">{errors.lNameErr}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-info">Email address</label>
                                <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
                                <p className="text-danger">{errors.emailErr}</p>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword6" className="col-form-label text-info">Password</label>
                                <input name="password" type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" onChange={handleChange}/>
                                <p className="text-danger">{errors.passwordErr}</p>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword" className="col-form-label text-info">Retype-Password</label>
                                <input name="rPassword" type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpInline" onChange={handleChange}/>
                                <p className="text-danger">{errors.rPasswordErr}</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tel" className="form-label text-info">Contact No.</label>
                                <input name="contact" type="tel" className="form-control" id="tel" aria-describedby="telHelp" onChange={handleChange}/>
                                <p className="text-danger">{errors.contactErr}</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label text-info">Gender</label>
                                <select id="inputGender" className="form-select">
                                <option selected>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="companyName" className="form-label text-info">Company Name <small>(Optional)</small></label>
                                <input name="cName" type="text" className="form-control" id="companyName" aria-describedby="textHelp" onChange={handleChange}/>
                                <p className="text-danger">{errors.cNameErr}</p>
                            </div>
                            <button type="submit" className="btn btn-outline-warning">Let's Start!</button>
                        </form>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/Signin"style={{textDecoration:"none"}} id="linkHover">Already have an account, <b>Sign In?</b></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup;