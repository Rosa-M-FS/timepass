const express=require('express');
const router=express.Router();
/* const horaMiddleware=require('./middlewares/horaMiddleware'); */

router.get('/',(req,res)=>{
    const mensaje=req.query.mensaje || '';
    res.send(`<h1>Bienvenido</h1>
        <p>Ahora son las ${req.dateType} </p>
        <p>${mensaje} </p>
        <a href="/endroute">
        <button >Entrar</button>
        </a>`)
    
});

module.exports=router;