import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ReservaDto } from "src/aplicacion/reserva/consulta/dto/reserva.dto";
import { ManejadorConsultarReserva } from "src/aplicacion/reserva/consulta/consultar-reserva-id.manejador";
import { ManejadorListarReservas } from "src/aplicacion/reserva/consulta/listar-reservas.manejador";
import { ManejadorRegistrarReserva } from "src/aplicacion/reserva/comando/registrar-reserva.manejador";
import { ComandoRegistrarReserva } from "src/aplicacion/reserva/comando/registrar-reserva.comando";
import { ComandoCancelarReserva } from "src/aplicacion/reserva/comando/cancelar-reserva.comando";
import { ManejadorCancelarReserva } from "src/aplicacion/reserva/comando/cancelar-reserva.manejador";
import { ComandoActualizarReserva } from "src/aplicacion/reserva/comando/actualizar-reserva.comando";
import { ManejadorActualizarReserva } from "src/aplicacion/reserva/comando/actualizar-reserva-manejador";

@Controller('reservas')
export class ReservaControlador{

    constructor(
        private readonly _manejadorListarReservas: ManejadorListarReservas,
        private readonly _manejadorConsultarReserva: ManejadorConsultarReserva,
        private readonly _manejadorRegistrarReserva: ManejadorRegistrarReserva,
        private readonly _manejadorCancelarReserva: ManejadorCancelarReserva,
        private readonly _manejadorActualizarReserva: ManejadorActualizarReserva,
    ) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async reservar(@Body() comandoRegistrarReserva: ComandoRegistrarReserva) {
        await this._manejadorRegistrarReserva.ejecutar(comandoRegistrarReserva);
    }

    @Post('/cancelar/:id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async cancelar(@Param('id') id: number) {
        await this._manejadorCancelarReserva.ejecutar(new ComandoCancelarReserva(id));
    }

    @Post('/actualizar')
    @UsePipes(new ValidationPipe({ transform: true }))
    async actualizar(@Body() comandoActualizarReserva: ComandoActualizarReserva) {
        await this._manejadorActualizarReserva.ejecutar(comandoActualizarReserva);
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