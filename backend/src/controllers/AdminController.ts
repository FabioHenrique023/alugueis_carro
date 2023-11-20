import { Request, Response } from "express";
import { AdminService } from "../services/AdminService";

export class AdminController {

  adminService: AdminService = new AdminService()

  /* criar administrador */
  // createAdmin = (request: Request, response: Response): Response => {
  //   const admin = request.body;

  //   if (!admin.nome || !admin.email || !admin.senha){
  //     return response.status(400).json({
  //       message: 'Nome, email e senha obrigatórios!'
  //     })

  //   this.adminService.createAdmin(admin.nome, admin.email, admin.senha);

  //   return response.status(201).json({
  //     message: 'Usuário criado'
  //   });
  //}

  getAdminById =async (request: Request, response: Response): Promise<Response> => {
    const id = request.body.id;
    const admin = await this.adminService.getAdminById(id);

    if(!admin) return response.status(400).json({
      message: 'id invalido'
    })
    return response.status(201).json({
      id: admin.id,
      nome: admin.nome,
      email: admin.email
    });
  }


}
