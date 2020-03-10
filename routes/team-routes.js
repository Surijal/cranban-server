const express = require ("express");
const mongoose = require ("mongoose");


const router = express.Router();

const Team = require("../models/Teams");
const User = require('../models/User');


// Helpter Functions
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin,
    validatePassword
} = require('../helpers/middlewares');


// Create Team
router.post('/', isLoggedIn,  async( req, res, next ) => {

    const { name } = req.body;

    const {_id} = req.session.currentUser;

    try {
        const createdTeam = await Team.create({ name, projects: [], users: [_id] });
        await User.findByIdAndUpdate(_id, {$push: { teams: createdTeam._id}}, { new: true});

        res.status(201).json(createdTeam)
    } catch(err) {
        res.status(400).json(err)
    }
})

// Find all Teams
router.get('/', isLoggedIn, ( req, res, next ) => {

    Team.find()
        .then( allTeams => {
            res.status(200).json(allTeams)
        })
        .catch( err => {
            res.status(400).json( err )
        })
})


// Find specific Team by Team ID
router.get('/:id', isLoggedIn, ( req, res, next ) => {

    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isValid( id )) {
        
        res.status(500).json({message: 'Specified id is not valid'})
        return
    }

    Team.findById( id )
        .then( foundTeam => {
            res.status(200).json( foundTeam )
        })
        .catch( err => {
            res.status(400).json(err)
        })
})


// Find Team by User ID
router.get('/user/:userId', isLoggedIn, ( req, res, next ) => {

    const { userId } = req.session.currentUser;


    if ( !mongoose.Types.ObjectId.isValid( userId )) {

        res.status(500).json({ message: 'Specified userId is not Valid' })
        return
    }

    Team.findById( { users: userId })
        .then( foundTeams => {
            res.status(200).json( foundTeams )
        })
        .catch( err => { 
            res.status(400).json(err)
        })

})


// Find Team by Id and update
router.put('/:id', isLoggedIn, ( req, res, next ) => {

    const { id } = req.params;
    const { name } = req.body;


    if ( !mongoose.Types.ObjectId.isValid(id)) {

        res.status(500).json({ message: 'Specified teamId is not Valid'})
        return
    }

    Team.findByIdAndUpdate( id, { name })
        .then( updatedProject => {
            res.status(200).json( updatedProject )
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;