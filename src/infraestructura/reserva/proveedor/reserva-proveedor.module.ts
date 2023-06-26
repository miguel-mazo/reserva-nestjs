import { Module } from "@nestjs/common";
import { ReservaEntidad } from "../entidad/reserva.entidad";
import { TypeOrmModule } from "@nestjs/typeorm";
import { daoReservaProvider } from "./dao/dao-reserva.proveedor";
import { ManejadorListarReservas } from "src/aplicacion/reserva/consulta/listar-reservas.manejador";
import { DaoReserva } from "src/dominio/reserva/puerto/dao/dao-reserva";
import { repositorioReservaProvider } from "./repositorio/repositorio-reserva.proveedor";
import { ManejadorConsultarReserva } from "src/aplicacion/reserva/consulta/consultar-reserva-id.manejador";
import { ManejadorRegistrarReserva } from "src/aplicacion/reserva/comando/registrar-reserva.manejador";
import { RepositorioReserva } from "src/dominio/reserva/puerto/repositorio/repositorio-reserva";
import { ServicioRegistrarReserva } from "src/dominio/reserva/servicio/servicio-registrar-reserva";
import { servicioRegistrarReservaProveedor } from "./servicio/servicio-registrar-reserva.proveedor";
import { ServicioCancelarReserva } from "src/dominio/reserva/servicio/servicio-cancelar-reserva";
import { servicioCancelarReservaProveedor } from "./servicio/servicio-cancelar-reserva.proveedor";
import { ManejadorCancelarReserva } from "src/aplicacion/reserva/comando/cancelar-reserva.manejador";
import { ServicioActualizarReserva } from "src/dominio/reserva/servicio/servicio-actualizar-reserva";
import { servicioActualizarReservaProveedor } from "./servicio/servicio-actualizar-reserva.proveedor";
import { ManejadorActualizarReserva } from "src/aplicacion/reserva/comando/actualizar-reserva-manejador";
import { FabricaSolicitudReserva } from "src/aplicacion/reserva/comando/solicitud-reserva.fabrica";
import { repositorioClienteProvider } from "src/infraestructura/cliente/proveedor/repositorio/repositorio-cliente.proveedor";
import { ManejadorConsultarCliente } from "src/aplicacion/cliente/consulta/consultar-cliente-id.manejador";
import { ClienteModule } from "src/infraestructura/cliente/cliente.module";
import { ClienteEntidad } from "src/infraestructura/cliente/entidad/cliente.entidad";
import { FabricaSolicitudActualizacionReserva } from "src/aplicacion/reserva/comando/solicitud-actualizacion-reserva.fabrica";

@Module({
    imports: [TypeOrmModule.forFeature([ReservaEntidad]), ClienteModule, TypeOrmModule.forFeature([ClienteEntidad])],
    providers: [
        { provide: ServicioRegistrarReserva, inject: [RepositorioReserva], useFactory: servicioRegistrarReservaProveedor },
        { provide: ServicioCancelarReserva, inject: [RepositorioReserva], useFactory: servicioCancelarReservaProveedor },
        { provide: ServicioActualizarReserva, inject: [RepositorioReserva], useFactory: servicioActualizarReservaProveedor },
        daoReservaProvider,
        repositorioReservaProvider,
        ManejadorRegistrarReserva,
        ManejadorCancelarReserva,
        ManejadorActualizarReserva,
        ManejadorListarReservas,
        ManejadorConsultarReserva,
        FabricaSolicitudReserva,
        ManejadorConsultarCliente,
        repositorioClienteProvider,
        FabricaSolicitudActualizacionReserva,
    ],
    exports: [
        ServicioRegistrarReserva,
        ServicioCancelarReserva,
        ServicioActualizarReserva,
        ManejadorRegistrarReserva,
        ManejadorCancelarReserva,
        ManejadorActualizarReserva,
        ManejadorListarReservas,
        ManejadorConsultarReserva,
        RepositorioReserva,
        DaoReserva,
        FabricaSolicitudReserva,
        FabricaSolicitudActualizacionReserva,
    ],
})

export class ReservaProveedorModule {}