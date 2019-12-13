const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Task = require('../models/Tasks');
const Project = require('../models/Projects');



// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin,
    validatePassword
} = require('../helpers/middlewares');


//POST NEW TASK
router.post('/',  isLoggedIn, ( req, res, next ) => {
    const { title, description, deadline, projectId } = req.body;
    

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
router.get( '/:id', isLoggedIn, ( req, res, next ) => {
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
            res.status(400).json(err)
        })
})


//GET TASKS BY PROJECT ID
router.get(`/:projectId/tasks/:taskId`, isLoggedIn, ( req, res, next ) => {
    const { taskId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
        res.status(500).json({message: 'Specified taskId is not valid'})
        return
    }


    Task.findById(taskId)
        .then ( foundTasks => {
            res.status(200).json(foundTasks)
        })
        .catch( err => {
            res.status(400).json(err)
        })
})


// UPDATE TASK
router.put('/:id', isLoggedIn, ( req, res, next) => {
    const { id } = req.params;
    const { title, description, deadline } = req.body;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Specified id is not valid'})
        return
    }

    Task.findByIdAndUpdate(id, { title, description, deadline })
        .then( () => {
            res.status(201).json({ message: 'Task updated' })
        })
        .catch( (err) => {
            res.status(400).json(err)
        })
})

// DELETE TASK
router.delete( '/:id', isLoggedIn, ( req, res, next ) => {
    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Specified id is not valid'})
        return
    }


    Task.findByIdAndRemove(id)
        .then( ( deletedTask ) => {
            return deletedTask.project;
        })
        .then( (projectId) => {
            return Project.findByIdAndUpdate( projectId, { $pull: { tasks: id }})
        })
        .then( () => {
            res.status(202).json({message: 'Task deleted'})
        })
        .catch( (err) => {
            res.status(400).json(err)
        })
        
    })
    

module.exports = router;