const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Project = require('../models/Projects');
const Task = require('../models/Tasks');


//POST NEW PROJECT
router.post('/', ( req, res, next ) => {
    const { title, description, deadline  } = req.body;

    Project.create({ title, description, deadline, tasks: [] })
        .then( (createdProject ) => {
            res.status(201).json(createdProject)
        })
        .catch((err) => {
            res.status(400).json(err)
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


//GET SPECIFIC PROJECT
router.get('/:id', ( req, res, next ) => {
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
router.put('/:id', ( req, res, next ) => {
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


router.delete('/:id', ( req, res, next ) => {
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