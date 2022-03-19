const {Schema ,model} = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought"
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
})

// Virtuals allow you to add virtual properties to a document that aren't 
// stored in the database. They're normally computed values that get evaluated 
// when you try to access their properties.
UserSchema.virtual("friendCount").get(function() {
    return this.friends.length
})
const User = model('User', UserSchema);
module.exports = User