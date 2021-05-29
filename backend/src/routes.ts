import { Router } from 'express';
import UserController from './controller/UsersController';

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

export default routes;