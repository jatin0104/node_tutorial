const express = require('express');
const app = express();
const router = express.Router();

// ROUTER
router.get('/',(req,res)=>{
    res.send('<h1>First page</h1>')
});

// WITH PARAM
router.get('/user/:id', (req,res)=>{
    console.log(req.params.id);
    res.send('ok:')
})

// USE ROUTER AS DEFAULT
app.use(router)

// listening to port
app.listen(8000,()=>{
    console.log('Server is listening.. Request something');
});