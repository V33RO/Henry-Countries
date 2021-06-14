const {Countries}=require('../db')
const axios=require('axios')
const{ALL_COUNTRY,URL_COUNTRY, CODE_COUNTRY,}=require('../../const')
const {Update_Countries}=require('../crud_base/crud_countries')
let instanciar=true;

async function AllCountries (req,res,next){
   
   const {page}=req.query;
   const page_num=Number.parseInt(page);
   
   let page_valida=0;
   if(!Number.isNaN(page_num)&&page_num>0){
      page_valida=page;
   }
 
    if(instanciar){
            axios.get(`${URL_COUNTRY}${ALL_COUNTRY}`)
                .then((resp)=>{
                        let countries_data=resp.data;
                        instanciar=false;
                        Update_Countries (countries_data);
                        return res.send('Primera Instancia');
                    })
                    .catch((err)=>next(err));
    }else{
      const countries_base= await Countries.findAndCountAll({
          limit:10,
          offset:page_valida*10,
      }
      );
      return res.send({
          content:countries_base.rows,
          totalPage:Math.ceil(countries_base.count/10)});
    }
    
}

function IdCountries (req,res,next){
    let categoria=req.params.idPais;
    return res.send(categoria);
}

module.exports={
    AllCountries,IdCountries,
}