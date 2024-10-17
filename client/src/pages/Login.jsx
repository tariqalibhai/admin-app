
import { useState,react } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Store/Auth";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(user);
      alert("Form Submitted")
      const response =await fetch('http://localhost:5000/api/auth/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      })
      if (response.ok) {
        const responseData = await response.json();
        storeTokenInLS(responseData.token)
        alert("registration successful");
        setUser({ email: "", password: "" });
        navigate('/admin');
        console.log(responseData);
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.log(error)
    }
  };



  return (
    <>
      <section className="section-login">
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image log-img">
                <img
                  src="/images/login.png"
                  alt="Let's Fill the Login Form"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="login-form">
                <h1 className="main-heading mb-3">Login Page</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};