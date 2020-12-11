module.exports = (req,res,next)=>{  
if(req.files == null || req.body.title || req.body.body || req.body.prep)
	{
		console.log(req.title)
		return res.render('/receipts/new')
	}
	next()
	}