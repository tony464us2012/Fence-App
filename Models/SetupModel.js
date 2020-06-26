const mongoose = require('mongoose')

const SetupSchema = mongoose.Schema({
    chainlink4: {
        type: String, 
        required: true
    },
    chainlink5: {
        type: String, 
        required: true
    },
    chainlink6: {
        type: String, 
        required: true
    },
    picket4: {
        type: String, 
        required: true
    },
    picket5: {
        type: String, 
        required: true
    },
    picket6: {
        type: String, 
        required: true
    },
    aluminumPicket4: {
        type: String, 
        required: true
    },
    aluminumPicket5: {
        type: String, 
        required: true
    },
    aluminumPicket6: {
        type: String, 
        required: true
    },
    wood3: {
        type: String, 
        required: true
    },
    wood4: {
        type: String, 
        required: true
    },
    wood6: {
        type: String, 
        required: true
    },
    metal_fence6: {
        type: String, 
        required: true
    },
    pvc6: {
        type: String, 
        required: true
    },
    chainlink4_personal: {
        type: String, 
        required: true
    },
    chainlink5_personal: {
        type: String, 
        required: true
    },
    chainlink6_personal: {
        type: String, 
        required: true
    },
    chainlink4_sliding_5_9: {
        type: String, 
        required: true
    },
    chainlink4_sliding_10_14: {
        type: String, 
        required: true
    },
    chainlink4_sliding_15_19: {
        type: String, 
        required: true
    },
    chainlink4_sliding_20_24: {
        type: String, 
        required: true
    },
    chainlink5_sliding_5_9: {
        type: String, 
        required: true
    },
    chainlink5_sliding_10_14: {
        type: String, 
        required: true
    },
    chainlink5_sliding_15_19: {
        type: String, 
        required: true
    },
    chainlink5_sliding_20_24: {
        type: String, 
        required: true
    },
    chainlink6_sliding_5_9: {
        type: String, 
        required: true
    },
    chainlink6_sliding_10_14: {
        type: String, 
        required: true
    },
    chainlink6_sliding_15_19: {
        type: String, 
        required: true
    },
    chainlink6_sliding_20_24: {
        type: String, 
        required: true
    },
    picket4_personal: {
        type: String,
        required: true
    },
    picket5_personal: {
        type: String,
        required: true
    },
    picket6_personal: {
        type: String,
        required: true
    },
    picket4_sliding_5_9: {
        type: String,
        required: true
    },
    picket4_sliding_10_14: {
        type: String,
        required: true
    },
    picket4_sliding_15_19: {
        type: String,
        required: true
    },
    picket4_sliding_20_24: {
        type: String,
        required: true
    },
    picket5_sliding_5_9: {
        type: String,
        required: true
    },
    picket5_sliding_10_14: {
        type: String,
        required: true
    },
    picket5_sliding_15_19: {
        type: String,
        required: true
    },
    picket5_sliding_20_24: {
        type: String,
        required: true
    },
    picket6_sliding_5_9: {
        type: String,
        required: true
    },
    picket6_sliding_10_14: {
        type: String,
        required: true
    },
    picket6_sliding_15_19: {
        type: String,
        required: true
    },
    picket6_sliding_20_24: {
        type: String,
        required: true
    },
    aluminumPicket4_personal: {
        type: String,
        required: true
    },
    aluminumPicket5_personal: {
        type: String,
        required: true
    },
    aluminumPicket6_personal: {
        type: String,
        required: true
    },
    aluminumPicket4_sliding_5_9: {
        type: String,
        required: true
    },
    aluminumPicket4_sliding_10_14: {
        type: String,
        required: true
    },
    aluminumPicket4_sliding_15_19: {
        type: String,
        required: true
    },
    aluminumPicket4_sliding_20_24: {
        type: String,
        required: true
    },
    aluminumPicket5_sliding_5_9: {
        type: String,
        required: true
    },
    aluminumPicket5_sliding_10_14: {
        type: String,
        required: true
    },
    aluminumPicket5_sliding_15_19: {
        type: String,
        required: true
    },
    aluminumPicket5_sliding_20_24: {
        type: String,
        required: true
    },
    aluminumPicket6_sliding_5_9: {
        type: String,
        required: true
    },
    aluminumPicket6_sliding_10_14: {
        type: String,
        required: true
    },
    aluminumPicket6_sliding_15_19: {
        type: String,
        required: true
    },
    aluminumPicket6_sliding_20_24: {
        type: String,
        required: true
    },
    wood3_personal: {
        type: String,
        required: true
    },
    wood4_personal: {
        type: String,
        required: true
    },
    wood6_personal: {
        type: String,
        required: true
    },
    wood3_sliding_5_9: {
        type: String,
        required: true
    },
    wood3_sliding_10_14: {
        type: String,
        required: true
    },
    wood3_sliding_15_19: {
        type: String,
        required: true
    },
    wood3_sliding_20_24: {
        type: String,
        required: true
    },
    wood4_sliding_5_9: {
        type: String,
        required: true
    },
    wood4_sliding_10_14: {
        type: String,
        required: true
    },
    wood4_sliding_15_19: {
        type: String,
        required: true
    },
    wood4_sliding_20_24: {
        type: String,
        required: true
    },
    wood6_sliding_5_9: {
        type: String,
        required: true
    },
    wood6_sliding_10_14: {
        type: String,
        required: true
    },
    wood6_sliding_15_19: {
        type: String,
        required: true
    },
    wood6_sliding_20_24: {
        type: String,
        required: true
    },
    metal6_personal: {
        type: String,
        required: true
    },
    metal6_sliding_5_9: {
        type: String,
        required: true
    },
    metal6_sliding_10_14: {
        type: String,
        required: true
    },
    metal6_sliding_15_19: {
        type: String,
        required: true
    },
    metal6_sliding_20_24: {
        type: String,
        required: true
    },
    pvc6_personal: {
        type: String,
        required: true
    },
    pvc6_sliding_5_9: {
        type: String,
        required: true
    },
    pvc6_sliding_10_14: {
        type: String,
        required: true
    },
    pvc6_sliding_15_19: {
        type: String,
        required: true
    },
    pvc6_sliding_20_24: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Setup', SetupSchema)