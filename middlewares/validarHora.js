const validarHora=(req,res,next)=>{
    const now = new Date();
    const hour=now.getHours();
    if (hour>=12 && hour<=24){
        next();//la hora es válida y continua
    } else {
        const mensaje='Aún no son las 12 de la mañana';
        res.locals.mensaje=mensaje;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
};

module.exports=validarHora;