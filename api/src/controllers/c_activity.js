const {Activities}=require('../db');
const {Update_Activities}=require('../crud_base/crud_activity')

function addActivity (req,res,next){
  const data_activity=req.body;
   if(!data_activity){
      return res.send({error:409,msg:"Informacion a cargar no enviada"})
   }else{
       const createActivity=Update_Activities(data_activity)
        return res.send('actividad creada')   
   }
}

module.exports={
    addActivity,
}
