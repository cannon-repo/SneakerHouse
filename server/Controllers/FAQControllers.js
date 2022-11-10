const FAQ = require("../Models/FAQ");

module.exports.postAddFAQ = async (req,res) => {
    const {Name,Email,Message} = req.body;
    try {
        await FAQ.create({Name, Email, Message});
        res.status(200).json({success: true, message: 'Added Successfully'});
    } catch (err) {
        res.status(400).json({success: false, message: 'Failed'});
    }
}

module.exports.getAllFAQ = async (req,res) => {
    try {
        const allFAQ = await FAQ.find();
        res.status(200).json({success: true, FAQ: allFAQ});
    } catch (err) {
        res.status(400).json({success: false, error: err});
    }
}