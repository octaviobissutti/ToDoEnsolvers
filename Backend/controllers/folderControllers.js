const Folder = require("../models/Folder");

exports.createNewFolder = async(req,res,next) =>{
    const folder = new Folder(req.body);
    try{
        await folder.save();
        res.json({message:"Folder created", folder});
    } catch (error){
        console.log(error);
        return next();
    }
};

