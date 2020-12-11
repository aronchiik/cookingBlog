const User = require('../models/User.js')
const Receipt = require('../models/Receipt.js')
const path = require('path')


module.exports = (req, res) => {
    const {username, password, ConfirmPassword} = req.body;
    let image = req.files.image;
    if (password === ConfirmPassword) {

        image.mv(path.resolve(__dirname, '..', 'public/img', image.name), async (error) => {

           await User.create({
                    ...req.body, 
                image:'/img/'+image.name, 
                 receiptid:req.session.receiptId
            },
                (error, user) => {
                
                if (error) {
                	console.log("no problem yet")
                    return res.render('register', {message: error});
                }
                res.redirect('/')
            })
        })
    } else {
        res.render('register', {message: "Passwords not the same"});
    }}
