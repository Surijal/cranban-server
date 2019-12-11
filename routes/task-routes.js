const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Task = require('../models/Tasks');
const Project = require('../models/Projects');


//GET TASK BY ID
router.get( '/tasks/:id', ( req, res, next ) => {
    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Specified id is not valid'})
        return
    }

    Task.findById(id)
        .then( (foundTask) => {
            res.status(200).json(foundTask)
        })
        .catch( (err) => {
            res.status(500).json({message: 'Specified id is not valid'})
        })
})


module.exports = router;