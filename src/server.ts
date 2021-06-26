import express, { Response, Request, NextFunction } from 'express';
// node não consegue capturar erros em funções async
// express-async-erros é uma forma de tratar erros através de middleware
import 'express-async-errors';
import './database';
import routes from './routes';
import addHeader from './middlewares/addHeader';
import onError from './middlewares/onError';

const app = express();

app.use(express.json());

app.use(addHeader);

app.use(routes);

app.use(onError);

app.listen(3030, () => {
	console.log('app rodando na porta 3030 ');
});
