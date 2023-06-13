const Question = require('../models/Question');
module.exports.create = async function(req,res){
    try {
        let question = await Question.create({
            questionName:req.body.questionName,
            questionUrl:req.body.questionUrl
        });
        return res.status(201).send({
            status:true,
            message:"Question added successfully"
        });
    } catch (error) {
        res.status(500).send({
            status:false,
            message:"Error while addding question"
        })
    }
}

module.exports.getQuestion = async function(req,res){
    try {
        let ques = await Question.aggregate([
            {
                $lookup:{
                    from:"answers", // collection to join
                    localField:"_id", // field from input document
                    foreignField:"questionId",
                    as:"allAnswers" // output array field
                }
            }
        ]).exec().then((doc)=>{
            res.status(200).send(doc)
        });
    } catch (error) {
        res.status(500).send({
            status:false,
            message:"Unable to get Question details"
        });
    }
}