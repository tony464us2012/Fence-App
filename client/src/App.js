import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from './components/context/auth/authState';
import SetupState from './components/context/setup/setupState';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Main from './components/pages/Main';
import Setup from './components/pages/Setup';
import Estimate from './components/pages/Estimate';
import SuccessUpdate from './components/pages/UpdateSuccess';
// import PrivateRoute from './components/routes/PrivateRoute';
// import setAuthToken from './components/utils/setAuthToken';
import ContactInfo from './components/pages/ContactInfo';
import 'bootstrap/dist/css/bootstrap.css';
import './CSS/Main.css'
// import SetupContext from './components/context/setup/setupContext'


function App() {
 


  return (
    <AuthState>
      <SetupState>
        <Router>
          <Switch>
            <Route path='/' exact component={ContactInfo} />
            <Route path='/info' exact component={Main} />
            <Route path='/estimate' exact component={Estimate} />
            <Route path='/login' exact component={Login} />
            <Route path='/setup' exact component={Setup} />
            <Route path='/register' exact component={Register} />
            <Route path='/successupdate' exact component={SuccessUpdate} />
          </Switch>
        </Router>
      </SetupState>
</AuthState>
  )
}

export default App

