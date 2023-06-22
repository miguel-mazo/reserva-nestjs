import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ReservaDto } from "src/aplicacion/reserva/consulta/dto/reserva.dto";
import { ManejadorConsultarReserva } from "src/aplicacion/reserva/consulta/consultar-reserva-id.manejador";
import { ManejadorListarReservas } from "src/aplicacion/reserva/consulta/listar-reservas.manejador";
import { ManejadorRegistrarReserva } from "src/aplicacion/reserva/comando/registrar-reserva.manejador";
import { ComandoRegistrarReserva } from "src/aplicacion/reserva/comando/registrar-reserva.comando";

@Controller('reservas')
export class ReservaControlador{

    constructor(
        private readonly _manejadorListarReservas: ManejadorListarReservas,
        private readonly _manejadorConsultarReserva: ManejadorConsultarReserva,
        private readonly _manejadorRegistrarReserva: ManejadorRegistrarReserva,
    ) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async reservar(@Body() comandoRegistrarReserva: ComandoRegistrarReserva) {
        await this._manejadorRegistrarReserva.ejecutar(comandoRegistrarReserva);
    }

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