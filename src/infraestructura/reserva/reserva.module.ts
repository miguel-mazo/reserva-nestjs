import { Module } from "@nestjs/common";
import { ReservaProveedorModule } from "./proveedor/reserva-proveedor.module";
import { ReservaControlador } from "./controlador/reserva.controlador";

@Module({
    imports: [
        ReservaProveedorModule
    ],
    controllers: [ReservaControlador],
})

export class ReservaModule {}