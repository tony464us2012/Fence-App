import React, { useReducer } from 'react';
import axios from 'axios';
import SetupContext from './setupContext';
import SetupReducer from './setupReducer';
import {
    UPDATE_SETUP,
    GET_SETUP,
    SETUP_ERROR,
    PUT_CONTACT,
    PUT_ESTIMATE
} from '../types'


const SetupState = props => {
    const initialState = {
    setupPrices: null,
    error: '',
    savedContact: null,
    estimate: null,
    stage2: false
    };
    
    const [state, dispatch] = useReducer(SetupReducer, initialState);

    //Get Setup
    const getSetup = async () => {
    

        try{
            const res = await axios.get('/api/setup');
            dispatch({ type: GET_SETUP, payload: res.data })
        } catch(err) {
            dispatch({ type: SETUP_ERROR, payload: err.response.msg})
        }
    } ;


    //Update setup
    const updateSetup = async prices => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        try{
            const res = await axios.put(`/api/setup/${prices._id}`, prices, config);
            dispatch({ type: UPDATE_SETUP, payload: res.data })
        } catch(err) {
                console.log(err)

        }
    } 

    const putContact = contact => {
        dispatch({ type: PUT_CONTACT, payload: contact})
    }

    const postEstimate = async info => {
        
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/setup', info, config);
            dispatch({ type: PUT_ESTIMATE, payload: res.data.estimate});
        } catch(err) {
            console.log(err)
        }
    }                                                                                                                                                                                                                                     

    return (
        <SetupContext.Provider
         value={{
             setupPrices: state.setupPrices,
             savedContact: state.savedContact,
             estimate: state.estimate,
             stage2: state.stage2,
             updateSetup,
             getSetup,
             putContact,
             postEstimate
         }}>
            {props.children}
        </SetupContext.Provider>
    )
}


export default SetupState