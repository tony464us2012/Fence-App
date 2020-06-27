import { 
    UPDATE_SETUP,
    GET_SETUP,
    SETUP_ERROR,
    PUT_CONTACT, 
    PUT_ESTIMATE
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case GET_SETUP:
        case UPDATE_SETUP:
            return {
                ...state,
                 setupPrices: action.payload
            };
            case SETUP_ERROR:
                return {
                    ...state,
                    error: action.payload
                };
            case PUT_CONTACT: 
            return {
                ...state, 
                savedContact: action.payload,
                stage2: true
            }
            case PUT_ESTIMATE: 
            return {
                ...state, 
                estimate: action.payload
            }
        default: return state
    }}