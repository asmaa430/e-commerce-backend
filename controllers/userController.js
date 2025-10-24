import User from "../models/User.js";
import asyncHandler from "express-async-handler"
export const getProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            firstName:user.firstName,
            lastName: user.lastName,
            email: user.email,
            role:user.role
          
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});


export const updateProfile = asyncHandler(async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  });
  res.json({ message: "Profile updated", updated });
});
