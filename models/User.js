const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            required:true,
            
        }
    }
)