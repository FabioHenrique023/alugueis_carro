import { Request, Response } from "express";
import { CarroService } from "../services/CarroService";

export class CarroController {

  carroService: CarroService = new CarroService()

  getCarroById = async (request: Request, response: Response): Promise<Response> => {
    const idcarro = request.params.idcarro; // Use params para pegar o idcarro da URL
    const carro = await this.carroService.getCarroById(idcarro);

    if (!carro) return response.status(400).json({
      message: 'Id de carro inválido'
    });

    return response.status(200).json({
      idcarro: carro.idcarro,
      nome: carro.nome,
      placa: carro.placa,
      quilometragem: carro.quilometragem,
      ano: carro.ano,
      preco: carro.preco,
      imagem: carro.imagem
    });
  }
}
