import { Router } from "express";
import { check } from "express-validator";
import { auth } from "../middlewares/auth.middleware.js";

// Controllers
import { getLoggedInUser, loginUser, registerUser } from "../controllers/auth.controller.js";

const authRouter = Router();

// @route       GET api/auth/me
// @desc        Get logged in user
// @access      Private
authRouter.get("/me", auth, getLoggedInUser);

// @route       POST api/auth/login
// @desc        Login user & get token
// @access      Public
authRouter.post(
  "/login",
  [
    check("email", "Please include a valid Email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  loginUser
);

// @route       POST api/auth/register
// @desc        Register user
// @access      Public
authRouter.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid Email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
  ],
  registerUser
);

export default authRouter;
