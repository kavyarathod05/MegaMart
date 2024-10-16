const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // Load environment variables from .env file

// const corsOptions = {
//     origin:'*',
//     // origin: 'https://mega-mart-allinone.vercel.app', // replace with your frontend URL
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // allow credentials (cookies, authorization headers) to be sent
//     exposedHeaders: ['X-Total-Count'], // expose headers to the client
// };

// Routes
const { createProduct } = require('./controller/Product');
const productsRouter = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brands');
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Cart');
const ordersRouter = require('./routes/Order');

// Middlewares
server.use(cors()); // Apply CORS with the defined options
server.use(express.json()); // To parse JSON in req.body

// Route Handlers
server.use('/products', productsRouter.router);
server.use('/categories', categoriesRouter.router);
server.use('/brands', brandsRouter.router);
server.use('/users', usersRouter.router);
server.use('/auth', authRouter.router);
server.use('/cart', cartRouter.router);
server.use('/orders', ordersRouter.router);

main().catch(err => console.log(err));
console.log('MongoDB URL:', process.env.MONGODB_URL);


// Database Connection
async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('database connected');
}

// Basic Route
server.get('/', (req, res) => {
    res.json({ status: 'success' });
});

// Start Server
server.listen(8080, () => {
    console.log('server started');
});
