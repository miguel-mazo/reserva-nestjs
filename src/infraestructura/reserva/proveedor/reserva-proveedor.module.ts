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

@Module({
    imports: [TypeOrmModule.forFeature([ReservaEntidad])],
    providers: [
        { provide: ServicioRegistrarReserva, inject: [RepositorioReserva], useFactory: servicioRegistrarReservaProveedor },
        daoReservaProvider,
        repositorioReservaProvider,
        ManejadorRegistrarReserva,
        ManejadorListarReservas,
        ManejadorConsultarReserva,
    ],
    exports: [
        ServicioRegistrarReserva,
        ManejadorRegistrarReserva,
        ManejadorListarReservas,
        ManejadorConsultarReserva,
        RepositorioReserva,
        DaoReserva,
    ],
})

export class ReservaProveedorModule {}