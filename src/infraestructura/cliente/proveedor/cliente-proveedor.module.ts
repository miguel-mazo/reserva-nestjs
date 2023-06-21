import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntidad } from '../entidad/cliente.entidad';
import { daoClienteProvider } from './dao/dao-cliente.proveedor';
import { ManejadorListarCliente } from 'src/aplicacion/cliente/listar-cliente.manejador';
import { DaoCliente } from 'src/dominio/cliente/puerto/dao/dao-cliente';
import { ManejadorConsultarCliente } from 'src/aplicacion/cliente/consultar-cliente-id.manejador';
import { repositorioClienteProvider } from './repositorio/repositorio-cliente.proveedor';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntidad])],
  providers: [
    daoClienteProvider,
    repositorioClienteProvider,
    ManejadorListarCliente,
    ManejadorConsultarCliente,
  ],
  exports: [
    ManejadorListarCliente,
    ManejadorConsultarCliente,
    DaoCliente,
  ],
})
export class ClienteProveedorModule {

}
