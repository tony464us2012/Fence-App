import React from 'react'

const styles= {
    backgroundColor: 'ivory',
    padding: '2rem',
    marginTop: '6rem'
    };
const styles2= {
    height: '100vh'
};


const UpdateSuccess = (props) => {
    
    const gotoEstimate = async (e) => {
    props.history.push('./');
     };
    
    return (
        <div className="setupContainer" >
            <div className="setup_logo"></div>
            <form id="setupForm" style={styles}>
            <h2 className="success-title">Successfully updated</h2>
            <div className="success-btn-container">
            <a className="btn btn-light border-dark estimate-btn" onClick={ () => gotoEstimate()}>Go To Estimate</a>
            <a className="btn btn-dark estimate-btn" href="https://myfencekings.com">Home Page</a>
            </div>
            </form>
        </div>
    )
}

export default UpdateSuccess
