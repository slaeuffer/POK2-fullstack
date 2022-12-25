

import express, { json } from 'express';

const app = express();
import { psw } from '../psw.js';
import { mongoose } from 'mongoose';

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://antoine:'+ psw.mongodb +'@pok2cluster.vn2uk2a.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(json());

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

app.get('/api/musics', (req, res, next) => {
   const stuff = [
     {
      id: 1,
      author: 'Justin Timberlake',
      title: 'Cry Me A River',
      likes: 2,
      dislikes: 3,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
     },
     {
      id: 2,
      author: 'Queen',
      title: 'Bohemian Rhapsody',
      likes: 22,
      dislikes: 3,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
     },
     {
      id: 3,
      author: 'Michael Jackson',
      title: 'Billie Jean',
      likes: 22,
      dislikes: 3,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
     },
     {
      id: 4,
      author: 'Whitney Houston',
      title: 'I Will Always Love You',
      likes: 22,
      dislikes: 3,
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
     },
   ];
   res.status(200).json(stuff);
 });

export default app;