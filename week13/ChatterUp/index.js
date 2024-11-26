import {server} from './server.js';
import {connectToDatabase} from './src/config/mongoose.js';
server.listen(3000, () => {
    console.log("Listening on port 3000");
    connectToDatabase();
});