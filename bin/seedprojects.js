const mongoose = require('mongoose');
const Project = require('../models/Projects');


const projects = [
    {"_id":{"$oid":"5dfb38cff58a2e4ec40cb1e1"},"deadline":{"$date":{"$numberLong":"1576713600000"}},"tasks":[{"$oid":"5dfb3927f58a2e4ec40cb1e2"},{"$oid":"5dfb398ef58a2e4ec40cb1e3"},{"$oid":"5dfb39bdf58a2e4ec40cb1e4"},{"$oid":"5dfb39e3f58a2e4ec40cb1e5"},{"$oid":"5dfb3a75f58a2e4ec40cb1e6"},{"$oid":"5dfb3a99f58a2e4ec40cb1e7"},{"$oid":"5dfb3c9af58a2e4ec40cb1e8"},{"$oid":"5dfb3cdaf58a2e4ec40cb1e9"},{"$oid":"5dfb3cf8f58a2e4ec40cb1ea"},{"$oid":"5dfb3d19f58a2e4ec40cb1eb"},{"$oid":"5dfb3d43f58a2e4ec40cb1ec"},{"$oid":"5dfb3d61f58a2e4ec40cb1ed"},{"$oid":"5dfb3d94f58a2e4ec40cb1ee"},{"$oid":"5dfb3e15f58a2e4ec40cb1ef"},{"$oid":"5dfb40f2f58a2e4ec40cb1f6"},{"$oid":"5dfb41f8f58a2e4ec40cb1f7"},{"$oid":"5dfb4227f58a2e4ec40cb1f8"},{"$oid":"5dfb4415f58a2e4ec40cb1f9"},{"$oid":"5dfb4483f58a2e4ec40cb1fa"},{"$oid":"5dfb4517f58a2e4ec40cb1fb"}],"users":[{"$oid":"5dfb3895f58a2e4ec40cb1e0"}],"teams":[],"title":"Cranban ","description":"Ironhack Module 3 Project\n\nFullstack JavaScript Applikation\nbuild with React, Node.js","created_at":{"$date":{"$numberLong":"1576745167548"}},"updated_at":{"$date":{"$numberLong":"1576748311722"}},"__v":{"$numberInt":"0"}}

]


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
.then(() => {
    console.log('connected to db');
    return Project.create(projects);
}).then((data) => {
    console.log('created data', data);
}).then(() => {
    mongoose.connection.close();
})
.catch((error) => {
    console.log(error);
    mongoose.connection.close();
});
