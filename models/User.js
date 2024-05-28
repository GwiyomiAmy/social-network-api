const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
//const thoughtSchema = require('./Thought');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50, //To Do: Trimmed
    },
   email: {
      type: String,
      required: true,
      unique: true,
//To Do: must match a valid email address (Mongoose matching validation)
    },
    thoughts: [{type: mongoose.Schema.Types.ObjectId, ref: "Thought"}], //[thoughtSchema],
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}], //[userSchema],
  },
  {
//To Do: Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
    toJSON: {
      virtual: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
