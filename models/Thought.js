const {
    Schema,
    model,
    Types
} = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        unique: true,
        // get: (createdAtVal) => dateFormat(createdAtVal),
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    username: {
        type: String,
        required: true
    },
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: [reactionSchema]
    }]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
});
const reactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now,
        // get: (createdAtVal) => dateFormat(createdAtVal),

    }
})


ThoughtSchema.virtual("reactionCount").get(function() {
    return this.reasctions.length
})

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought 
