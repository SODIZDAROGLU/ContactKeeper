const express = require('express');
const {check, validationResult } = require('express-validator/check');
const router = express.Router();

const User = require('../models/User');

// @route POST api/usera
// @desc  Register a user
// @access Public 
router.post('/',
[
    check('name' , 'Please add name')
    .not()
    .isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check(
        'password',
        'please enter a password with 6 or more chareacters'
        ) .isLength({ min: 6})
       
    
], 
(req, res) => {
    
     const errors = validationResult(req);
     if(!errors.isEmpty()) {
         return res.status(400).json({errors:errors.array()});
     }
 res.send('passed');
}
);

module.exports = router;