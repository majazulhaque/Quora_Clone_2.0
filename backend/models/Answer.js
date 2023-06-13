const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    answer: String,
    questionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Answer = mongoose.model("Answer",answerSchema);

module.exports = Answer;