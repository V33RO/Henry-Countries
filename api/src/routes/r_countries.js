const {Router} =require('express')
const {AllCountries,IdCountries}=require('../controllers/c_countries')
const router =Router()

router.get('/',AllCountries);
router.get('/:idPais',IdCountries)


module.exports=router;