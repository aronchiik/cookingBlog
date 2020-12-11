const Receipt = require('../models/Receipt.js')
const path = require('path')
module.exports = (req,res)=>{
	let image = req.files.image;
	console.log('qwer')
	image.mv(path.resolve(__dirname,'..','public/img',image.name),async(error)=>{
		await Receipt.create({
					...req.body,
				image:'/img/'+image.name,
				userid:req.session.userId
				})
	res.redirect('/')
	})
}