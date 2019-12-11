const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: Date, default: null },
    project: { type: Schema.Types.ObjectID, ref: 'Project'},
    done: { type: Boolean, default: false },
    subTask: [{ 
    description: { type: String, required: true }, 
    done: { type: Boolean, default: false }
                            }]

},{ 
    timestamps: { 
    createdAt: 'created_at',
    updatedAt: 'updated_at' 
    }
})





const Task = mongoose.model('Task', taskSchema);

module.exports = Task;