const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subTaskSchema = new Schema({ 
    description: { type: String, required: true }, 
    done: { type: Boolean, default: false }

}, { 
    timestamps: { 
    createdAt: 'created_at',
    updatedAt: 'updated_at' 
    }
})



const SubTaskSchema = mongoose.model('SubTaskSchema', subTaskSchema);

module.exports = SubTaskSchema;