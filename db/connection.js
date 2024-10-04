const mongoose=require('mongoose')

const URI='mongodb://127.0.0.1:27017/task-manager'

const connectionSetup=(Port)=>{
    return mongoose.connect(URI)
}

module.exports={connectionSetup}