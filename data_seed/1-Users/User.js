const { mapToEntities } = require('../../helpers/mongoSeeder');

const User = [ 'Boris', 'Surijal', 'Peter Pan' ];


module.exports = mapToEntities(User);