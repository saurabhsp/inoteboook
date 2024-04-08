import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword:""})
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password}= credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     },
     body: JSON.stringify({name, email, password})
    });
    const json = await response.json();
    console.log(json)
    if (json.success){
      //Save the auth token and redirect 
      localStorage.setItem('token', json.authtoken)
      navigate("/")
      props.showAlert("Account Created Successfully" , "success")

    }
    else{
      props.showAlert("Invalid Credentials","danger" )
    }
  };

  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Welcome to Signup</h1>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            onChange={onChange}
            className="form-label"
          >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={onChange}
            name="email"
            aria-describedby="emailHelp"
            
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={onChange}
            id="password"
            name="password"
            required
            minLength={8}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            onChange={onChange}
            className="form-control"
            id="cpassword"
            name="cpassword"
            required
            minLength={8}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
