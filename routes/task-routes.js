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
router.post('/tasks',  isLoggedIn, async ( req, res, next ) => {
    const { title, description, deadline, projectId } = req.body;
        

    try {

        const createTask = await Task.create( { title, description, deadline, project: projectId })
            
                
                console.log('>>>>>>>>>>>>> Backend newTask', createTask._id)
                await Project.findByIdAndUpdate( {_id: createTask.project}, { $push: { tasks: createTask._id }}, {new: true}) .populate('tasks')
            
            
                res.status(201).json(createTask)
            }
            catch(err) {
                res.status(400).json(err) 
    }
})


//GET TASK BY ID
router.get( '/tasks/:id', isLoggedIn, ( req, res, next ) => {
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
router.get(`/projects/:id/tasks/:id`, isLoggedIn, ( req, res, next ) => {
    const  {projectId, taskId}  = req.params;
    

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
        res.status(500).json({message: 'Specified taskId is not valid'})
        return
    }


    Task.find({project: projectId })
        .then ( foundTasks => {
            res.status(200).json(foundTasks)
        })
        .catch( err => {
            res.status(400).json(err)
        })
})


// UPDATE TASK
router.put('/tasks/:id', isLoggedIn, ( req, res, next) => {
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
router.delete( '/tasks/:id', isLoggedIn, async ( req, res, next ) => {
    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Specified id is not valid'})
        return
    }


    try {
        const deleteTask = await Task.findByIdAndRemove(id).populate('projects')
            
                await Project.findByIdAndUpdate( deleteTask.project, { $pull: { tasks: deleteTask._id }})
            
                res.status(202).json({message: 'Task deleted'})
    }
    catch( err ) {
        res.status(400).json(err)
    }
        
    })
    

module.exports = router;