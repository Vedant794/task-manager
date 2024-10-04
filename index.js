const express=require('express')
const itemRoutes=require('./Routes/itemRoutes')
const {connectionSetup}=require('./db/connection')
const {notFound}=require('./middlewares/not-found')
const {errorHandlerMiddleware}=require('./middlewares/error-handler')

const app=express()
const Port=3000

app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/tasks',itemRoutes)

app.use(notFound)
app.use(errorHandlerMiddleware)

const start=async()=>{
    try {
        await connectionSetup(Port).then(()=>app.listen(Port,()=>console.log(`Server Started at Port:${Port}`))).catch((err)=>console.log(err))
    } catch (error) {
        console.log(error)
    }
}

start()



