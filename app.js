const express=require('express');
const app=express();

const index=require('./routes/index');
const endroute=require('./routes/endroute');
const validarHora=require('./middlewares/validarHora');

app.use('/',index);
app.use('/endroute',validarHora,endroute);

app.listen(3000,()=>{
    console.log('Servidor en el puerto 3000 ')
})