import { Body, Controller, Get, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { ManejadorListarCliente } from 'src/aplicacion/cliente/listar-cliente.manejador';
import { ClienteDto } from 'src/aplicacion/cliente/consulta/dto/cliente.dto';
import { ManejadorConsultarCliente } from 'src/aplicacion/cliente/consultar-cliente-id.manejador';

@Controller('clientes')
export class ClienteControlador {
  constructor(
    private readonly _manejadorListarCliente: ManejadorListarCliente,
    private readonly _manejadorConsultarCliente: ManejadorConsultarCliente,
  ) {}
  
  @Get('/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async obtenerPorId(@Param('id') id: number) {
    return this._manejadorConsultarCliente.ejecutar(id);
  }

  @Get()
  async listar(): Promise<ClienteDto[]> {
    return this._manejadorListarCliente.ejecutar();
  }
}
