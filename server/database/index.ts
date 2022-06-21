import mongoose, { ConnectOptions }  from 'mongoose';

const URL: string = (process.env.MONGO_URL as string);

exports.connect = async() : Promise<void> => {
    //connection to database
    mongoose
        .connect(URL,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        }as ConnectOptions)
        .then(() => {
            console.log('Mongodb database connected')
        })
        .catch((error) => {
            console.log('Mongodb connection failed exit now...')
            console.log(error)
        })
}

