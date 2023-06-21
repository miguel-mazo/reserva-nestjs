import { ClienteDto } from 'src/aplicacion/cliente/consulta/cliente.dto';

export abstract class RepositorioCliente {
  abstract obtenerCliente(id: number): Promise<ClienteDto>;
}
