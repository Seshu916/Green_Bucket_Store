import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Components/Header";

const LoginSignup = () => {
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const mobileRef = useRef(null);
    const addressRef = useRef(null);
    const navigate = useNavigate()

    const [showLoginForm, setShowLoginForm] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            localStorage.clear();
        }, 1800000); 

        return () => clearTimeout(timeout);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password) {
            console.error('Email and password are required.');
            return;
        }


        try {
            const res = await axios.post('http://localhost:8080/loginUser', {
                email,
                password
            });

            const { token, userId, mailId } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            localStorage.setItem('mailId', mailId);

            emailRef.current.value = '';
            passwordRef.current.value = '';

            console.log('Login success');
            navigate("/")
        } catch (error) {
            console.error('Login error:', error);
            alert("Login failed invalid credentials")
        }
    };

    const toggleForms = () => {
        setShowLoginForm(!showLoginForm);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
    
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const mobile = mobileRef.current.value;
        const address = addressRef.current.value;
    
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*[@#$])[A-Za-z\d@$#]{8,}$/;

        const mobileRegex = /^\d{10}$/;

        const usernameregex = /^(?=.*[A-Za-z])[A-Za-z\s]{6,}$/;
    
        if (!username || !email || !password || !mobile || !address) {
            alert('All fields are required.');
            return;
        }
    
        if (!passwordRegex.test(password)) {
            alert("Password should contain at least 8 characters with one special character of @, #, or $.");
            return;
        }

        if (!mobileRegex.test(mobile)) {
            alert("Mobile number should contain exactly 10 digits.");
            return;
        }

        if(!usernameregex.test(username)){
            alert("Username must contain atleat 6 alphabetical characters");
            return;
        }
    
        try {
            const res = await axios.post('http://localhost:8080/registerUser', {
                username,
                email,
                password,
                mobile,
                address
            });
    
            alert("Registration successful!!");
            navigate("/loginsignup");
            console.log('Registration successful:', res.data);
    
            usernameRef.current.value = '';
            passwordRef.current.value = '';
            mobileRef.current.value = '';
            addressRef.current.value = '';
            emailRef.current.value = '';
    
            setShowLoginForm(true);
    
        } catch (error) {
            console.error('Registration error:', error);
    
            if (error.response) {
                const { data } = error.response;
                if (data) {
                    alert(data);
                } else {
                    alert('Registration failed. Please try again.');
                }
            } else {
                alert('Registration failed. Please check your internet connection and try again.');
            }
        }
    };
    return (
        <>
        <section className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
            <div className="container">
                <div className="row gx-lg-5 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card">
                            <div className="card-body py-5 px-md-5">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h1 style={{ color: "#7ED957" }}>GreenBasket</h1>
                                    <button className="btn" onClick={toggleForms}>
                                        {showLoginForm ? <h5>Login</h5> : <h5>Register</h5>}
                                    </button>
                                </div>

                                {showLoginForm ? (
                                    <form onSubmit={handleLogin}>
                                       <h4>Login</h4>
                                         <div className="mb-3">
                                             <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                             <input type="email" className="form-control" id="exampleInputEmail1" ref={emailRef} placeholder="Enter your email" />
                                         </div>
                                         <div className="mb-3">
                                             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                             <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} placeholder="Enter password" />
                                         </div>
                                         <button type="submit" className="btn btn-primary">Login</button>
                                         <p className="mt-3">Don't have an account? <Link to="#" onClick={toggleForms} style={{textDecoration:'none'}}>Register here</Link></p>
                                    </form>
                                ) : (
                                    <form onSubmit={handleRegister}>
                                        <h4>Register</h4>
                                         <div className="mb-3">
                                             <label htmlFor="exampleInputName1" className="form-label">Username</label>
                                             <input type="text" className="form-control" id="exampleInputName1" ref={usernameRef} placeholder="Enter your username" />
                                         </div>                                         <div className="mb-3">
                                             <label htmlFor="exampleInputEmail2" className="form-label">Email</label>
                                             <input type="email" className="form-control" id="exampleInputEmail2" ref={emailRef} placeholder="Enter your email" />
                                         </div>
                                         <div className="mb-3">
                                             <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                                             <input type="password" className="form-control" id="exampleInputPassword2" ref={passwordRef} placeholder="Enter your password" />
                                         </div>
                                         <div className="mb-3">
                                             <label htmlFor="exampleInputMobile" className="form-label">Mobile</label>
                                             <input type="text" className="form-control" id="exampleInputMobile" ref={mobileRef} placeholder="Enter your mobile number" />
                                         </div>
                                         <div className="mb-3">
                                            <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                                             <input type="text" className="form-control" id="exampleInputAddress" ref={addressRef} placeholder="Enter your address" />
                                         </div>
                                         <button type="submit" className="btn btn-primary">Register</button>
                                         <p className="mt-3">Already have an account? <Link to="#" onClick={toggleForms} style={{textDecoration:'none'}}>Login here</Link></p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h1 className="my-5 display-3 fw-bold ls-tight">The best offers<br /><span className="text-primary">yet to come!!</span></h1>
                        <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                        We prioritize the goodness of fresh groceries, instant deliveries, and sanitized packaging to ensure a delightful shopping experience. We understand the importance of fresh produce in maintaining a healthy lifestyle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>);
};

export default LoginSignup;