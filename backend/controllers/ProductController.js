const Product = require('../models/Product');
const Category = require('../models/Category');


const ProductController = {
    getAllProducts: async(req, res) => {
        try {
            const products = await Product.find();
            return res.status(200).json(products);
        }catch(err) {
            return res.status(500).json(err);
        }
    },
    getProduct: async(req, res) => {
        try {
            const product = await Product.findById(req.params.id).populate('category');
            return res.status(200).json(product);
        }catch(err) {
            return res.status(500).json(err);
        }
    },
    deleteProduct: async(req, res) => {
        try {
            await Category.updateMany(
                {products: req.params.id},
                {$pull: {products: req.params.id}}
            );
            await Product.findByIdAndDelete(req.params.id);
            return res.status(200).json('Product deleted');

        }catch(err) {
            return res.status(500).json(err);
        }
    },
    createProduct: async(req, res) => {
        try {
            const newProduct = new Product(req.body);
            const product = await newProduct.save();
            await Category.findByIdAndUpdate(req.body.category, {
                $push: {products: product._id}
            });
            
            return res.status(200).json(product);
        }catch(err) {
            return res.status(500).json(err);
        }
    },
    updateProduct: async(req, res) => {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true});
            return res.status(200).json(product);
        }catch(err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = ProductController;