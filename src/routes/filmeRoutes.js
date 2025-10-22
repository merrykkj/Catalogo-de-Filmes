import e from 'express';
import FilmeController from '../controllers/FilmeController.js';
import uploadMiddleware from '../middlewares/upload.js';

const router = e.Router();

router.get('/filmes', FilmeController.getAll);
router.get('/filmes/:id', FilmeController.getById);
router.post('/filmes', uploadMiddleware.single('capa'), FilmeController.create); 
router.put('/filmes/:id', FilmeController.update);
router.delete('/filmes/:id', FilmeController.delete);

export default router;