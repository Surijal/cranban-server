const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const teamSchema = new Schema({
    name: { type: String, required: true },
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project'}]

}, { 
    timestamps: { 
    createdAt: 'created_at',
    updatedAt: 'updated_at' 
    }
})



const Team = mongoose.model('Team', teamSchema);

module.exports = Team;