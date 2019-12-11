const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Project = require('../models/projects');


//POST NEW PROJECT
router.post('/', ( req, res, next ) => {
    const { title, description, deadline  } = req.body;
    console.log('////////////////// POST PROJECT', req.body);
    

    Project.create({ title, description, deadline, tasks: [] })
        .then( (createdProject ) => {
            res.status(201).json(createdProject)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
})



module.exports = router;