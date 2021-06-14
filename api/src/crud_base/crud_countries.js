const {Countries}=require('../db')
const axios=require('axios')
const{ALL_COUNTRY,URL_COUNTRY, CODE_COUNTRY,}=require('../../const')
let id_s=[];
let idess='';
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function Id_Random (){
 let exists
 let new_id='';

    for ( let i = 0; i < 3; i++ ) {
        new_id= new_id + characters[Math.floor(Math.random()*(54-1+1))+1];
    }

     exists = id_s.includes(new_id);
    if((!exists)&&(new_id.length===3)&&(new_id!==undefined)){
         id_s.push(new_id);
         return new_id;
    }else{
         Id_Random();
    }
}

async function Update_Countries (countries_data){
   
    
            for(i=1;i<countries_data.length;i++){
                Id_Random();
                idess=id_s[id_s.length-1];
                try {
                    const carga_countries= await Countries.create(
                       {
                        idPais:idess,
                        name:countries_data[i].name,
                        image:countries_data[i].flag,
                        continent:countries_data[i].region,
                        capital:countries_data[i].capital,
                        subregion:countries_data[i].subregion,
                        area:countries_data[i].area,
                        population:countries_data[i].population   
                       }
                    );
                } catch (error) {
                    console.error(error)
                }
                
            }  
    
 
}


module.exports={
    Update_Countries,
}