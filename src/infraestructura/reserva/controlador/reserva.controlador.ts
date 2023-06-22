import { Controller, Get } from "@nestjs/common";
import { ReservaDto } from "src/aplicacion/reserva/consulta/dto/reserva.dto";
import { ManejadorListarReservas } from "src/aplicacion/reserva/consulta/listar-reservas.manejador";

@Controller('reservas')
export class ReservaControlador{

    constructor(
        private readonly _manejadorListarReservas: ManejadorListarReservas,
    ) {}

    @Get()
    async listar(): Promise<ReservaDto[]> {
        return this._manejadorListarReservas.ejecutar();
    }
}