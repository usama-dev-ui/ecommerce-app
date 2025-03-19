
const Product = require("../models/Product");
const cloudinary =require("cloudinary");

const addProduct = async (req, res) => {
    try {
      const { name, description, price, category, image } = req.body; // ✅ Receive image URL from frontend
  
      if (!image) {
        return res.status(400).json({ message: "Image is required" });
      }
  
      // Save product with image URL (no need to upload again)
      const product = new Product({
        name,
        description,
        price,
        category,
        imageUrl: image, // ✅ Store image URL directly
      });
  
      await product.save();
  
      res.status(201).json({ message: "Product added", product });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from MongoDB
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};





// DELETE /api/products/:id
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // ✅ Extract public ID from Cloudinary URL
        const imageUrl = product.imageUrl;
        const publicId = imageUrl.split('/').pop().split('.')[0]; // Extract publicId

        // ✅ Delete image from Cloudinary
        await cloudinary.uploader.destroy(`products/${publicId}`);

        // ✅ Delete product from database
        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { addProduct, getProducts, deleteProduct };
