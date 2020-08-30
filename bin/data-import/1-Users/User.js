const { mapToEntities } = require('../../../helpers/mongoSeeder');
const { consoleLogEnabled } = require('mongoose-seed');

const Users = [ 
    { 
        name: 'Boris'
    },
    
    {
        name: 'Surijal'
    },
    
    {
        name: 'Peter Pan' 
    }
];

console.log('Hello Users', Users)

// const User = mapToEntities(Users);

module.exports = Users;