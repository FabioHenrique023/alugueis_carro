import { EntityManager } from "typeorm";
import Administrador from "../entity/Admin";

export class AdminRepositorio {
    manager: EntityManager

    constructor(manager: EntityManager){
      this.manager = manager;
    }

    /* Criar administrador */
    // async createAdmin(admin: Administrador): Promise<Administrador>{
    //   return await this.manager.save(admin);
    // }

    async getAdminById(id: string): Promise<Administrador | null>{
      const resposta = await this.manager.findOne(Administrador, {
        where: {
          id: id,
        }
      })
      return resposta;
    }

    async getAdminByEmailAndSenha(email: string,
      senha: string): Promise<Administrador | null> {
        return await this.manager.findOne(Administrador, {
          where: {
            email: email,
            senha: senha
          }
        })
      }
}