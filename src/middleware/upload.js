const path= require('path')
const multer= require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname ,"../uploads"))
    },
    filename: function (req, file, callback) {
      const uniqueprefix = Date.now() 
      callback(null, uniqueprefix + '-' + file.originalname )
    }
  })

  const fileFilter = (req, file, callback)=> {
      console.log({file})

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:
    if(file.mimetype==="image/jpeg" || file.mimetype==="image/png"){
        callback(null, true)
    }
   else{
    callback(null, false)
   }
  
    // To accept the file pass `true`, like so:
   
  
    // You can always pass an error if something goes wrong:
   // callback(new Error('I don\'t have a clue!'))
  }  

const options = {
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024*1024*5
    },
    
};

const uplaods= multer(options)
module.exports=uplaods;