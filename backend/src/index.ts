import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors()); //Cors used to allow URL's types that can be acessed
app.use(routes);

app.listen(3333, () => {
  console.log('Server is running normally!');
});
