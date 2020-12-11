module.exports = (req, res, next) =>{
	console.log("error")
    if(req.session.userId){
    	console.log("error")
      return res.redirect('/') // if user logged in, redirect to home page
    }
    next()
}