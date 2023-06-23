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

@Module({
    imports: [TypeOrmModule.forFeature([ReservaEntidad])],
    providers: [
        { provide: ServicioRegistrarReserva, inject: [RepositorioReserva], useFactory: servicioRegistrarReservaProveedor },
        { provide: ServicioCancelarReserva, inject: [RepositorioReserva], useFactory: servicioCancelarReservaProveedor },
        daoReservaProvider,
        repositorioReservaProvider,
        ManejadorRegistrarReserva,
        ManejadorCancelarReserva,
        ManejadorListarReservas,
        ManejadorConsultarReserva,
    ],
    exports: [
        ServicioRegistrarReserva,
        ServicioCancelarReserva,
        ManejadorRegistrarReserva,
        ManejadorCancelarReserva,
        ManejadorListarReservas,
        ManejadorConsultarReserva,
        RepositorioReserva,
        DaoReserva,
    ],
})

export class ReservaProveedorModule {}