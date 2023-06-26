import { Injectable } from "@nestjs/common";
import { ServicioActualizarReserva } from "src/dominio/reserva/servicio/servicio-actualizar-reserva";
import { ComandoActualizarReserva } from "./actualizar-reserva.comando";
import { FabricaSolicitudActualizacionReserva } from "./solicitud-actualizacion-reserva.fabrica";

@Injectable()
export class ManejadorActualizarReserva {

    constructor(private _fabricaSolicitudActualizacionReserva: FabricaSolicitudActualizacionReserva, private _servicioActualizarReserva: ServicioActualizarReserva){}

    async ejecutar(comandoActualizarReserva: ComandoActualizarReserva) {
        const solicitudActualizacionReserva = await this._fabricaSolicitudActualizacionReserva.crear(comandoActualizarReserva);
        await this._servicioActualizarReserva.ejecutar(solicitudActualizacionReserva);
    }
}