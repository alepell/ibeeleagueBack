import { Router } from 'express';

import multer from 'multer';
import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import multerConfig from './config/multer';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/build', UserController.store);

routes.get('/jogadores', UserController.index);

routes.post('/files', upload.single('file'), FileController.store);
export default routes;
