const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Project = require('../models/Projects');

const User = require('../models/User');


// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin,
    validatePassword
} = require('../helpers/middlewares');


//POST NEW PROJECT
router.post('/', isLoggedIn,  async( req, res, next ) => {

    const { title, description, deadline } = req.body;

    const {_id} = req.session.currentUser;

    try {
        const createdProject = await Project.create({ title, description, deadline, tasks: [], users: [_id] });
        await User.findByIdAndUpdate(_id, {$push: { projects: createdProject._id}}, { new: true});

        res.status(201).json(createdProject)
    } catch(err) {
        res.status(400).json(err)
    }
})


//GET ALL PROJECT
router.get('/', isLoggedIn, ( req, res, next ) => {
    Project.find()
        .populate('tasks')
        .then( allProjects => {
            res.status(200).json(allProjects)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})


//GET PROJECT BY USER ID
router.get('/user/:userId', isLoggedIn, ( req, res, next ) =>{

    const { userId } = req.session.currentUser._id;
    

    Project.findOne(userId)
        .populate('tasks')
        .then( allUserProjects => {
            res.status(200).json(allUserProjects)
        })
        .catch( err => {
            res.status(400).json(err)
        })
})


//GET SPECIFIC PROJECT
router.get('/:id', isLoggedIn, ( req, res, next ) => {
    const { id } = req.params;
    

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Specified id is not valid'})
        return
    }

    Project.findById(id)
        .populate('tasks')
        .then( (foundProject) => {
            res.status(200).json(foundProject)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})


//PUT SPECIFIC PROJECT
router.put('/:id', isLoggedIn, ( req, res, next ) => {
    const { id } = req.params;
    const { title, description, deadline } = req.body;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Specified id is not valid'})
        return
    }

    Project.findByIdAndUpdate(id, { title, description, deadline })
        .populate('tasks')
        .then( (foundProject) => {
            res.status(200).json(foundProject)
        })
        .catch( (err) => {
            res.status(400).json(err)
        })
})


router.delete('/:id', isLoggedIn,( req, res, next ) => {
    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(500).json({message: 'Specified id is not valid'})
        return
    }


    Project.findByIdAndRemove(id)
        .populate('tasks')
        .then( (foundProject) => {
            res.status(202).json(foundProject)
        })
        .catch( (err) => {
            res.status(400).json(err)
        })
})


module.exports = router;