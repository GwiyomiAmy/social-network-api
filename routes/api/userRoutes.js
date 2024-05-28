const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addThought,
  removeThought,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thoughts
router.route('/:userId/thoughts').post(addThought);

//To Do: add PUT user by id
// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser);

// /api/users/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

//To Do: BONUS Remove a user's associated thoughts when deleted

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeUser);

module.exports = router;
