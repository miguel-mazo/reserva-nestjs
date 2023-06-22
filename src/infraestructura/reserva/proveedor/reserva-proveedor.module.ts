import { Module } from "@nestjs/common";
import { ReservaEntidad } from "../entidad/reserva.entidad";
import { TypeOrmModule } from "@nestjs/typeorm";
import { daoReservaProvider } from "./dao/dao-reserva.proveedor";
import { ManejadorListarReservas } from "src/aplicacion/reserva/listar-reservas.manejador";
import { DaoReserva } from "src/dominio/reserva/puerto/dao/dao-reserva";
import { repositorioReservaProvider } from "./repositorio/repositorio-reserva.proveedor";
import { ManejadorConsultarReserva } from "src/aplicacion/reserva/consultar-reserva-id.manejador";

@Module({
    imports: [TypeOrmModule.forFeature([ReservaEntidad])],
    providers: [
        daoReservaProvider,
        repositorioReservaProvider,
        ManejadorListarReservas,
        ManejadorConsultarReserva,
    ],
    exports: [
        ManejadorListarReservas,
        ManejadorConsultarReserva,
        DaoReserva,
    ],
})

export class ReservaProveedorModule {}