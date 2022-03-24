const { User } = require("../models");

const userController = {
  async getAllUsers(req, res) {
    try {
      const foundUser = await User.find();
      res.json(foundUser);
    } catch (error) {
      console.error(error);
    }
  },
  async createNewUser({ body }, res) {
    try {
      const createdUser = await User.create(body);
      res.json(createdUser);
    } catch (error) {
      console.error(error);
    }
  },
  async getUserById({ params }, res) {
    try {
      const foundUser = await User.findOne({
        _id: params.id,
      });
      res.json(foundUser);
    } catch (error) {
      console.error(error);
    }
  },
  async updateUser({ params, body }, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        {
          _id: params.id,
        },
        body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
    }
  },
  async deleteUser({ params }, res) {
    try {
      const deletedUser = await User.findOneAndDelete({
        _id: params.id,
      });
      res.json(deletedUser);
    } catch (error) {
      console.error(error);
    }
  },
};
module.exports = userController;
