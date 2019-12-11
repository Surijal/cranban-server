const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: { type: String, required: true },
  // lastName: { type: String, required: true },
  password: { type: String, required: true},
  // email: { type: String, required: true, unique:true },
  // projects: [{ type: Schema.Types.ObjectId, ref: 'Project'}],
  // teams: [{ type: Schema.Types.ObjectId, ref: 'Team'}]
}, { 
timestamps: { 
createdAt: 'created_at',
updatedAt: 'updated_at' 
}
})



const User = mongoose.model('User', userSchema);

module.exports = User;
