const Receipt = require('../models/Receipt.js')
module.exports = async(req, res)=>{
	const receipts = await Receipt.find({}).populate('userid');
		console.log(req.session)
	res.render('index',{
		receipts
	});
}
