import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../context/auth/authContext'
import '../../CSS/Auth.css'



const Login = (props) => {

  const authContext = useContext(AuthContext);
  const { login, isAuthenticated } = authContext;

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user

    useEffect(()=> {
        if (isAuthenticated) {
          props.history.push('./setup');
          // eslint-disable-next-line
       }}, [isAuthenticated]);
    
        const onChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
       e.preventDefault();
        login(user)
    };
    
    return (
      <div className="appContainer loginContainer">
          <form className="form-signin" onSubmit={onSubmit}>
          <div className="logo_container"></div>
            <h1 className="h3 mb-3 font-weight-normal">Authorized Users</h1>
            <label htmlFor="inputEmail" className="sr-only">Email</label>
            <input type="email" id="inputEmail" className="form-control" name="email" placeholder="Email" required autoFocus value={email} onChange={onChange}/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" name="password" placeholder="Password" required value={password} onChange={onChange}/>
            <div className="checkbox mb-3">
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            <p className="mt-5 mb-3 text-muted"> Fence Kings &copy;2020</p>
          </form>
        </div>
  )};
  
  export default Login
  