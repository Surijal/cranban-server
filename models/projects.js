const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: Date, default: null },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    users: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    teams: [{ type: Schema.Types.ObjectId, ref: 'Team'}],

}, { 
    timestamps: { 
    createdAt: 'created_at',
    updatedAt: 'updated_at' 
    }
})



const Project = mongoose.model('Project', projectSchema);

module.exports = Project;