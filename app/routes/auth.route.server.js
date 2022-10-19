import { Router } from "express";
import { DisPlayLoginPage, 
    // DisPlayRegisterPage, 
    ProcessLoginPage, 
    // ProcessRegisterPage, 
    ProcessLogoutPage } from "../controllers/auth.controller.server.js";

const router = Router();

//Display Login Page
router.get('/login', DisPlayLoginPage);
//Process Login Page
router.post('/login', ProcessLoginPage);

//Display Registration Page
// router.get('/register', DisPlayRegisterPage);
//Process Registration Page
// router.post('/register', ProcessRegisterPage);

// Process Logout Page
router.get('/logout', ProcessLogoutPage);

export default router;