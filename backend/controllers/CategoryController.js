const Category = require('../models/Category');

const CategoryController = {
    getAllCategories: async(req, res) => {
        try {
            const categories = await Category.find();
            return res.status(200).json(categories);
        }catch(err) {
            return res.status(500).json(err);
        }
    },
    getCategory: async(req, res) => {
        try {
            const category = await Category.findById(req.params.id).populate('products');
            return res.status(200).json(category);
        }catch(err) {
            return res.status(500).json(err);
        }
    },

    //not yet deleteCategory because i will create a new category again
    deleteCategory: async(req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            return res.status(200).json(category.name + ' deleted');
        }catch(err) {
            return res.status(500).json(err);
        }
    },
    createCategory: async(req, res) => {
        try {
            const newCategory = await new Category({
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
            })
            const category = await newCategory.save();
            return res.status(200).json(category);
        }catch(err) {
            return res.status(500).json(err);
        }
    },
    updateCategory: async(req, res) => {
        try {
            const category = await Category.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true});
            return res.status(200).json(category);
        }catch(err) {
            
            return res.status(500).json(err);
        }
    }
}

module.exports = CategoryController;