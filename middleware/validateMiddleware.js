module.exports = (req,res,next)=>{   
console.log("qwerty"); 
    if(req.files == null){        
       console.log("qwerty2");
        return res.redirect('/receipts/new')
    }    
    next()
}