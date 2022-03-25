const router = require('express').Router();

// this page routes to the appropritate controller file
const {
    getAllUsers, 
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
} = require("../../controller/user-controller")

const {
    getAllThoughts,
    getThoughtById, 
    updateThought,
    createThought, 
    deleteThought,
    createReaction,
    deleteReaction
} = require("../../controller/thought-controller")

router
    .route('/users')
    .get(getAllUsers)
    .post(createNewUser)
    
router
    .route('/users/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
router
    .route('/thoughts')
    .get(getAllThoughts)
    
router
    .route('/thought/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
    .post(createThought)
    
router
    .route('/thought/:thoughtId/:reactionId')
    .delete(deleteReaction);
    
router
    .route('/thought/:thoughtId/reactions')
    .put(createReaction)

   



    module.exports = router;

// make route for get all users
// get a single user by its _id and populated thought and friend data
// Post a new user
// put to update a suer byits _id
// Delete to remove user by it _id
