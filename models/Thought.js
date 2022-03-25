const {
    Schema,
    model,
    Types
} = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
const reactionSchema = new Schema({
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
},
{
    id: false
}
)

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
    reactions: [reactionSchema]
}, {
    toJSON: {
        virtuals: true,
        // getters: true
    },
    id: false
});

ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length
})

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought
