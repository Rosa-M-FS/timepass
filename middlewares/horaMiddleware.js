const horaMiddleware=(req,res,next)=>{
    const now = new Date();
    const hours=now.getHours();
    const minutes=now.getMinutes();
    const formatedTime = `${hours}:${minutes} h`;
    req.dateType=`Actualmente son las ${formatedTime}`
    next();
}
module.exports=horaMiddleware;