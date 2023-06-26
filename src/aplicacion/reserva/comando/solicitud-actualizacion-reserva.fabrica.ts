import { Injectable } from "@nestjs/common";
import { ComandoActualizarReserva } from "src/aplicacion/reserva/comando/actualizar-reserva.comando";
import { SolicitudActualizacionReserva } from "src/infraestructura/reserva/entidad/solicitud-actualizacion-reserva";

@Injectable()
export class FabricaSolicitudActualizacionReserva {

    constructor(){}

    async crear(comandoActualizarReserva: ComandoActualizarReserva) : Promise<SolicitudActualizacionReserva> {
        return new SolicitudActualizacionReserva(comandoActualizarReserva.idReserva, comandoActualizarReserva.nuevaFecha);
    }
}