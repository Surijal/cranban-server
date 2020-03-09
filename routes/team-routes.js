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


module.exports = router;