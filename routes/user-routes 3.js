const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
router.get( '/:id', isLoggedIn,  ( req, res, next ) => {
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
router.get('/email/:email', isLoggedIn, ( req, res, next ) => {
    const { email } = req.params;

    if ( !mongoose.Types.ObjectId.isValid(email)) {
        res.status(500).json({message: 'Specified email is not valid'})
        return
    }

    User.find({email})
        .then( (email) => {
            res.status(200).json(email)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})



//FIND USER AND PATCH
router.patch('/:id', isLoggedIn, async ( req, res, next ) => {
    const { id } = req.params;
    const { username, firstname, email, password } = req.body;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Specified id is not valid'})
        return
    }

    
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPass = bcrypt.hashSync(password, salt)

    try {
        const updatedUser = await User.findByIdAndUpdate( id, { username, firstname, email, password: hashPass }, {new: true})
        res.status(201).json(updatedUser)

    } catch (error) {
        res.status(400).json(error)
    }
})


//DELETE USER
router.delete('/:id', isLoggedIn, ( req, res, next ) => {
    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Specified id is not valid'})
        return
    }

    User.findOneAndRemove(id)
        .then( () => {
            res.status(202).json({message: 'User deleted'})
        })
        .catch((err) => {
            res.status(400).json(err)
        })
} )


module.exports = router;