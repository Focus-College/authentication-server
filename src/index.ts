import express from "express";
import * as Tokens from './routes/tokens';
import * as Users from './routes/users';

const app = express();
const port = 4330;

app.use(express.json());

// load tokens endpoints
Object.values(Tokens).forEach(( endpoint:any ) => endpoint(app));

// load users endpoints
Object.values(Users).forEach(( endpoint:any ) => endpoint(app));

app.listen(port, () => {
    console.log(`Web Server Started and listening on localhost:${port}`);
})