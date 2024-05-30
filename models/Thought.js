const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: { 
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    timestamp: true
  },
  {
//To Do: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought',thoughtSchema);

module.exports = Thought;
