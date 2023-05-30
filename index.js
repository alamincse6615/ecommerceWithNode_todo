const app = require('./app');
const db = require('./config/db')



const port = 3001;
app.get('/',(req,res)=>{
    res.send('hello alamin practicing node js .....')
});


app.listen(port,()=>{
    console.log('server listening on port http://localhost:'+port);
});