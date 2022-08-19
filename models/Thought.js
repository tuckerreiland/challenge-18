const { Schema, model } = require('mongoose');

//Schema to create reactionSchema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      unqiue: true,
      required: true,
      trim: true
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type:Date,
        default:Date.now()
    }
  },
);

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280
    },
    username: {
        type:String,
        required: true,
    },
    createdAt: {
      type:Date,
      default:Date.now()
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

// Create a virtual property `tagCount` that gets the amount of comments per user
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;