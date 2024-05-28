const { Schema, model } = require('mongoose');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
//To Do: Use a getter method to format the timestamp on query
    },
    username: { 
//To Do: user that created this thought
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
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
