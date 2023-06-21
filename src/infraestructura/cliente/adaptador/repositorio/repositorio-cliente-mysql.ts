import { Injectable } from "@nestjs/common";
import { RepositorioCliente } from "src/dominio/cliente/puerto/repositorio/repositorio-cliente";
import { ClienteEntidad } from "../../entidad/cliente.entidad";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ClienteDto } from "src/aplicacion/cliente/consulta/cliente.dto";

@Injectable()
export class RepositorioClienteMysql implements RepositorioCliente {
  constructor(
    @InjectRepository(ClienteEntidad)
    private readonly repositorio: Repository<ClienteEntidad>,
  ) {}

  async obtenerCliente(id: number): Promise<ClienteDto> {
    return this.repositorio.findOne({ 
        where: { 
          id: id 
        },
        select: ["nombre"] 
      });
  }
}