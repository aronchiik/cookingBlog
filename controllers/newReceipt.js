const Receipt = require('../models/Receipt')
const path = require('path')

module.exports = (req, res)=>{
	if (req.session.userId) {
		return res.render('./newReceipt')
	} res.redirect('/')
	
}
