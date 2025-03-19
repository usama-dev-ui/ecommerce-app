/*const Product = require('../models/Product');
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        // Convert image buffer to base64 before sending
        const formattedProducts = products.map(product => ({
            //_id: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            image: product.image.toString('base64'),
            //sellerId: product.sellerId,
        }));

        res.json(formattedProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports={getProducts}*/