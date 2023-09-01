import express, {Express} from 'express';
import dotEnv from 'dotenv';
dotEnv.config();

const app: Express = express();
const PORTNUMBER = process.env.PORT_NUMBER || 5000;

app.use(express());

app.use('/', (req, res) => res.send('Hi there'))

app.listen(PORTNUMBER, ()=> console.log(`server is running on port ${PORTNUMBER}`));