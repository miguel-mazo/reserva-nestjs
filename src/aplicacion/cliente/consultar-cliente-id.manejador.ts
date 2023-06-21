import { Injectable } from '@nestjs/common';

import { ClienteDto } from './consulta/cliente.dto';
import { RepositorioCliente } from 'src/dominio/cliente/puerto/repositorio/repositorio-cliente';

@Injectable()
export class ManejadorConsultarCliente {
  constructor(private _repositorioCliente: RepositorioCliente) {}

  async ejecutar(id : number): Promise<ClienteDto> {
    return this._repositorioCliente.obtenerCliente(id);
  }
}