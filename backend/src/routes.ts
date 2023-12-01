import { Router } from "express";
import { AdminController } from "./controllers/AdminController";
import { CarroController } from "./controllers/CarroController";
import { verifyAuth } from "./midleware/verifyAuth";


export const router = Router();


const adminController = new AdminController();
const carroController = new CarroController();

//auth
router.post('/auth/login', adminController.generateAuthToken);
router.get('/auth/verify', verifyAuth,adminController.verifyToken);
router.get('/api/carros/:idcarro', carroController.getCarroById);






