const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const ReceiptSchema = new Schema({
  title: String,
  // username: String,
  userid:{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
  required:true
  },
  body: String,
  prep: String,
  image:String,
});
  const Receipt = mongoose.model('Receipt',ReceiptSchema);
module.exports = Receipt

  /*
  //username: String,
  userid: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'User',
  	required: true
  },
  datePosted:{
  	type: Date, 
  	default: new Date()
  },
  image: String
});
*/

