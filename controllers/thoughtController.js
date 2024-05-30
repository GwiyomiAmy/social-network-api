const { Thought, User, Reaction } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findById({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a thought
  async createThought(req, res) {
    try {
      const user = await User.findById({ _id: req.body.userId })
      console.log(user)

    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
      const thought = await Thought.create(req.body);
      user.thoughts.push(thought._id);
      await user.save();
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

// Update a thought
async updateThought(req, res) {
  try {
    const thought = await Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!thought) {
      res.status(404).json({ message: 'No thought with this id!' });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
},

  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      await User.deleteMany({ _id: { $in: thought.users } });
      res.json({ message: 'Thought and users deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
    // Add an reaction to a thought
    async createReaction(req, res) {
      console.log('You are adding an reaction');
      console.log(req.body);
  
      try {
        const thought = await Thought.findByIdAndUpdate(
          { _id: req.params.thoughtId },
          { $push: { reactions: req.body } },
          { runValidators: true, new: true }
        );
  
        if (!thought) {
          return res
            .status(404)
            .json({ message: 'No thought found with that ID :(' });
        }
  
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // Remove reaction from a thought
    async deleteReaction(req, res) {
      //console.log(req.params)
      try {
        const thought = await Thought.findByIdAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        );
  
        if (!thought) {
          return res
            .status(404)
            .json({ message: 'No thought found with that ID :(' });
        }
  
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },
};
