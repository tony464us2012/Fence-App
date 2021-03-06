import React from 'react'

const styles= {
    backgroundColor: 'ivory',
    padding: '2rem',
    marginTop: '6rem'
    };



const UpdateSuccess = (props) => {
    
    const gotoEstimate = async (e) => {
    props.history.push('./');
     };
    
    return (
        <div className="setupContainer successContainer"  >
            <div className="setup_logo"></div>
            <form id="setupForm" style={styles}>
            <h2 className="success-title">Successfully updated</h2>
            <div className="success-btn-container">
            <button className="btn btn-light border-dark estimate-btn" onClick={ () => gotoEstimate()}>Go To Estimate</button>
            <a className="btn btn-dark estimate-btn" href="https://myfencekings.com">Home Page</a>
            </div>
            </form>
        </div>
    )
}

export default UpdateSuccess
