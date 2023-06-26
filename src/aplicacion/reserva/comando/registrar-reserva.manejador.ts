import { Injectable } from "@nestjs/common";
import { ServicioRegistrarReserva } from "src/dominio/reserva/servicio/servicio-registrar-reserva";
import { ComandoRegistrarReserva } from "./registrar-reserva.comando";
import { FabricaSolicitudReserva } from "./solicitud-reserva.fabrica";

@Injectable()
export class ManejadorRegistrarReserva {

    constructor(private _fabricaSolicitudReserva: FabricaSolicitudReserva, private _servicioRegistrarReserva: ServicioRegistrarReserva){}

    async ejecutar(comandoRegistrarReserva: ComandoRegistrarReserva) {
        const solicitudReserva = await this._fabricaSolicitudReserva.crear(comandoRegistrarReserva);
        await this._servicioRegistrarReserva.ejecutar(solicitudReserva);
    }
}