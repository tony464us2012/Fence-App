import React, { useState, useContext, useEffect } from 'react'
import SetupContext from '../context/setup/setupContext'
import '../../CSS/Main.css'

const ContactInfo = (props) => {

    const setContext = useContext(SetupContext);
    
    const { putContact, getSetup, stage2, savedContact } = setContext;

    useEffect(() => {
        getSetup();
        if (stage2) {
          setContact({
            firstName: savedContact.firstName, 
            lastName: savedContact.lastName, 
            phone: savedContact.phone,
            email: savedContact.email, 
            address: savedContact.address, 
            city: savedContact.city, 
            state: savedContact.state,
            zip: savedContact.zip
          })
        } else {
          setContact({
            firstName: '', 
            lastName: '', 
            phone: '',
            email: '', 
            address: '', 
            city: '', 
            state: '',
            zip: ''
          })
        }
        // eslint-disable-next-line
    },[stage2, savedContact])

    const [contact, setContact] = useState({
        firstName: '', 
        lastName: '', 
        phone: '',
        email: '', 
        address: '', 
        city: '', 
        state: '',
        zip: ''
    });


    const onSubmit = (e) => {
        e.preventDefault();
        putContact(contact);
        props.history.push('/info')
    }

    const adminButton = () => {
        props.history.push('/login')
    }

    const onChange = (e) =>{
        setContact({...contact, [e.target.name]: e.target.value});};


    return (
        <div className="appContainer contactContainer">
       <form className="contactForm" onSubmit={onSubmit}>
         <h4 className="infoTitle">Get A Free Estimate</h4>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="firstName">First Name</label>
      <input type="text" onChange={onChange} name="firstName" className="form-control" id="firstName" value={contact.firstName}  required/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="lastName">Last Name</label>
      <input type="text" onChange={onChange} name="lastName" className="form-control" id="lastName" value={contact.lastName} required/>
    </div>
  </div>
  <div className="form-row">
  <div className="form-group col-md-6">
      <label htmlFor="email">Email</label>
      <input type="email" onChange={onChange} name="email" className="form-control" id="email" value={contact.email} />
    </div>
  <div className="form-group col-md-6">
      <label htmlFor="phone">Phone Number</label>
      <input type="phone" onChange={onChange} name="phone" className="form-control" id="phone" value={contact.phone} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" onChange={onChange} name="address" className="form-control" id="inputAddress" placeholder="1234 Main St" value={contact.address}/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" onChange={onChange} name="city" className="form-control" id="inputCity" value={contact.city} />
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <select id="inputState" name="state" onChange={onChange}  className="form-control" value={contact.state} >
      <option value= ' '> Please select your state</option>
      <option>Alabama</option>
      <option>Alaska</option>
      <option >Arizona</option>
      <option >Arkansas</option>
      <option >California</option>
      <option >Colorado</option>
      <option >Connecticut</option>
      <option >Delaware</option>
      <option >District of Columbia</option>
      <option> Florida</option>
      <option >Georgia</option>
      <option >Hawaii</option>
      <option >daho</option>
      <option >Illinois</option>
      <option >Indiana</option>
      <option >Iowa</option>
      <option> Kansas</option>
      <option >Kentucky</option>
      <option >Louisiana</option>
      <option>Maine</option>
      <option >Maryland</option>
      <option> Massachusetts</option>
      <option >Michigan</option>
      <option >Minnesota</option>
      <option>Mississippi</option>
      <option>Missouri</option>
      <option>Montana</option>
      <option>Nebraska</option>
      <option>Nevada</option>
      <option>New Hampshire</option>
      <option>New Jersey</option>
      <option>New Mexico</option>
      <option>New York</option>
      <option>North Carolina</option>
      <option>North Dakota</option>
      <option>Ohio</option>
      <option>Oklahoma</option>
      <option>Oregon</option>
      <option>Pennsylvania</option>
      <option>Rhode Island</option>
      <option>South Carolina</option>
      <option>South Dakota</option>
      <option>Tennessee</option>
      <option>Texas</option>
      <option> Utah</option>
      <option>Vermont</option>
      <option>Virginia</option>
      <option >Washington</option>
      <option >West Virginia</option>
      <option>Wisconsin</option>
      <option >Wyoming</option>

      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" name="zip" onChange={onChange} className="form-control" id="inputZip" value={contact.value} />
    </div>
  </div>
  
  <button type="submit" className="btn btn-warning contact-btn" style={{color: 'white', fontWeight: 500}}>Next</button>
</form>
        <button className="adminButton" onClick={() => adminButton()}>Admin</button>
        </div>
    )
}


export default ContactInfo
