const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const User = require('../models/User');



// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin,
    validatePassword
} = require('../helpers/middlewares');

//FIND USER BY ID
router.get( '/:id', isLoggedIn, ( req, res, next ) => {
    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Specified id is not valid'})
        return
    }

    User.findById(id)
        .then( (foundUser) => {
            res.status(200).json(foundUser)
        })
        .catch( (err) => {
            res.status(400).json(err)
        })
})


//FIND USER BY EMAIL
router.get('/email', isLoggedIn, ( req, res, next ) => {
    const { email } = req.body;

    console.log(req.body);
    

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Specified email is not valid'})
        return
    }

    User.findOne(email)
        .then( (email) => {
            res.status(200).json(email)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})



//FIND USER AND UPDATE
router.put('/:id', ( req, res, next ) => {
    const { id } = req.params;
    const { username, firstname, email, password } = req.body;
})


module.exports = router;