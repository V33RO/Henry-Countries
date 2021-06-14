const {Router} =require('express')
const {addActivity}=require('../controllers/c_activity')
const router =Router()

router.get('/',function(req,res){
  res.send('resp activity')
});

router.post('/',addActivity);

module.exports=router;