const router = require('express').Router();

const {
    getAllUsers, 
    getUser,
    createNewUser,
    updateUser,
    deleteUser
} = require("../controller/user-controller")

router
    .route('/')
    .get(getAllUsers)
    .get(getUser)
    .post(createNewUser)
    .put(updateUser)
    .delete(deleteUser)


// make route for get all users
// get a single user by its _id and populated thought and friend data
// Post a new user
// put to update a suer byits _id
// Delete to remove user by it _id
