const { getObjectId } = require('../../../helpers/mongoSeeder');
// const { consoleLogEnabled } = require('mongoose-seed');
const Users = require('../../../models/User')


const newUsers = [ 
    { 
        _id: getObjectId('user1'),
        name: 'Boris'
    },
    
    {
        _id: getObjectId('user2'),
        name: 'Surijal'
    },
    
    {
        _id: getObjectId('user3'),
        name: 'Peter Pan' 
    }
];

// const User = mapToEntities(Users);
console.log('Hello Users', newUsers)


module.exports = newUsers;