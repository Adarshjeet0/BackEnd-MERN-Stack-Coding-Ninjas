import {app} from './index.js';
import {connectUsingMongoose} from './src/config/mongooseConfig.js';

app.listen(3000, ()=>{
    console.log("Server is listening on port number:3000");
    connectUsingMongoose()
})