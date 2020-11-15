import mongoose, { connections } from 'mongoose';
const mongoURI = process.env.mongoURI

const connection = {}

export default async function dbConnect(){
    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })

    connection.isConnected = db.connections[0].readyState
    //console.log(connection.isConnected)
}

//export default dbConnect;