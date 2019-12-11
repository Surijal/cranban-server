const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const User = require('../models/User');


//FIND USER BY ID
router.get( '/:id', ( req, res, next ) => {
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


module.exports = router;