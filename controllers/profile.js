const User =  require('../models/User.js')

module.exports = async (req,res) =>{

	const user = await User.findById(loggedIn)

	res.render('profile',{
		user
	});
}