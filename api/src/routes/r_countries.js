const {Router} =require('express')
const {AllCountries,IdCountries,Filtros}=require('../controllers/c_countries')
const router =Router()

router.get('/',AllCountries);
router.get('/filtros',Filtros);
router.get('/:idPais',IdCountries);

module.exports=router;