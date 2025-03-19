const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
  //  image: { type: Buffer },
   // imageType: { type: String },
   // seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
   imageUrl: { type: String, required: true }, // Store Cloudinary URL
}, { timestamps: true });

productSchema.virtual('imageSrc').get(function () {
    if (this.image && this.imageType) {
        return `data:${this.imageType};base64,${this.image.toString('base64')}`;
    }
});

module.exports = mongoose.model('Product', productSchema);
