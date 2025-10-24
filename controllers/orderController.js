import Order from "../models/Order.js"
import asyncHandler from "express-async-handler"

export const createOrder = asyncHandler(async(req,res)=>{
    const { 
    	orderItems,
        shippingAddress,
        paymentMethod,
        taxPrice,
        shippingPrice,
        totalPrice
		} = req.body;
        
    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items');
        return;
    } 

    else {
        const order = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            taxPrice,
            shippingPrice,
            totalPrice,
        });

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);
    }
})
export const getOrders = asyncHandler(async(req,res)=>{
    const orders =  await Order.find();
    res.json(orders);

})
//ok
export const getOrderById = asyncHandler(async(req,res)=>{
   // const orderId = req.params._id;
    const order = await Order.findById(req.params.id);
    if(order) {
        res.json(order);
    }
    else{
        res.status(404);
        throw new Error('Order not found');
    }
})
//ok , the error was i use findone&update but i should use req.params.id 
export const updateOrderStatus = asyncHandler(async(req,res)=>{
    // const orderId = req.params._id;
    const updated = await Order.findByIdAndUpdate( req.params.id 
, req.body,{
        new:true
    })
    
    if (!updated) {
        res.status(404);
        throw new Error("Ordder not found");
    }

      res.json({ message: "Order updated", updated });
})

