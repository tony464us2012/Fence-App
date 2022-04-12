import React, { useState, Fragment, useContext } from 'react'
import '../../CSS/Main.css'
import SetupContext from '../context/setup/setupContext'


const Main = (props) => {
    const setupContext = useContext(SetupContext);
    
    const { savedContact, postEstimate, setupPrices } = setupContext;
    

    const [estimate, setEstimate ] = useState({
        type: '',
        height: '',
        footage: '',
        personal_gates: '',
        sliding_gate1: '',
        sliding_gate2: ''
    });
    const { type, height, footage, personal_gates, sliding_gate1, sliding_gate2 } = estimate;
    const { firstName, lastName, email, phone, address, city, state, zip } = savedContact;
    
    const customerInfo = {contact: {firstName, lastName, email, phone, address, city, state, zip}, fenceInfo: { type, height, footage, personal_gates, sliding_gate1, sliding_gate2}, prices: {setupPrices}};
    
    const onChange = (e) =>{
        setEstimate({...estimate, [e.target.name]: e.target.value});
    };
     const onSubmit = (e) => {
      e.preventDefault();
      postEstimate(customerInfo);
      props.history.push('/estimate')
                }
    return (
        <div className="appContainer contactContainer">
        <form className="contactForm" onSubmit={onSubmit}>
                <h4 className="typeTitle">Type Of Fence</h4>
                    <div className="fenceGrid">
                        <div className="gridItem">
                            <input type="radio" id="chainlink" name="type" onChange={onChange} value="chainlink" checked={ type === "chainlink" }/> 
                            <label htmlFor="chainlink">Chainlink <br/><img src={require('../../Assests/background.jpg')} alt="chainlink fence"/></label>
                        </div>
                        <div className="gridItem">
                            <input type="radio" id="picket" name="type" onChange={onChange} value="picket" checked={ type === "picket" } />
                            <label htmlFor="picket">Picket <br/><img src={require('../../Assests/picket.JPG')} alt="picket fence"/></label>
                        </div>
                        <div className="gridItem">
                            <input type="radio" id="aluminum_picket" name="type" onChange={onChange} value="aluminum_picket" checked={ type ==="aluminum_picket" } /> 
                            <label htmlFor="aluminum_picket">Horizontal<br/><img src={require('../../Assests/project-main.PNG')} alt="aluminum picket" /></label>
                        </div>
                        <div className="gridItem">
                             <input type="radio" id="wood" name="type" onChange={onChange} value="wood" checked={ type === "wood" } /> 
                            <label htmlFor="wood">Wood<br/><img src={require('../../Assests/wood.jpg')} alt="wood fence"/></label>
                        </div>
                        <div className="gridItem">
                            <input type="radio" id="metal" name="type" onChange={onChange} value="metal" checked={ type === "metal" }/>
                            <label htmlFor="metal">Metal<br/><img src={require('../../Assests/Metal2.jpg')} alt="metal fence"/></label>
                        </div>
                        <div className="gridItem">
                            <input type="radio" id="pvc" name="type" onChange={onChange} value="pvc" checked={ type === "pvc" }/> 
                            <label htmlFor="pvc">PVC<br/><img src={require('../../Assests/pvc.jpg')} alt="pvc fence"/></label>

                        </div>
                    </div>
                    { type === "chainlink" || type === "picket" || type === "aluminum_picket" ? 
                    <Fragment>
                    <h6>Height</h6>
                    <select id="height" name="height"  onChange={onChange}>
                        <option>Choose Height</option>
                        <option value="4" checked= { height === '4' }>4 Feet</option>
                        <option value="5" checked= { height === '5'}>5 Feet</option>
                        <option value="6" checked= { height === '6'}>6 Feet</option>
                    </select>
                    </Fragment> :
                    type === "wood" ?
                    <Fragment>
                        <h6>Height</h6>
                        <select id="height" name="height" onChange={onChange}>
                        <option>Choose Height</option>
                        <option value="3" checked= { height === '3' }>3 Feet</option>
                        <option value="4" checked= { height === '4' }>4 Feet</option>
                        <option value="6" checked= { height === '6' }>6 Feet</option>
                        </select>
                    </Fragment> :
                    type === "dura" || type === "pvc" || type === "metal" ?
                    <Fragment>
                        <h6>Height</h6>
                        <select id="height" name="height" onChange={onChange}>
                        <option>Choose Height</option>
                        <option value="6" checked= { height === '6' }>6 Feet</option>
                        </select>
                    </Fragment> : ''
                }
                <h6>Total Linear Footage (*Gates Included) </h6>
                <input type="number" id="footage" name="footage" min="10" max="5000" placeholder="Enter Amount" required onChange={onChange} value={footage}/> Feet {' '}<br/>
                <h4 className="typeTitle">Gates</h4>
                <h6>Personal Gate(s)</h6>
                <select id="personal_gates" className="custom-select" name="personal_gates" onChange={onChange}>
                        <option value="0">Add Personal Gate(s)</option>
                        <option value="1" checked= { personal_gates === '1' }>1 Gate</option>
                        <option value="2" checked= { personal_gates === '2'}>2 Gates</option>
                        <option value="3" checked= { personal_gates === '3'}>3 Gates</option>
                    </select>
                <p className="personal_gate_info">*Personal gates are standard 4 feet in width and swinging.</p>
                <h6>Sliding Gate</h6>
                <select id="sliding_gate1" className="custom-select" name="sliding_gate1" onChange={onChange}>
                        <option>Add Sliding Gate</option>
                        <option value="5-9" checked= { sliding_gate1 === '5-9' }>5 to 9 Feet Sliding Gate</option>
                        <option value="10-14" checked= { sliding_gate1 === '10-14'}>10 to 14 Feet Sliding Gate</option>
                        <option value="15-19" checked= { sliding_gate1 === '15-19'}>15 to 19 Feet Sliding Gate</option>
                        <option value="20-24" checked= { sliding_gate1 === '20-24'}>20 to 24 Feet Sliding Gate</option>
                    </select>
                { sliding_gate1 ? 
                 <select id="sliding_gate2" className="custom-select" name="sliding_gate2" onChange={onChange}>
                         <option>Add Another Sliding Gate?</option>
                         <option value="5-9" checked= { sliding_gate2 === '5-9' }>5 to 9 Feet Sliding Gate</option>
                         <option value="10-14" checked= { sliding_gate2 === '10-14'}>10 to 14 Feet Sliding Gate</option>
                         <option value="15-19" checked= { sliding_gate2 === '15-19'}>15 to 19 Feet Sliding Gate</option>
                         <option value="20-24" checked= { sliding_gate2 === '20-24'}>20 to 24 Feet Sliding Gate</option>
                     </select> : ''
            }
                <div className="btn-container">
                    <button className="btn btn-danger previous-btn" onClick={ () => props.history.push('/')} style={{fontWeight: 500}}>Previous</button>
                    <input type="submit" className="btn btn-warning" style={{fontWeight: 500, color: 'white'}} value="Get Quote"/>
                </div>
            </form>
        </div>
    )
}

export default Main
