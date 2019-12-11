const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Task = require('../models/Tasks');
const Project = require('../models/Projects');


//POST NEW TASK
router.post('/', ( req, res, next ) => {
    const { title, description, deadline, projectId } = req.body;
    console.log('POST TASK BODY', req.body);
    

    Task.create( { title, description, deadline, project: projectId })
        .then( (newTask) => {
            return Project.findByIdAndUpdate( projectId, { $push: { tasks: newTask._id }}, {new: true}).populate('tasks')
        }) 
        .then( (updatedProject) => {
            res.status(201).json(updatedProject)
        })
        .catch( (err) => {
            res.status(400).json(err)
        })
})


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