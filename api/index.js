import { log } from 'console';
import express from 'express'

const app = express();

const PORT = process.env.PORT || 4000;


// server is running

app.listen(PORT,() =>{
    console.log(`Server is running on PORT ${PORT}`);
    
})