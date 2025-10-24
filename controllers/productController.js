import asyncHandler from 'express-async-handler'
import Product from "../models/Product.js"
export const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});
export const getProductById = asyncHandler(async (req, res)=>
{
const product = await Product.findById({ id: req.params._id });
if(product){
    res.json(product);
}else {
        res.status(404);
        throw new Error('Product not found');
    }
})
export const createProduct  = asyncHandler(async (req, res)=> {
    const { name, description, price, category, stock, images } = req.body
    const product = await Product.create({
    name,
    description,
    price,
    category,
    stock,
    images,
  });
  res.status(201).json({
    message: "Product created successfully",
    product,
  });
})
export const updateProduct = asyncHandler(async (req,res)=> {
     const productId = req.params._id;
    const updated = await Product.findOneAndUpdate(productId, req.body,{
        new:true
    })
    
    if (!updated) {
        res.status(404);
        throw new Error("Product not found");
    }

      res.json({ message: "Product updated", updated });

} )
export const deleteProduct = asyncHandler(async(req,res)=>{
const productId = req.params._id; 

    const product = await Product.findOne({id:productId});
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    await Product.findByIdAndDelete(productId); 

    res.json({ message: "Product deleted successfully" });
})


