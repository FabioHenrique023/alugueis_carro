import Carros from "../entity/carros";
import { AppDataSource } from "../data-source";
import CarroRepositorio from "../repositories/CarroRepositorio";

export class CarroService {

  carroRepositorio: CarroRepositorio;
  constructor(carroRepositorio = new CarroRepositorio
    (AppDataSource.manager)) {
      this.carroRepositorio = carroRepositorio;
    }

    getCarroById = async (idcarro: string): Promise<Carros | null > => {
      return this.carroRepositorio.getCarroById(idcarro);
    }}