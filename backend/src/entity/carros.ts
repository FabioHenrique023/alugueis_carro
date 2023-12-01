import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('carros')
export default class Carro {
  @PrimaryGeneratedColumn("uuid")
  idcarro: string;

  @Column()
  nome: string;

  @Column()
  placa: string;
 
  @Column()
  quilometragem: number;

  @Column()
  ano: number;

  @Column()
  preco: number;

  @Column()
  imagem: string;

  constructor(nome: string, placa: string, quilometragem: number, ano: number, preco: number, imagem: string) {
    this.nome = nome;
    this.placa = placa;
    this.quilometragem = quilometragem;
    this.ano = ano;
    this.preco = preco;
    this.imagem = imagem;
    this.idcarro = "uuid";
  }
}
