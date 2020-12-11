const Receipt =  require('../models/Receipt.js')

module.exports = async (req,res) =>{
	const receipts = await Receipt.findById(req.params.id).populate('userid');
	console.log(receipts)
	res.render('receipt',{
		receipts
	});
}

