import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import User from "../db/models/auth.model.js";

// @route       GET api/auth/me
// @desc        Get logged in user
// @access      Private
export const getLoggedInUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route       POST api/auth/register
// @desc        Register user
// @access      Public
export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // JWT payload
    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ",
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route       POST api/auth/login
// @desc        Login user & get token
// @access      Public
export const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    console.log("User found:", user); // Kullanıcı verisi konsolda görünsün

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("Password match result:", isMatch); // Şifre doğru mu kontrol et

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = { user: { id: user.id } };

    console.log("Generating JWT Token...");

    jwt.sign(
      payload,
      "SecreteyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ", // Burada hata alıyorsan `config/default.json` kontrol et
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.error("JWT Token Generation Error:", err.message);
          throw err;
        }
        console.log("Token generated successfully!");
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("Login Error:", err.message);
    console.error(err.stack);
    res.status(500).send("Server Error");
  }
};
