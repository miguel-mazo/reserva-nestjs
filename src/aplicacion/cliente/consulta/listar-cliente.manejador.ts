import { Injectable } from '@nestjs/common';

import { DaoCliente } from 'src/dominio/cliente/puerto/dao/dao-cliente';
import { ClienteDto } from './dto/cliente.dto';

@Injectable()
export class ManejadorListarCliente {
  constructor(private _daoCliente: DaoCliente) {}

  async ejecutar(): Promise<ClienteDto[]> {
    return this._daoCliente.listar();
  }
}
