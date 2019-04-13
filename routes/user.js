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

route.route('/users')
  .post(createUser)
  .get(getAllUsers);

route.route('/users/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

route.param('userId', getByIdUser);

module.exports = route;