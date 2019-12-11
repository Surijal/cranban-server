const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Project = require('../models/projects');
const Task = require('../models/tasks');


//POST NEW PROJECT
router.post('/', ( req, res, next ) => {
    const { title, description, deadline  } = req.body;

    Project.create({ title, description, deadline, tasks: [] })
        .then( (createdProject ) => {
            res.status(201).json(createdProject)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
})


//GET ALL PROJECT
router.get('/', ( req, res, next ) => {
    Project.find()
        .populate('tasks')
        .then( allProjects => {
            res.status(200).json(allProjects)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})




module.exports = router;