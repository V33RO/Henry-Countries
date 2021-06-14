const {Activities}=require('../db')
const {Countries}=require('../db')
const axios=require('axios')
const{ALL_COUNTRY,URL_COUNTRY, CODE_COUNTRY,}=require('../../const')

async function Update_Activities (activities_data){


for (let i = 0; i < activities_data.countries.length; i++) {
  
const prueba= await Countries.findAll({
    where:{
    name:activities_data.countries[i]},
    attributes:["idPais"],
});

console.log(prueba[0].dataValues.idPais)

     try{
          const carga_activity= await Activities.create(
             {
                // name:activities_data.name,
                // difficult:activities_data.difficult,
                // duration:activities_data.duration,
                // season:activities_data.season,
             });
      
    }catch(error){
        console.error(error)
    }
 }

}

module.exports={
    Update_Activities,
}