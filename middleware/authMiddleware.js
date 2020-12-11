const User = require('../models/User')

module.exports = (req, res, next) => {    
	// console.log("tut est kto?")
    User.findById(req.session.userId, (error, user ) =>{
    	// console.log("tut est kto?")
      if(error || !user ) {
      	console.log("tut est kto?")
      	 return res.redirect('/')
      }
      next()
    })
}