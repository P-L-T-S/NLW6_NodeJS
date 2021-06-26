import { Router } from 'express';
import CreateUserController from './controllers/CreateUserController';
import CreateTagController from './controllers/CreateTagController';
import AuthenticateUserController from './controllers/AuthenticateUserController';
import CreateComplimentController from './controllers/CreateComplimentController';
import ListComplimentsSendedController from './controllers/ListComplimentsSendedController';
import ListComplimentsReceivedControlles from './controllers/ListComplimentsReceivedControlles';
import ensureAdmin from './middlewares/ensureAdmin';
import ensureAuthenticated from './middlewares/ensureAuthenticated';
import GetAllUserController from './controllers/GetAllUserController';
import GetAllTagsController from './controllers/GetAllTagsController';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listComplimentsSendedController = new ListComplimentsSendedController();
const listComplimentsReceivedController =
	new ListComplimentsReceivedControlles();
const getAllUsersController = new GetAllUserController();
const getAllTagsController = new GetAllTagsController();

router.post('/login', authenticateUserController.handle);

router.get('/tags', getAllTagsController.handle);
// utiliza middleware entre rota e controller
router.post(
	'/tags',
	ensureAuthenticated,
	ensureAdmin,
	createTagController.handle
);

router.post('/users', createUserController.handle);
router.get('/users', getAllUsersController.handle);

router.post(
	'/compliments',
	ensureAuthenticated,
	createComplimentController.handle
);
router.get(
	'/compliments/sended',
	ensureAuthenticated,
	listComplimentsSendedController.handle
);
router.get(
	'/compliments/received',
	ensureAuthenticated,
	listComplimentsReceivedController.handle
);

export default router;
