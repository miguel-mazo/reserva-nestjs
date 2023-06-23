import { Injectable } from "@nestjs/common";
import { Reserva } from "src/dominio/reserva/modelo/reserva";
import { ServicioActualizarReserva } from "src/dominio/reserva/servicio/servicio-actualizar-reserva";
import { ComandoActualizarReserva } from "./actualizar-reserva.comando";

@Injectable()
export class ManejadorActualizarReserva {

    constructor(private _servicioActualizarReserva: ServicioActualizarReserva){}

    async ejecutar(comandoActualizarReserva: ComandoActualizarReserva) {
        await this._servicioActualizarReserva.ejecutar(comandoActualizarReserva);
    }
}