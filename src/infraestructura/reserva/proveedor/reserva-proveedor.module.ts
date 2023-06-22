import { Module } from "@nestjs/common";
import { ReservaEntidad } from "../entidad/reserva.entidad";
import { TypeOrmModule } from "@nestjs/typeorm";
import { daoReservaProvider } from "./dao/dao-reserva.proveedor";
import { ManejadorListarReservas } from "src/aplicacion/reserva/consulta/listar-reservas.manejador";
import { DaoReserva } from "src/dominio/reserva/puerto/dao/dao-reserva";

@Module({
    imports: [TypeOrmModule.forFeature([ReservaEntidad])],
    providers: [
        daoReservaProvider,
        ManejadorListarReservas,
    ],
    exports: [
        ManejadorListarReservas,
        DaoReserva,
    ],
})

export class ReservaProveedorModule {}