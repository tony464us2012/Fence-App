import React, { useContext } from 'react'
import SetupContext from '../context/setup/setupContext'
import '../../CSS/Estimate.css'

const Estimate = () => {

    const setupcontext = useContext(SetupContext);
    const { estimate, savedContact } = setupcontext;
    const { firstName } = savedContact;
    function getDate(){
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      
        var today = new Date();
        var dd    = String(today.getDate()).padStart(2, '0');
        var mm    = months[today.getMonth()];
        var yyyy  = today.getFullYear();
      
        today = mm + "-" + dd + "-" + yyyy;
        return today;
      }

    return (
        <div className="estimate-container">
            <div className="estimate-title-container">
                <div className="estimate_logo"></div>
                <h2 className="estimate-title">Fence Kings</h2>
                <h2 className="estimateTitle">Good News {firstName}! We value our customers and provide them with competitive prices. We are also pleased to provide you an estimate of <i>&#36;{estimate}</i>. Please call us at 305-225-4647 for more information regarding this quote or any further questions.</h2>
                 <div className="estimate-btn-container">
                 <a className="btn btn-dark estimate-btn" href="https://myfencekings.com">Home Page</a>
                 </div>
                <p>Disclaimer: This estimate is subject to change if changes and/or features are added or removed from the original price. This estimate is valid for up to 14 days from today {getDate()}.</p>
            </div>
        </div>
          )
}

export default Estimate
