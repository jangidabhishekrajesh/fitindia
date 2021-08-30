import { useState } from "react";
import { Link } from "react-router-dom";

let Password = () =>{
    const[form,setForm] = useState({
        email : '',
    })
    const[errors, setErrors] = useState({
        emailErr : '',
    })
    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const validate = () =>{
        let emailErr = '';

        if(!form.email.includes('@')){
            emailErr = 'Enter an valid email.'
        }
        if(emailErr){
            setErrors({...errors,emailErr})
            return false;
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
                <h2 className="text-center text-light mt-5">PASSWORD RETRIEVAL</h2>
                <hr style={{color:"white"}}/>
                <div className="container p-5">
                    <div className="shadow card p-5 bg-light">
                        <form onSubmit={handleSubmit}>
                            <h6 className="text-dark text-center bg-warning p-3"><b>Enter your email address below and we will send you a link to reset your password.</b></h6>
                            <hr />
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-info">Email address</label>
                                <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
                                <p className="text-danger">{errors.emailErr}</p>
                            </div>
                            <button type="submit" className="btn btn-warning">Send</button>
                        </form>
                    </div>
                    <br />
                    <div className="col-md-12 text-center">
                        <Link to="/Signin" style={{textDecoration:"none"}} id="linkHover"><b>Sign In</b></Link>
                        &nbsp; &nbsp; &nbsp; 
                        <Link to="/Signup"style={{textDecoration:"none"}} id="linkHover"><b>Sign Up</b></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Password;