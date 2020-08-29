const mongoose = require('mongoose');
require('dotenv').config()

const User = require('../models/User');
const Teams = require('../models/Teams');
const Projects = require('../models/Projects');
const Tasks = require('../models/Tasks');
const SubTasks = require('../models/SubTasks');
const Team = require('../models/Teams');


const users = [
    {
        //"_id":{"$oid":"5dfb3895f58a2e4ec40cb1e0"},
        "projects": [],
        "teams":[],
        "username":"Boris",
        "email":"boris@cranban.de",
        "password":"$2b$10$JtikEVnf.yMC5ltd7ZTTy.UIEHR86C1xhNbyC623pshMRf04eD5UO",
        "teamname": "Peter Pan 42"
    }

]


const teams = [
    {
        "name": "Peter Pan 42",
        "members": [],
        "projects": []
    }
]

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
.then(() => {
    console.log('connected to db.user');
    return User.create(users);
}).then((data) => {
    console.log('created data.user', data);
})
.then(() => {
    console.log('connected to db.teams');
    return Teams.create(teams);
}).then((data) => {
    console.log('created data.teams', data);
}).then(() => {
    mongoose.connection.close();
})
.catch((error) => {
    console.log(error);
    mongoose.connection.close();
});

try {
    const createdTeam = await Team.create({ name, projects: [], members: [ id ] });
    await User.findByIdAndUpdate(_id, {$push: { teams: createdTeam._id}}, { new: true});

    res.status(201).json(createdTeam)
} catch(err) {
    res.status(400).json(err)
}