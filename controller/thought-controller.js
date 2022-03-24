const { User, Thought } = require("../models");

const thoughtController = {
    async getAllThoughts(req, res) {
        try {
          const foundThought = await Thought.find();
          res.json(foundThought);
        } catch (error) {
          console.error(error);
        }
      },
      createThought({ params, body }, res) {
        Thought.create(body)
            .then(({ _id}) => {
                return User.findOneAndUpdate(
                    { _id: params.id },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this username!'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
      async getThoughtById({ params }, res) {
        try {
          const foundThought = await Thought.findOne({
            _id: params.id,
          });
          res.json(foundThought);
        } catch (error) {
          console.error(error);
        }
      },
      async updateThought({ params, body }, res) {
        try {
          const updatedUser = await Thought.findOneAndUpdate(
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
      async deleteThought({ params }, res) {
        try {
          const deletedUser = await Thought.findOneAndDelete({
            _id: params.id,
          });
          res.json(deletedUser);
        } catch (error) {
          console.error(error);
        }
      },
}
module.exports = thoughtController