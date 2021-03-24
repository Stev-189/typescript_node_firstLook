import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

//import Routes
import IndexRoutes from './routes';//automaticamente sabe que debe impoertar de index.ts
import BooksRoutes from './routes/books';
//inializaciones
const app= express()
import './database'; 

//Settings
app.set('port', process.env.PORT ||3000);
app.set('views', path.join(__dirname,'views'))
app.engine('.hbs', exphbs({
  extname:'.hbs',
  layoutsDir: path.join(app.get('views'),'layouts'),//la carpeta de layout
  partialsDir: path.join(app.get('views'),'partials'),//la carpeta de partials
  helpers: require('./lib/helpers'),// son los helpers de lib 
  defaultLayout: 'main'
}));
app.set('view engine','.hbs');//ahora lo llamamos anteriormente era solo configuracion

//Middlewares
app.use(express.json());//resivir los formatos json
app.use(express.urlencoded({extended:false}));//para enteder los formularios de html

//Routes
app.use('/', IndexRoutes)
app.use('/books', BooksRoutes);
//Static Files
app.use(express.static(path.join(__dirname, 'public'))); //define carpeta publica
//Starting the server
app.listen(app.get('port'), ()=>{
  console.log(`Server on port ${app.get('port')}`);
})