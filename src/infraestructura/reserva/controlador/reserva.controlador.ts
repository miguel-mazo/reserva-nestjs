import { Controller, Get, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { ReservaDto } from "src/aplicacion/reserva/consulta/dto/reserva.dto";
import { ManejadorConsultarReserva } from "src/aplicacion/reserva/consultar-reserva-id.manejador";
import { ManejadorListarReservas } from "src/aplicacion/reserva/listar-reservas.manejador";

@Controller('reservas')
export class ReservaControlador{

    constructor(
        private readonly _manejadorListarReservas: ManejadorListarReservas,
        private readonly _manejadorConsultarReserva: ManejadorConsultarReserva,
    ) {}

    @Get('/:id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async obtenerPorId(@Param('id') id: number) {
        return this._manejadorConsultarReserva.ejecutar(id);
    }

    @Get()
    async listar(): Promise<ReservaDto[]> {
        return this._manejadorListarReservas.ejecutar();
    }
}