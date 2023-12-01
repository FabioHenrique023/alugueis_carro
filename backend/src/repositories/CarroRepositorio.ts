import { EntityManager } from "typeorm";
import Carro from "../entity/carros";

export class CarroRepositorio {
    manager: EntityManager

    constructor(manager: EntityManager){
      this.manager = manager;
    }

    async getCarroById(idcarro: string): Promise<Carro | null>{
      const resposta = await this.manager.findOne(Carro, {
        where: {
          idcarro: idcarro,
        }
      })
      return resposta;
    }
  
}

export default CarroRepositorio; // Adicione esta linha para exportar como padrão