const {Activities}=require('../db')
const {Countries}=require('../db')
const axios=require('axios')
const{ALL_COUNTRY,URL_COUNTRY, CODE_COUNTRY,}=require('../../const')

async function Update_Activities (activities_data){

    try{

            let new_activity= await Activities.create(
                    {
                        name:activities_data.name,
                        difficult:activities_data.difficult,
                        duration:activities_data.duration,
                        season:activities_data.season,
                    });

            for (let i = 0; i < activities_data.countries.length; i++) {
                let prueba= await Countries.findAll({
                                        where:{
                                        name:activities_data.countries[i]},
                                        attributes:["idPais","name","image","continent",
                                        "capital","subregion","area","population"]});
                 new_activity.setCountries(prueba);
                                        }          

        }catch(error){
            console.error(error)
            }
        
        //             try{
        //                     const prueba= await Countries.findAll({
        //                     where:{
        //                     name:activities_data.countries[i]},
        //                     //attributes:["idPais","name","image","continente"],
        //                     });
                        
        //                 //console.log(prueba[0].dataValues.idPais)
            
        //             }
        //             catch(error){
        //                 console.error(error)
        //             }
        // }
            
    }


module.exports={
    Update_Activities,
}