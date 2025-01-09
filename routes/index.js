const express=require('express');
const router=express.Router();
/* const horaMiddleware=require('./middlewares/horaMiddleware'); */

router.get('/',(req,res)=>{
    
    res.send(`<h1>Bienvenido</h1>
        <p>Ahora son las ${req.dateType} </p>
        <a href="/endroute">
        <button >Entrar</button>
        </a>`)
    
});

module.exports=router;