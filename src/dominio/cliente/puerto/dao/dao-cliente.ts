import { ClienteDto } from 'src/aplicacion/cliente/consulta/cliente.dto';

export abstract class DaoCliente {
  abstract listar(): Promise<ClienteDto[]>;
}