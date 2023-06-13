const mongoose = require('mongoose');

const url = "mongodb+srv://majazhaq98:V2YDwmQFXnhJVoUH@cluster0.uu0sdur.mongodb.net/Quora_Clone"


module.exports.connect = ()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("MongoDB connected Successfully")
    }).catch((error)=> console.log("Error", error))
}





// mongodb+srv://majazhaq98:<password>@cluster0.uu0sdur.mongodb.net/
// majazhaq98
// V2YDwmQFXnhJVoUH