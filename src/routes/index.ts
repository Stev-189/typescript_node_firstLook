import {Router} from 'express';
const router: Router= Router();

import {indexController} from '../controllers/indexController'
// router.get('/',(req,res)=>{
//   res.send('Hello Word')
// })
// router.get('/', indexController.index);
router.get('/', indexController.index);

router.get('/add',(req,res)=>{
  res.send('Form')
})
// router.get('/about',(req,res)=>{res.render('about')})
export default router;