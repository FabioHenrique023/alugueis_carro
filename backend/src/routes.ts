import { Router } from "express";
import { AdminController } from "./controllers/AdminController";
import { verifyAuth } from "./midleware/verifyAuth";


export const router = Router();


const adminController = new AdminController();

//auth
router.post('/auth/login', adminController.generateAuthToken);
router.get('/auth/verify', verifyAuth,adminController.verifyToken);






