const express = require('express')
const router = express.Router()
const auth = require('../middeware/auth')
const Setup = require('../Models/SetupModel')
const nodemailer = require('nodemailer')



router.get('/', async (req, res) => {
    try {
        const setup = await Setup.findById('5edc128b2d2abd5c18ba6baf');
        res.json(setup);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

router.post('/', async (req, res) => {


    const { chainlink4, chainlink5, chainlink6, 
            picket4, picket5, picket6, 
            aluminumPicket4, aluminumPicket5, aluminumPicket6, 
            wood3, wood4, wood6, 
            metal_fence6,
            pvc6,
            chainlink4_personal, chainlink5_personal, chainlink6_personal,
            chainlink4_sliding_5_9, chainlink4_sliding_10_14, chainlink4_sliding_15_19, chainlink4_sliding_20_24,
            chainlink5_sliding_5_9, chainlink5_sliding_10_14, chainlink5_sliding_15_19, chainlink5_sliding_20_24,
            chainlink6_sliding_5_9, chainlink6_sliding_10_14, chainlink6_sliding_15_19, chainlink6_sliding_20_24,
            picket4_personal, picket5_personal, picket6_personal,
            picket4_sliding_5_9, picket4_sliding_10_14, picket4_sliding_15_19, picket4_sliding_20_24, 
            picket5_sliding_5_9, picket5_sliding_10_14, picket5_sliding_15_19, picket5_sliding_20_24, 
            picket6_sliding_5_9, picket6_sliding_10_14, picket6_sliding_15_19, picket6_sliding_20_24, 
            aluminumPicket4_personal, aluminumPicket5_personal, aluminumPicket6_personal,
            aluminumPicket4_sliding_5_9, aluminumPicket4_sliding_10_14, aluminumPicket4_sliding_15_19, aluminumPicket4_sliding_20_24,
            aluminumPicket5_sliding_5_9, aluminumPicket5_sliding_10_14, aluminumPicket5_sliding_15_19, aluminumPicket5_sliding_20_24,
            aluminumPicket6_sliding_5_9, aluminumPicket6_sliding_10_14, aluminumPicket6_sliding_15_19, aluminumPicket6_sliding_20_24,
            metal6_personal, 
            metal6_sliding_5_9, metal6_sliding_10_14, metal6_sliding_15_19, metal6_sliding_20_24,
            wood3_personal, wood4_personal, wood6_personal,
            wood3_sliding_5_9, wood3_sliding_10_14, wood3_sliding_15_19, wood3_sliding_20_24, 
            wood4_sliding_5_9, wood4_sliding_10_14, wood4_sliding_15_19, wood4_sliding_20_24, 
            wood6_sliding_5_9, wood6_sliding_10_14, wood6_sliding_15_19, wood6_sliding_20_24, 
            pvc6_personal, 
            pvc6_sliding_5_9, pvc6_sliding_10_14, pvc6_sliding_15_19, pvc6_sliding_20_24 
    } = req.body.prices.setupPrices;

    const { type, height, footage, personal_gates, sliding_gate1, sliding_gate2 } = req.body.fenceInfo;

    const { firstName, lastName, email, phone, address, city, state, zip } = req.body.contact;

    const newFootage = Number(footage);
    const newPersonal_Gate = Number(personal_gates);
    let total;

   

    const result = (quote) => {

        let transport = nodemailer.createTransport({
            service: "gmail",
            
            auth: {
                user: 'fencekingsbusiness@gmail.com',
                pass: 'fencekings9788'
            }
        });
        
        function sendEmail() {
            var mailOptions = {
                from: 'fencekingsbusiness@gmail.com',
                to: 'tony464us2011@yahoo.com',
                subject: 'New Estimate',
                html: `There is a new estimate of $${quote}. It's ${footage} feet of ${type}, ${height} feet in height. ${personal_gates} personal gates. ${sliding_gate1 !== '' ? 'A '+ sliding_gate1 + ' feet sliding gate.': ''} ${sliding_gate2 !== '' ? 'A '+ sliding_gate2 + ' feet sliding gate.': ''} Name: ${firstName} ${lastName} Email: ${email}. Phone Number: ${phone}. Address: ${address} ${city} ${state} ${zip}`
            }
            transport.sendMail(mailOptions, function(err, info) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Email sent')
                }
            })
        }
        sendEmail();
        res.json({estimate: quote})

    }

    switch( type ) {
        case 'chainlink': 
        if (height == '4') {
         total = (newFootage * Number(chainlink4)) + ( newPersonal_Gate * Number(chainlink4_personal));
         if ( sliding_gate1 == '5-9' )  {
             total += Number(chainlink4_sliding_5_9)
         } else if ( sliding_gate1 == '10-14' ) {
             total += Number(chainlink4_sliding_10_14)
         } else if ( sliding_gate1 == '15-19') {
             total += Number(chainlink4_sliding_15_19)
         } else if  ( sliding_gate1 == '20-24' ) {
             total += Number(chainlink4_sliding_20_24)
         } else {
             total += 0;
         }
         if ( sliding_gate2 == '5-9' )  {
             total += Number(chainlink4_sliding_5_9)
         } else if ( sliding_gate2 == '10-14' ) {
             total += Number(chainlink4_sliding_10_14)
         } else if ( sliding_gate2 == '15-19') {
             total += Number(chainlink4_sliding_15_19)
         } else if  ( sliding_gate2 == '20-24' ) {
             total += Number(chainlink4_sliding_20_24)
            
         } else {
             total += 0;
         }
         result(total)
        } else if (height == '5') {
            let total = (newFootage * Number(chainlink5)) + ( newPersonal_Gate * Number(chainlink5_personal));
         if ( sliding_gate1 == '5-9' )  {
             total += Number(chainlink5_sliding_5_9)
         } else if ( sliding_gate1 == '10-14' ) {
             total += Number(chainlink5_sliding_10_14)
         } else if ( sliding_gate1 == '15-19') {
             total += Number(chainlink5_sliding_15_19)
         } else if  ( sliding_gate1 == '20-24' ) {
             total += Number(chainlink5_sliding_20_24)
         } else {
             total += 0
         }
         if ( sliding_gate2 == '5-9' )  {
             total += Number(chainlink5_sliding_5_9)
         } else if ( sliding_gate2 == '10-14' ) {
             total += Number(chainlink5_sliding_10_14)
         } else if ( sliding_gate2 == '15-19') {
             total += Number(chainlink5_sliding_15_19)
         } else if  ( sliding_gate2 == '20-24' ) {
             total += Number(chainlink5_sliding_20_24)
         } else {
             total += 0
         }
            result(total)     
        } else if (height == '6') {
            let total = (newFootage * Number(chainlink6)) + ( newPersonal_Gate * Number(chainlink6_personal));
         if ( sliding_gate1 == '5-9' )  {
             total += Number(chainlink6_sliding_5_9)
         } else if ( sliding_gate1 == '10-14' ) {
             total += Number(chainlink6_sliding_10_14)
         } else if ( sliding_gate1 == '15-19') {
             total += Number(chainlink6_sliding_15_19)
         } else if  ( sliding_gate1 == '20-24' ) {
             total += Number(chainlink6_sliding_20_24)
         } else {
             total += 0
         }
         if ( sliding_gate2 == '5-9' )  {
             total += Number(chainlink6_sliding_5_9)
         } else if ( sliding_gate2 == '10-14' ) {
             total += Number(chainlink6_sliding_10_14)
         } else if ( sliding_gate2 == '15-19') {
             total += Number(chainlink6_sliding_15_19)
         } else if  ( sliding_gate2 == '20-24' ) {
             total += Number(chainlink6_sliding_20_24)
         } else {
             total += 0
         }
        result(total)
        } else {
            console.log('error')
        }
        break;
        case 'picket':
            if (height == '4') {
                let total = (newFootage * Number(picket4)) + ( newPersonal_Gate * Number(picket4_personal));
         if ( sliding_gate1 == '5-9' )  {
             total += Number(picket4_sliding_5_9)
         } else if ( sliding_gate1 == '10-14' ) {
             total += Number(picket4_sliding_10_14)
         } else if ( sliding_gate1 == '15-19') {
             total += Number(picket4_sliding_15_19)
         } else if  ( sliding_gate1 == '20-24' ) {
             total += Number(picket4_sliding_20_24)
         } else {
             total += 0
         }
         if ( sliding_gate2 == '5-9' )  {
             total += Number(picket4_sliding_5_9)
         } else if ( sliding_gate2 == '10-14' ) {
             total += Number(picket4_sliding_10_14)
         } else if ( sliding_gate2 == '15-19') {
             total += Number(picket4_sliding_15_19)
         } else if  ( sliding_gate2 == '20-24' ) {
             total += Number(picket4_sliding_20_24)
         } else {
             total += 0
         }
         result(total)
         } else if (height == '5') {
            let total = (newFootage * Number(picket5)) + ( newPersonal_Gate * Number(picket5_personal));
            if ( sliding_gate1 == '5-9' )  {
                total += Number(picket5_sliding_5_9)
            } else if ( sliding_gate1 == '10-14' ) {
                total += Number(picket5_sliding_10_14)
            } else if ( sliding_gate1 == '15-19') {
                total += Number(picket5_sliding_15_19)
            } else if  ( sliding_gate1 == '20-24' ) {
                total += Number(picket5_sliding_20_24)
            } else {
                total += 0
            }
            if ( sliding_gate2 == '5-9' )  {
                total += Number(picket5_sliding_5_9)
            } else if ( sliding_gate2 == '10-14' ) {
                total += Number(picket5_sliding_10_14)
            } else if ( sliding_gate2 == '15-19') {
                total += Number(picket5_sliding_15_19)
            } else if  ( sliding_gate2 == '20-24' ) {
                total += Number(picket5_sliding_20_24)
            } else {
                total += 0
            }
            result(total)
         } else if (height == '6') {
            let total = (newFootage * Number(picket6)) + ( newPersonal_Gate * Number(picket6_personal));
            if ( sliding_gate1 == '5-9' )  {
                total += Number(picket6_sliding_5_9)
            } else if ( sliding_gate1 == '10-14' ) {
                total += Number(picket6_sliding_10_14)
            } else if ( sliding_gate1 == '15-19') {
                total += Number(picket6_sliding_15_19)
            } else if  ( sliding_gate1 == '20-24' ) {
                total += Number(picket6_sliding_20_24)
            } else {
                total += 0
            }
            if ( sliding_gate2 == '5-9' )  {
                total += Number(picket6_sliding_5_9)
            } else if ( sliding_gate2 == '10-14' ) {
                total += Number(picket6_sliding_10_14)
            } else if ( sliding_gate2 == '15-19') {
                total += Number(picket6_sliding_15_19)
            } else if  ( sliding_gate2 == '20-24' ) {
                total += Number(picket6_sliding_20_24)
            } else {
                total += 0
            }
            result(total)
         } else {
                console.log('error')
            }
        break;
        case 'aluminum_picket': 
        if (height == '4') {
            let total = (newFootage * Number(aluminumPicket4)) + ( newPersonal_Gate * Number(aluminumPicket4_personal));
            if ( sliding_gate1 == '5-9' )  {
                total += Number(aluminumPicket4_sliding_5_9)
            } else if ( sliding_gate1 == '10-14' ) {
                total += Number(aluminumPicket4_sliding_10_14)
            } else if ( sliding_gate1 == '15-19') {
                total += Number(aluminumPicket4_sliding_15_19)
            } else if  ( sliding_gate1 == '20-24' ) {
                total += Number(aluminumPicket4_sliding_20_24)
            } else {
                total += 0
            }
            if ( sliding_gate2 == '5-9' )  {
                total += Number(aluminumPicket4_sliding_5_9)
            } else if ( sliding_gate2 == '10-14' ) {
                total += Number(aluminumPicket4_sliding_10_14)
            } else if ( sliding_gate2 == '15-19') {
                total += Number(aluminumPicket4_sliding_15_19)
            } else if  ( sliding_gate2 == '20-24' ) {
                total += Number(aluminumPicket4_sliding_20_24)
            } else {
                total += 0
            }
            result(total)
        } else if (height == '5') {
            let total = (newFootage * Number(aluminumPicket5)) + ( newPersonal_Gate * Number(aluminumPicket5_personal));
            if ( sliding_gate1 == '5-9' )  {
                total += Number(aluminumPicket5_sliding_5_9)
            } else if ( sliding_gate1 == '10-14' ) {
                total += Number(aluminumPicket5_sliding_10_14)
            } else if ( sliding_gate1 == '15-19') {
                total += Number(aluminumPicket5_sliding_15_19)
            } else if  ( sliding_gate1 == '20-24' ) {
                total += Number(aluminumPicket5_sliding_20_24)
            } else {
                total += 0
            }
            if ( sliding_gate2 == '5-9' )  {
                total += Number(aluminumPicket5_sliding_5_9)
            } else if ( sliding_gate2 == '10-14' ) {
                total += Number(aluminumPicket5_sliding_10_14)
            } else if ( sliding_gate2 == '15-19') {
                total += Number(aluminumPicket5_sliding_15_19)
            } else if  ( sliding_gate2 == '20-24' ) {
                total += Number(aluminumPicket5_sliding_20_24)
            } else {
                total += 0
            }
            result(total)
        } else if (height == '6') {
            let total = (newFootage * Number(aluminumPicket6)) + ( newPersonal_Gate * Number(aluminumPicket6_personal));
            if ( sliding_gate1 == '5-9' )  {
                total += Number(aluminumPicket6_sliding_5_9)
            } else if ( sliding_gate1 == '10-14' ) {
                total += Number(aluminumPicket6_sliding_10_14)
            } else if ( sliding_gate1 == '15-19') {
                total += Number(aluminumPicket6_sliding_15_19)
            } else if  ( sliding_gate1 == '20-24' ) {
                total += Number(aluminumPicket6_sliding_20_24)
            } else {
                total += 0
            }
            if ( sliding_gate2 == '5-9' )  {
                total += Number(aluminumPicket6_sliding_5_9)
            } else if ( sliding_gate2 == '10-14' ) {
                total += Number(aluminumPicket6_sliding_10_14)
            } else if ( sliding_gate2 == '15-19') {
                total += Number(aluminumPicket6_sliding_15_19)
            } else if  ( sliding_gate2 == '20-24' ) {
                total += Number(aluminumPicket6_sliding_20_24)
            } else {
                total += 0
            }
            result(total)
        } else {
            console.log('error')
        }
        break;
        case 'wood':
            if (height == '3') {
                let total = (newFootage * Number(wood3)) + ( newPersonal_Gate * Number(wood3_personal));
                if ( sliding_gate1 == '5-9' )  {
                    total += Number(wood3_sliding_5_9)
                } else if ( sliding_gate1 == '10-14' ) {
                    total += Number(wood3_sliding_10_14)
                } else if ( sliding_gate1 == '15-19') {
                    total += Number(wood3_sliding_15_19)
                } else if  ( sliding_gate1 == '20-24' ) {
                    total += Number(wood3_sliding_20_24)
                } else {
                    total += 0
                }
                if ( sliding_gate2 == '5-9' )  {
                    total += Number(wood3_sliding_5_9)
                } else if ( sliding_gate2 == '10-14' ) {
                    total += Number(wood3_sliding_10_14)
                } else if ( sliding_gate2 == '15-19') {
                    total += Number(wood3_sliding_15_19)
                } else if  ( sliding_gate2 == '20-24' ) {
                    total += Number(wood3_sliding_20_24)
                } else {
                    total += 0
                }
                result(total)
            } else if (height == '4') {
                let total = (newFootage * Number(wood4)) + ( newPersonal_Gate * Number(wood4_personal));
                if ( sliding_gate1 == '5-9' )  {
                    total += Number(wood4_sliding_5_9)
                } else if ( sliding_gate1 == '10-14' ) {
                    total += Number(wood4_sliding_10_14)
                } else if ( sliding_gate1 == '15-19') {
                    total += Number(wood4_sliding_15_19)
                } else if  ( sliding_gate1 == '20-24' ) {
                    total += Number(wood4_sliding_20_24)
                } else {
                    total += 0
                }
                if ( sliding_gate2 == '5-9' )  {
                    total += Number(wood4_sliding_5_9)
                } else if ( sliding_gate2 == '10-14' ) {
                    total += Number(wood4_sliding_10_14)
                } else if ( sliding_gate2 == '15-19') {
                    total += Number(wood4_sliding_15_19)
                } else if  ( sliding_gate2 == '20-24' ) {
                    total += Number(wood4_sliding_20_24)
                } else {
                    total += 0
                }
                result(total)
            } else if (height == '6') {
                let total = (newFootage * Number(wood6)) + ( newPersonal_Gate * Number(wood6_personal));
                if ( sliding_gate1 == '5-9' )  {
                    total += Number(wood6_sliding_5_9)
                } else if ( sliding_gate1 == '10-14' ) {
                    total += Number(wood6_sliding_10_14)
                } else if ( sliding_gate1 == '15-19') {
                    total += Number(wood6_sliding_15_19)
                } else if  ( sliding_gate1 == '20-24' ) {
                    total += Number(wood6_sliding_20_24)
                } else {
                    total += 0
                }
                if ( sliding_gate2 == '5-9' )  {
                    total += Number(wood6_sliding_5_9)
                } else if ( sliding_gate2 == '10-14' ) {
                    total += Number(wood6_sliding_10_14)
                } else if ( sliding_gate2 == '15-19') {
                    total += Number(wood6_sliding_15_19)
                } else if  ( sliding_gate2 == '20-24' ) {
                    total += Number(wood6_sliding_20_24)
                } else {
                    total += 0
                }
                result(total)
            } else {
                console.log('error')
            }
        break;
        case 'metal': 
        if (height == '6') {
            let total = (newFootage * Number(metal_fence6)) + ( newPersonal_Gate * Number(metal6_personal));
                if ( sliding_gate1 == '5-9' )  {
                    total += Number(metal6_sliding_5_9)
                } else if ( sliding_gate1 == '10-14' ) {
                    total += Number(metal6_sliding_10_14)
                } else if ( sliding_gate1 == '15-19') {
                    total += Number(metal6_sliding_15_19)
                } else if  ( sliding_gate1 == '20-24' ) {
                    total += Number(metal6_sliding_20_24)
                } else {
                    total += 0
                }
                if ( sliding_gate2 == '5-9' )  {
                    total += Number(metal6_sliding_5_9)
                } else if ( sliding_gate2 == '10-14' ) {
                    total += Number(metal6_sliding_10_14)
                } else if ( sliding_gate2 == '15-19') {
                    total += Number(metal6_sliding_15_19)
                } else if  ( sliding_gate2 == '20-24' ) {
                    total += Number(metal6_sliding_20_24)
                } else {
                    total += 0
                }
                result(total)
        }  else {
            console.log('error')
        }
        break;
        case 'pvc':
            if (height == '6') {
                let total = (newFootage * Number(pvc6)) + ( newPersonal_Gate * Number(pvc6_personal));
                if ( sliding_gate1 == '5-9' )  {
                    total += Number(pvc6_sliding_5_9)
                } else if ( sliding_gate1 == '10-14' ) {
                    total += Number(pvc6_sliding_10_14)
                } else if ( sliding_gate1 == '15-19') {
                    total += Number(pvc6_sliding_15_19)
                } else if  ( sliding_gate1 == '20-24' ) {
                    total += Number(pvc6_sliding_20_24)
                } else {
                    total += 0
                }
                if ( sliding_gate2 == '5-9' )  {
                    total += Number(pvc6_sliding_5_9)
                } else if ( sliding_gate2 == '10-14' ) {
                    total += Number(pvc6_sliding_10_14)
                } else if ( sliding_gate2 == '15-19') {
                    total += Number(pvc6_sliding_15_19)
                } else if  ( sliding_gate2 == '20-24' ) {
                    total += Number(pvc6_sliding_20_24)
                } else {
                    total += 0
                }
                result(total)
            }  else {
                console.log('error')
            }
            break;
    }
  

})

router.put('/:id', auth, async (req, res) => {
  
    try {
        let setup = await Setup.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(400).json({ msg: 'Successful Update' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
    
});






module.exports = router;