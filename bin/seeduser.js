const mongoose = require('mongoose');
const Users = require('../models/Users');


const users = [
    {"_id":{"$oid":"5dfb3895f58a2e4ec40cb1e0"},"projects":[{"$oid":"5dfb38cff58a2e4ec40cb1e1"}],"teams":[],"username":"Boris","email":"boris@cranban.de","password":"$2b$10$JtikEVnf.yMC5ltd7ZTTy.UIEHR86C1xhNbyC623pshMRf04eD5UO","created_at":{"$date":{"$numberLong":"1576745109845"}},"updated_at":{"$date":{"$numberLong":"1576745167580"}},"__v":{"$numberInt":"0"}}

]



mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
.then(() => {
    console.log('connected to db');
    return Users.create(users);
}).then((data) => {
    console.log('created data', data);
}).then(() => {
    mongoose.connection.close();
})
.catch((error) => {
    console.log(error);
    mongoose.connection.close();
});
