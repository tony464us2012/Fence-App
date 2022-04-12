import React, { useState, useContext, useEffect, Fragment } from 'react';
import SetupContext from '../context/setup/setupContext';
import AuthContext from '../context/auth/authContext'
import axios from 'axios'
import Spinner from '../layout/Spinner'


const Setup = (props) => {
  
  const setupContext = useContext(SetupContext);
  const { updateSetup } = setupContext;

  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState({
    _id: '', 
    chainlink4: '', chainlink5: '', chainlink6: '', 
           picket4: '', picket5: '', picket6: '', 
           aluminumPicket4: '', aluminumPicket5: '', aluminumPicket6: '',
           wood3: '', wood4: '', wood6: '', 
           metal_fence6: '', 
           pvc6: '',
           chainlink4_personal: '', chainlink5_personal: '', chainlink6_personal: '',
           chainlink4_sliding_5_9: '', chainlink4_sliding_10_14: '', chainlink4_sliding_15_19: '', chainlink4_sliding_20_24: '',
           chainlink5_sliding_5_9: '', chainlink5_sliding_10_14: '', chainlink5_sliding_15_19: '', chainlink5_sliding_20_24: '',
           chainlink6_sliding_5_9: '', chainlink6_sliding_10_14: '', chainlink6_sliding_15_19: '', chainlink6_sliding_20_24: '',
           picket4_personal: '', picket5_personal: '', picket6_personal: '',
           picket4_sliding_5_9: '', picket4_sliding_10_14: '', picket4_sliding_15_19: '', picket4_sliding_20_24: '',
           picket5_sliding_5_9: '', picket5_sliding_10_14: '', picket5_sliding_15_19: '', picket5_sliding_20_24: '',
           picket6_sliding_5_9: '', picket6_sliding_10_14: '', picket6_sliding_15_19: '', picket6_sliding_20_24: '',
           aluminumPicket4_personal: '', aluminumPicket5_personal: '', aluminumPicket6_personal: '',
           aluminumPicket4_sliding_5_9: '', aluminumPicket4_sliding_10_14: '', aluminumPicket4_sliding_15_19: '', aluminumPicket4_sliding_20_24: '',
           aluminumPicket5_sliding_5_9: '', aluminumPicket5_sliding_10_14: '', aluminumPicket5_sliding_15_19: '', aluminumPicket5_sliding_20_24: '',
           aluminumPicket6_sliding_5_9: '', aluminumPicket6_sliding_10_14: '', aluminumPicket6_sliding_15_19: '', aluminumPicket6_sliding_20_24: '',
           wood3_personal: '', wood4_personal: '', wood6_personal: '',
           wood3_sliding_5_9: '', wood3_sliding_10_14: '', wood3_sliding_15_19: '', wood3_sliding_20_24: '',
           wood4_sliding_5_9: '', wood4_sliding_10_14: '', wood4_sliding_15_19: '', wood4_sliding_20_24: '',
           wood6_sliding_5_9: '', wood6_sliding_10_14: '', wood6_sliding_15_19: '', wood6_sliding_20_24: '', 
           metal6_personal: '',
           metal6_sliding_5_9:'', metal6_sliding_10_14: '', metal6_sliding_15_19: '', metal6_sliding_20_24: '',
           pvc6_personal: '',
           pvc6_sliding_5_9: '', pvc6_sliding_10_14: '', pvc6_sliding_15_19: '', pvc6_sliding_20_24: '', 
           __v: 0
  });

  
  useEffect(() => {
    async function Fetchdata () {
      const res = await axios.get('/api/setup');
      if (res) {
        setPrices(res.data);
        setLoading(false)
      } else {
        console.log(prices)
      }
    };
    Fetchdata();
    // eslint-disable-next-line
  }, []);

  const onChange = (e) =>{
    setPrices({...prices, [e.target.name]: e.target.value});
  };
  
  const onSubmit = async (e) => {
   e.preventDefault();
    updateSetup(prices);
    props.history.push('/successupdate');
    logout()
  };
  
  const styles= {
  backgroundColor: 'ivory',
  padding: '2rem'
  }
 
return (
  <Fragment>
    { loading ? 
      <div className="setupContainer spinnerContainer"><Spinner/></div> : 
          <div className="setupContainer">
            <div className="setup_logo"></div>
            <form method="POST" id="setupForm" style={styles} onSubmit={onSubmit}>
             <h2 className="setupTitle">Fences</h2>
             <h5>Chainlink</h5>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="chainlink4"  name="chainlink4" onChange={onChange} value={prices.chainlink4}  />
               <label htmlFor="chainlink4">4h $per foot</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="chainlink5" name="chainlink5" onChange={onChange} value={prices.chainlink5} />
               <label htmlFor="chainlink5">5h $per foot</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="chainlink6" name="chainlink6" onChange={onChange} value={prices.chainlink6} />
               <label htmlFor="chainlink6">6h $per foot</label>
             </div>
           </div>
             <h5>Picket</h5>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="picket4" name="picket4" onChange={onChange} value={prices.picket4} />
               <label htmlFor="picket4">4h $per foot</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="picket5" name="picket5" onChange={onChange} value={prices.picket5} />
               <label htmlFor="picket5">5h $per foot</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="picket6" name="picket6" onChange={onChange} value={prices.picket6} />
               <label htmlFor="picket6">6h $per foot</label>
               <span className="helper-text" data-error="Enter a valid number" data-success="Success"></span>
             </div>
           </div>
             <h5>Horizontal</h5>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket4" name="aluminumPicket4" onChange={onChange} value={prices.aluminumPicket4} />
               <label htmlFor="aluminumPicket4">4h $per foot</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket5" name="aluminumPicket5" onChange={onChange} value={prices.aluminumPicket5} />
               <label htmlFor="aluminumPicket5">5h $per foot</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket6" name="aluminumPicket6" onChange={onChange} value={prices.aluminumPicket6} />
               <label htmlFor="aluminumPicket6">6h $per foot</label>
             </div>
           </div>
             <h5>Wood</h5>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="wood3" name="wood3" onChange={onChange} value={prices.wood3} />
               <label htmlFor="wood3">3h $per foot</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="wood4" name="wood4" onChange={onChange} value={prices.wood4} />
               <label htmlFor="wood4">4h $per foot</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="wood6" name="wood6" onChange={onChange} value={prices.wood6} />
               <label htmlFor="wood6">6h $per foot</label>
             </div>
           </div>
             <h5>Metal</h5>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="metal_fence6" name="metal_fence6" onChange={onChange} value={prices.metal_fence6} />
               <label htmlFor="metal_fence6">6h $per foot</label>
             </div>
           </div>
             <h5>PVC</h5>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="pvc6" name="pvc6" onChange={onChange} value={prices.pvc6} />
               <label htmlFor="pvc6">6h $per foot</label>
             </div>
           </div>
           <h2 className="setupTitle">Gates</h2>
           <h5>Chainlink</h5>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="chainlink4_personal" name="chainlink4_personal" onChange={onChange} value={prices.chainlink4_personal} />
               <label htmlFor="chainlink4_personal">4h x 4w</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="chainlink5_personal" name="chainlink5_personal" onChange={onChange} value={prices.chainlink5_personal} />
               <label htmlFor="chainlink5_personal">5h x 4w</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="chainlink6_personal" name="chainlink6_personal" onChange={onChange} value={prices.chainlink6_personal} />
               <label htmlFor="chainlink6_personal">6h x 4w</label>
             </div>
           </div>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="chainlink4_sliding_5_9" name="chainlink4_sliding_5_9" onChange={onChange} value={prices.chainlink4_sliding_5_9} />
               <label htmlFor="chainlink4_sliding_5_9">4h x 5w to 9w Sliding</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="chainlink4_sliding_10_14" name="chainlink4_sliding_10_14" onChange={onChange} value={prices.chainlink4_sliding_10_14} />
               <label htmlFor="chainlink4_sliding_10_14">4h x 10w to 14w Sliding</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="chainlink4_sliding_15_19" name="chainlink4_sliding_15_19" onChange={onChange} value={prices.chainlink4_sliding_15_19} />
               <label htmlFor="chainlink4_sliding_15_19">4h x 15w to 19w Sliding</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="chainlink4_sliding_20_24" name="chainlink4_sliding_20_24" onChange={onChange} value={prices.chainlink4_sliding_20_24} />
               <label htmlFor="chainlink4_sliding_20_24">4h x 20w to 24w Sliding</label>
             </div>
           </div>
           <div className="setupGrid">
             <div className="setupGridItem">
                 <input type="number" id="chainlink5_sliding_5_9" name="chainlink5_sliding_5_9" onChange={onChange} value={prices.chainlink5_sliding_5_9} />
                 <label htmlFor="chainlink5_sliding_5_9">5h x 5w to 9w Sliding</label>
               </div>
               <div className="setupGridItem">
                 <input type="number" id="chainlink5_sliding_10_14" name="chainlink5_sliding_10_14" onChange={onChange} value={prices.chainlink5_sliding_10_14} />
                 <label htmlFor="chainlink5_sliding_10_14">5h x 10w to 14w Sliding</label>
               </div>
               <div className="setupGridItem">
                 <input type="number" id="chainlink5_sliding_15_19" name="chainlink5_sliding_15_19" onChange={onChange} value={prices.chainlink5_sliding_15_19} />
                 <label htmlFor="chainlink5_sliding_15_19">5h x 15w to 19w Sliding</label>
               </div>
               <div className="setupGridItem">
                 <input type="number" id="chainlink5_sliding_20_24" name="chainlink5_sliding_20_24" onChange={onChange} value={prices.chainlink5_sliding_20_24} />
                 <label htmlFor="chainlink5_sliding_20_24">5h x 20w to 24w Sliding</label>
               </div>
           </div>
           <div className="setupGrid">
             <div className="setupGridItem">
                 <input type="number" id="chainlink6_sliding_5_9" name="chainlink6_sliding_5_9" onChange={onChange} value={prices.chainlink6_sliding_5_9} />
                 <label htmlFor="chainlink6_sliding_5_9">6h x 5w to 9w Sliding </label>
               </div>
               <div className="setupGridItem">
                 <input type="number" id="chainlink6_sliding_10_14" name="chainlink6_sliding_10_14" onChange={onChange} value={prices.chainlink6_sliding_10_14} />
                 <label htmlFor="chainlink6_sliding_10_14">6h x 10w to 14w Sliding</label>
               </div>
               <div className="setupGridItem">
                 <input type="number" id="chainlink6_sliding_15_19" name="chainlink6_sliding_15_19" onChange={onChange} value={prices.chainlink6_sliding_15_19} />
                 <label htmlFor="chainlink6_sliding_15_19">6h x 15w to 19w Sliding</label>
               </div>
               <div className="setupGridItem">
                 <input type="number" id="chainlink6_sliding_20_24" name="chainlink6_sliding_20_24" onChange={onChange} value={prices.chainlink6_sliding_20_24} />
                 <label htmlFor="chainlink6_sliding_20_24">6h x 20w to 24w Sliding</label>
               </div>
           </div>
           <h5>Picket</h5>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="picket4_personal" name="picket4_personal" onChange={onChange} value={prices.picket4_personal} />
               <label htmlFor="picket4_personal">4h x 4w</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="picket5_personal" name="picket5_personal" onChange={onChange} value={prices.picket5_personal} />
               <label htmlFor="picket5_personal">5h x 4w</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="picket6_personal" name="picket6_personal" onChange={onChange} value={prices.picket6_personal} />
               <label htmlFor="picket6_personal">6h x 4w</label>
             </div>
           </div>
            <div className="setupGrid">
             <div className="setupGridItem">
                 <input type="number" id="picket4_sliding_5_9" name="picket4_sliding_5_9" onChange={onChange} value={prices.picket4_sliding_5_9} />
                 <label htmlFor="picket4_sliding_5_9">4h x 5w to 9w Sliding</label>
               </div>
             <div className="setupGridItem">
                 <input type="number" id="picket4_sliding_10_14" name="picket4_sliding_10_14" onChange={onChange} value={prices.picket4_sliding_10_14} />
                 <label htmlFor="picket4_sliding_10_14">4h x 10w to 14w Sliding</label>
               </div>
             <div className="setupGridItem">
                 <input type="number" id="picket4_sliding_15_19" name="picket4_sliding_15_19" onChange={onChange} value={prices.picket4_sliding_15_19} />
                 <label htmlFor="picket4_sliding_15_19">4h x 15w to 19w Sliding</label>
               </div>
             <div className="setupGridItem">
                 <input type="number" id="picket4_sliding_20_24" name="picket4_sliding_20_24" onChange={onChange} value={prices.picket4_sliding_20_24} />
                 <label htmlFor="picket4_sliding_20_24">4h x 20w to 24w Sliding</label>
               </div>
           </div>
           <div className="setupGrid">
           <div className="setupGridItem">
                 <input type="number" id="picket5_sliding_5_9" name="picket5_sliding_5_9" onChange={onChange} value={prices.picket5_sliding_5_9} />
                 <label htmlFor="picket5_sliding_5_9">5h x 5w to 9w Sliding</label>
               </div>
             <div className="setupGridItem">
                 <input type="number" id="picket5_sliding_10_14" name="picket5_sliding_10_14" onChange={onChange} value={prices.picket5_sliding_10_14} />
                 <label htmlFor="picket5_sliding_10_14">5h x 10w to 14w Sliding</label>
               </div>
             <div className="setupGridItem">
                 <input type="number" id="picket5_sliding_15_19" name="picket5_sliding_15_19" onChange={onChange} value={prices.picket5_sliding_15_19} />
                 <label htmlFor="picket5_sliding_15_19">5h x 15w to 19w Sliding</label>
               </div>
             <div className="setupGridItem">
                 <input type="number" id="picket5_sliding_20_24" name="picket5_sliding_20_24" onChange={onChange} value={prices.picket5_sliding_20_24} />
                 <label htmlFor="picket5_sliding_20_24">5h x 20w to 24w Sliding</label>
               </div>
           </div>
           <div className="setupGrid">
           <div className="setupGridItem">
                 <input type="number" id="picket6_sliding_5_9" name="picket6_sliding_5_9" onChange={onChange} value={prices.picket6_sliding_5_9} />
                 <label htmlFor="picket6_sliding_5_9">6h x 5w to 9w Sliding</label>
               </div>
             <div className="setupGridItem">
                 <input type="number" id="picket6_sliding_10_14" name="picket6_sliding_10_14" onChange={onChange} value={prices.picket6_sliding_10_14} />
                 <label htmlFor="picket6_sliding_10_14">6h x 10w to 14w Sliding</label>
               </div>
             <div className="setupGridItem">
                 <input type="number" id="picket6_sliding_15_19" name="picket6_sliding_15_19" onChange={onChange} value={prices.picket6_sliding_15_19} />
                 <label htmlFor="picket6_sliding_15_19">6h x 15w to 19w Sliding</label>
               </div>
             <div className="setupGridItem">
                 <input type="number" id="picket6_sliding_20_24" name="picket6_sliding_20_24" onChange={onChange} value={prices.picket6_sliding_20_24} />
                 <label htmlFor="picket6_sliding_20_24">6h x 20w to 24w Sliding</label>
               </div>
           </div>
           
           <h5>Aluminum Picket</h5>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket4_personal" name="aluminumPicket4_personal" onChange={onChange} value={prices.aluminumPicket4_personal} />
               <label htmlFor="aluminumPicket4_personal">4h x 4w</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket5_personal" name="aluminumPicket5_personal" onChange={onChange} value={prices.aluminumPicket5_personal} />
               <label htmlFor="aluminumPicket5_personal">5h x 4w</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket6_personal" name="aluminumPicket6_personal" onChange={onChange} value={prices.aluminumPicket6_personal} />
               <label htmlFor="aluminumPicket6_personal">6h x 4w</label>
             </div>
           </div>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket4_sliding_5_9" name="aluminumPicket4_sliding_5_9" onChange={onChange} value={prices.aluminumPicket4_sliding_5_9} />
               <label htmlFor="aluminumPicket4_sliding_5_9">4h x 5w to 9w Sliding</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket4_sliding_10_14" name="aluminumPicket4_sliding_10_14" onChange={onChange} value={prices.aluminumPicket4_sliding_10_14} />
               <label htmlFor="aluminumPicket4_sliding_10_14">4h x 10w to 14w Sliding</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket4_sliding_15_19" name="aluminumPicket4_sliding_15_19" onChange={onChange} value={prices.aluminumPicket4_sliding_15_19} />
               <label htmlFor="aluminumPicket4_sliding_15_19">4h x 15w to 19w Sliding</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket4_sliding_20_24" name="aluminumPicket4_sliding_20_24" onChange={onChange} value={prices.aluminumPicket4_sliding_20_24} />
               <label htmlFor="aluminumPicket4_sliding_20_24">4h x 20w to 24w Sliding</label>
             </div>
           </div>
           <div className="setupGrid">
           <div className="setupGridItem">
               <input type="number" id="aluminumPicket5_sliding_5_9" name="aluminumPicket5_sliding_5_9" onChange={onChange} value={prices.aluminumPicket5_sliding_5_9}  />
               <label htmlFor="aluminumPicket5_sliding_5_9">5h x 5w to 9w Sliding</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket5_sliding_10_14" name="aluminumPicket5_sliding_10_14" onChange={onChange} value={prices.aluminumPicket5_sliding_10_14} />
               <label htmlFor="aluminumPicket5_sliding_10_14">5h x 10w to 14w Sliding</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket5_sliding_15_19" name="aluminumPicket5_sliding_15_19" onChange={onChange} value={prices.aluminumPicket5_sliding_15_19} />
               <label htmlFor="aluminumPicket5_sliding_15_19">5h x 15w to 19w Sliding</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket5_sliding_20_24" name="aluminumPicket5_sliding_20_24" onChange={onChange} value={prices.aluminumPicket5_sliding_20_24} />
               <label htmlFor="aluminumPicket5_sliding_20_24">5h x 20w to 24w Sliding</label>
             </div>
           </div>
           <div className="setupGrid">
           <div className="setupGridItem">
               <input type="number" id="aluminumPicket6_sliding_5_9" name="aluminumPicket6_sliding_5_9" onChange={onChange} value={prices.aluminumPicket6_sliding_5_9} />
               <label htmlFor="aluminumPicket6_sliding_5_9">6h x 5w to 9w Sliding</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket6_sliding_10_14" name="aluminumPicket6_sliding_10_14" onChange={onChange} value={prices.aluminumPicket6_sliding_10_14} />
               <label htmlFor="aluminumPicket6_sliding_10_14">6h x 10w to 14w Sliding</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket6_sliding_15_19" name="aluminumPicket6_sliding_15_19" onChange={onChange} value={prices.aluminumPicket6_sliding_15_19} />
               <label htmlFor="aluminumPicket6_sliding_15_19">6h x 15w to 19w Sliding</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="aluminumPicket6_sliding_20_24" name="aluminumPicket6_sliding_20_24" onChange={onChange} value={prices.aluminumPicket6_sliding_20_24} />
               <label htmlFor="aluminumPicket6_sliding_20_24">6h x 20w to 24w Sliding</label>
             </div>
           </div>
           <h5>Wood</h5>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="wood3_personal" name="wood3_personal" onChange={onChange} value={prices.wood3_personal} />
               <label htmlFor="wood3_personal">3h x 4w</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="wood4_personal" name="wood4_personal" onChange={onChange} value={prices.wood4_personal} />
               <label htmlFor="wood4_personal">4h x 4w</label>
             </div>
             <div className="setupGridItem">
               <input type="number" id="wood6_personal" name="wood6_personal" onChange={onChange} value={prices.wood6_personal} />
               <label htmlFor="wood6_personal">6h x 4w</label>
             </div>
           </div>
           <div className="setupGrid">
           <div className="setupGridItem">
               <input type="number" id="wood3_sliding_5_9" name="wood3_sliding_5_9" onChange={onChange} value={prices.wood3_sliding_5_9} />
               <label htmlFor="wood3_sliding_5_9">3h x 5w to 9w Sliding</label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="wood3_sliding_10_14" name="wood3_sliding_10_14" onChange={onChange} value={prices.wood3_sliding_10_14} />
               <label htmlFor="wood3_sliding_10_14">3h x 10w to 14w Sliding</label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="wood3_sliding_15_19" name="wood3_sliding_15_19" onChange={onChange} value={prices.wood3_sliding_15_19} />
               <label htmlFor="wood3_sliding_15_19">3h x 15w to 19w Sliding</label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="wood3_sliding_20_24" name="wood3_sliding_20_24" onChange={onChange} value={prices.wood3_sliding_20_24} />
               <label htmlFor="wood3_sliding_20_24">3h x 20w to 24w Sliding</label>
             </div>
           </div>
           <div className="setupGrid">
           <div className="setupGridItem">
               <input type="number" id="wood4_sliding_5_9" name="wood4_sliding_5_9" onChange={onChange} value={prices.wood4_sliding_5_9} />
               <label htmlFor="wood4_sliding_5_9">4h x 5w to 9w Sliding</label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="wood4_sliding_10_14" name="wood4_sliding_10_14" onChange={onChange} value={prices.wood4_sliding_10_14} />
               <label htmlFor="wood4_sliding_10_14">4h x 10w to 14w Sliding</label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="wood4_sliding_15_19" name="wood4_sliding_15_19" onChange={onChange} value={prices.wood4_sliding_15_19} />
               <label htmlFor="wood4_sliding_15_19">4h x 15w to 19w Sliding</label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="wood4_sliding_20_24" name="wood4_sliding_20_24" onChange={onChange} value={prices.wood4_sliding_20_24} />
               <label htmlFor="wood4_sliding_20_24">4h x 20w to 24w Sliding</label>
             </div>
           </div>
           <div className="setupGrid">
           <div className="setupGridItem">
               <input type="number" id="wood6_sliding_5_9" name="wood6_sliding_5_9" onChange={onChange} value={prices.wood6_sliding_5_9} />
               <label htmlFor="wood6_sliding_5_9">6h x 5w to 9w Sliding</label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="wood6_sliding_10_14" name="wood6_sliding_10_14" onChange={onChange} value={prices.wood6_sliding_10_14} />
               <label htmlFor="wood6_sliding_10_14">6h x 10w to 14w Sliding</label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="wood6_sliding_15_19" name="wood6_sliding_15_19" onChange={onChange} value={prices.wood6_sliding_15_19} />
               <label htmlFor="wood6_sliding_15_19">6h x 15w to 19w Sliding</label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="wood6_sliding_20_24" name="wood6_sliding_20_24" onChange={onChange} value={prices.wood6_sliding_20_24} />
               <label htmlFor="wood6_sliding_20_24">6h x 20w to 24w Sliding</label>
             </div>
           </div>
           <h5>Metal</h5>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="metal6_personal" name="metal6_personal" onChange={onChange} value={prices.metal6_personal} />
               <label htmlFor="metal6_personal">6h x 4w</label>
             </div>
           </div>
           <div className="setupGrid">
           <div className="setupGridItem">
               <input type="number" id="metal6_sliding_5_9" name="metal6_sliding_5_9" onChange={onChange} value={prices.metal6_sliding_5_9} />
               <label htmlFor="metal6_sliding_5_9">6h x 5w to 9w Sliding</label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="metal6_sliding_10_14" name="metal6_sliding_10_14" onChange={onChange} value={prices.metal6_sliding_10_14} />
               <label htmlFor="metal6_sliding_10_14">6h x 10w to 14w Sliding</label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="metal6_sliding_15_19" name="metal6_sliding_15_19" onChange={onChange} value={prices.metal6_sliding_15_19} />
               <label htmlFor="metal6_sliding_15_19">6h x 15w to 19w Sliding</label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="metal6_sliding_20_24" name="metal6_sliding_20_24" onChange={onChange} value={prices.metal6_sliding_20_24} />
               <label htmlFor="metal6_sliding_20_24">6h x 20w to 24w Sliding</label>
             </div>
           </div>
           <h5>PVC</h5>
           <div className="setupGrid">
             <div className="setupGridItem">
               <input type="number" id="pvc6_personal" name="pvc6_personal" onChange={onChange} value={prices.pvc6_personal} />
               <label htmlFor="pvc6_personal">6h x 4w</label>
             </div>
           </div>
           <div className="setupGrid">
           <div className="setupGridItem">
               <input type="number" id="pvc6_sliding_5_9" name="pvc6_sliding_5_9" onChange={onChange} value={prices.pvc6_sliding_5_9} />
               <label htmlFor="pvc6_sliding_5_9">6h x 5w to 9w Sliding </label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="pvc6_sliding_10_14" name="pvc6_sliding_10_14" onChange={onChange} value={prices.pvc6_sliding_10_14} />
               <label htmlFor="pvc6_sliding_10_14">6h x 10w to 14w Sliding </label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="pvc6_sliding_15_19" name="pvc6_sliding_15_19" onChange={onChange} value={prices.pvc6_sliding_15_19} />
               <label htmlFor="pvc6_sliding_15_19">6h x 15w to 19w Sliding </label>
             </div>
           <div className="setupGridItem">
               <input type="number" id="pvc6_sliding_20_24" name="pvc6_sliding_20_24" onChange={onChange} value={prices.pvc6_sliding_20_24} />
               <label htmlFor="pvc6_sliding_20_24">6h x 20w to 24w Sliding </label>
             </div>
           </div>
           <button id="setupButton"  type='submit' className='btn btn-success'>Submit</button>
         </form>
       </div>   
    }

  </Fragment>

)}

   
 
 

   
   


export default Setup
