import { useState } from "react";
import { Link } from "react-router-dom";

let Signin = () => {

    const [form, setForm] = useState({
        email : "",
        password : ""
    })
    const [errors, setErrors] = useState({
        emailErr :'',
        passwordErr :''
    })
    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const validate = () =>{
        let emailErr = '';
        let passwordErr = '';

        if (!form.email.includes('@')){
            emailErr = "Enter an valid email!"
        }
        if(form.password.length <= 8){
            passwordErr = "Password should be minimum 8 characters! "
        }
        if (emailErr||passwordErr){
            setErrors({...errors, emailErr, passwordErr})
            return false;
        }
        else{
            setErrors({...errors, emailErr, passwordErr}) 
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
                <h2 className="text-center text-light mt-5">SIGN IN</h2>
                <hr style={{color:"white"}}/>
                <div className="container p-5">
                    <div className="shadow card p-5 bg-light">
                        <form onSubmit={handleSubmit} noValidate>
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
                            <button type="submit" className="btn btn-warning">Sign In</button>
                        </form>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/Password" style={{textDecoration:"none"}} id="linkHover"> Forgot <b>Password?</b></Link>
                        </div>
                        <div className="col-md-6">
                            <Link to="/Signup"style={{textDecoration:"none"}} id="linkHover">Don't have an account, <b>Sign Up?</b></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signin;