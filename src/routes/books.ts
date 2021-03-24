import {Router} from 'express';
const router: Router= Router();
import { booksController } from '../controllers/booksController';

router.get('/', booksController.index);
router.get('/add', booksController.renderFormBook);
router.post('/add', booksController.saveBook);

// router.get('/about',(req,res)=>{res.render('about')})
export default router;