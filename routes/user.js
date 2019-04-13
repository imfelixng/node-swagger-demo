const express = require('express');

const {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getByIdUser,
  getOneUser
} = require('../controllers/UserController');

const route = express.Router();

router.route('/users')
  .post(createUser)
  .get(getAllUsers);

router.route('/users/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

router.param('userId', getByIdUser);

module.exports = route;