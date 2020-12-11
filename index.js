const express = require('express')
const path = require('path')
const app = new express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload') 
app.use(fileUpload()) 

const newReceiptController = require('./controllers/newReceipt')
const homeController = require('./controllers/home')
const saveReceiptController = require('./controllers/saveReceipt')
const getReceiptController = require('./controllers/getReceipt')
const newUserController = require('./controllers/newUser')
const saveUserController = require('./controllers/saveUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')

const profileController = require('./controllers/profile')
const receiptsListController = require('./controllers/receiptList')
const aboutController = require('./controllers/about')
const expressSession = require('express-session');

const validateMiddleware = require("./middleware/validateMiddleware");
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
const flash = require('connect-flash');



mongoose.connect('mongodb://localhost/receiptsDb', {useNewUrlParser: true});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.use(express.static('public'))

app.listen(2020, ()=>{
    console.log('App listening on port  ...')    
})

app.use('/receipts/save',validateMiddleware) 

app.use(expressSession({
    secret: 'cat' 
})) 

global.loggedIn = null; 

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId; 
    next()   
});

app.use(flash());

app.get('/receipts/new', authMiddleware,newReceiptController)
app.get('/',homeController)
app.get('/receipt/:id',getReceiptController)
app.get('/about',aboutController)
app.get('/receiptsList',receiptsListController)
app.get('/auth/profile',profileController)
        
app.post('/receipts/save', authMiddleware,saveReceiptController)
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.post('/users/register', redirectIfAuthenticatedMiddleware, saveUserController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.post('/users/login',redirectIfAuthenticatedMiddleware, loginUserController) 

app.get('/logout', async (req, res) => {
 req.session.destroy(() => {
  res.redirect('/')
 })
})
app.use((req, res) => res.render('notFound'));

