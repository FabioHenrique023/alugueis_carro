import Administrador from "../entity/Admin";
import { AppDataSource } from "../data-source";
import { AdminRepositorio } from "../repositories/AdminRepositorio";
import { sign } from "jsonwebtoken";

export class AdminService {

  adminRepositorio: AdminRepositorio;
  constructor(adminRepositorio = new AdminRepositorio
    (AppDataSource.manager)) {
      this.adminRepositorio = adminRepositorio;
    }

    /* Criar administrador */
    // createAdmin =async (nome: string, email: string, 
    //   senha: string): Promise<Administrador> => {
    //   const admin = new Administrador(nome, email, senha);
    //   return this.adminRepositorio.createAdmin(admin);
    // }

    getAdminById = async (id: string): Promise<Administrador | null > => {
      return this.adminRepositorio.getAdminById(id);
    }

    getAutenticacaoAdmin = (email: string, senha: string): Promise<Administrador | null> => {
      return this.adminRepositorio.getAdminByEmailAndSenha(email, senha);
    }

    getToken = async (email: string, senha: string):
    Promise<string> => {
      const admin = await this.getAutenticacaoAdmin(email, senha);

      if(!admin) throw new Error('Email/senha invalido');

      const tokenData = {
        nome: admin?.nome,
        email: admin?.email
      }

      const tokenKey = '#x82$cs<QK#^<I2`MsE%;:sGD4?I+6bx:U6BFDX?:sJz&rIw47$@%t|Y|Wv3.fE'
      
      const tokenOption = {
        subject: admin?.id
      }

      const token = sign(tokenData, tokenKey, tokenOption);
      return token;
    }
}