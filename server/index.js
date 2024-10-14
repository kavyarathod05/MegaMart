const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();  // Load environment variables from .env file

const corsOptions = {
    origin: 'https://mega-mart-allinone.vercel.app', // replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // allow credentials to be sent
};
const { createProduct } = require('./controller/Product');
const productsRouter = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brands');
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Cart');
const ordersRouter = require('./routes/Order');


//middlewares

server.use(cors(corsOptions));
server.use(express.json()); // to parse req.body
server.use('/products', productsRouter.router);
server.use('/categories', categoriesRouter.router)
server.use('/brands', brandsRouter.router)
server.use('/users', usersRouter.router)
server.use('/auth', authRouter.router)
server.use('/cart', cartRouter.router)
server.use('/orders', ordersRouter.router)

main().catch(err=> console.log(err));

async function main(){
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('database connected')
}

server.get('/',(req, res)=>{
    res.json({status:'success'})
})



server.listen(8080, ()=>{
    console.log('server started')
})
