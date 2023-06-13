const Answer = require('../models/Answer');
module.exports.createAnswer = async function(req,res){
    try {
        let answer = await Answer.create({
            answer: req.body.answer,
            questionId: req.body.questionId
        });
        return res.status(201).send({
            status:true,
            message:"Answer added successfully"
        });
    } catch (error) {
        return res.status(500).send({
            status:false,
            message:"Answer not add"
        });
    }
}