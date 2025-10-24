import Category from "../models/Category.js";
import asyncHandler from "express-async-handler"
export const getCategories = asyncHandler(async(req,res) => {
    const categories = await Category.find();
    res.json(categories);
})
export const createCategory = asyncHandler(async(req,res)=>{
    const {name,description}=req.body;
     const category = await Category.create({
    name,
    description
  });
  res.status(201).json({
    message: "Category added successfully",
    category
  });
})
export const updateCategory = asyncHandler(async (req,res)=> {
     
    const updated = await Category.findByIdAndUpdate(req.params.id, req.body,{
        new:true
    })
    
    if (!updated) {
        res.status(404);
        throw new Error("Category not found");
    }

      res.json({ message: "Category updated", updated });

} )
export const deleteCategory = asyncHandler(async(req,res)=>{
        const category = await Category.findById(req.params.id)
    if (!category) {
        res.status(404);
        throw new Error("category not found");
    }
    await Category.findByIdAndDelete(req.params.id); 

    res.json({ message: "Category deleted successfully" });
})
