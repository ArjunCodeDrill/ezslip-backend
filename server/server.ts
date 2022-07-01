import './init-aliases';
import { config } from 'dotenv';
config();
import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import { schema } from "./schema"
import tokenValidation from '@middleware/tokenValidation';
import * as path from 'path';
import route from './services/rest_api/route';

//define the express
const app: Application = express();

//middleware
app.use(express.json({limit: '50mb'}));
app.use(cors());

app.use('/image',express.static(path.join(__dirname, 'public/uploads')));

//rest-api
app.use("/",route);

//connect to database
require("./database").connect();

//server port 
const PORT = process.env.PORT || 8000;

const server = new ApolloServer({
   schema,
   context : async({ req }) => {
       if(!req.headers.authorization) return { msg : 'User must be logged In!'}
            const token = req.headers.authorization;
            const user = await tokenValidation(token);
            return { user };
   }
})

server.start().then(res => {
    //apply the apollo middleware and set its path to /ezslip
    server.applyMiddleware({app,path : '/ezslip'})
    app.listen(PORT,() => {
        console.log(`Server is runnig at http://localhost:${PORT}/ezslip`)
    })
})


