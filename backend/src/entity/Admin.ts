import { randomUUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('administrador')
export default class Administrador {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  nome: string

  @Column()
  email: string

  @Column()
  senha: string

  constructor(nome: string, email: string, senha: string){
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.id = randomUUID();
  }
}