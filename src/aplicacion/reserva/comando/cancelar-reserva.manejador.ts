import { Injectable } from "@nestjs/common";
import { ServicioCancelarReserva } from "src/dominio/reserva/servicio/servicio-cancelar-reserva";
import { ComandoCancelarReserva } from "./cancelar-reserva.comando";
import { Reserva } from "src/dominio/reserva/modelo/reserva";
import { RepositorioReserva } from "src/dominio/reserva/puerto/repositorio/repositorio-reserva";

@Injectable()
export class ManejadorCancelarReserva {

    constructor(private _servicioCancelarReserva: ServicioCancelarReserva, private repositorioReserva: RepositorioReserva){}

    async ejecutar(comandoCancelarReserva: ComandoCancelarReserva) {
        const reserva = await this.repositorioReserva.obtenerReserva(comandoCancelarReserva.idReserva);
        await this._servicioCancelarReserva.ejecutar(new Reserva(reserva.getId, reserva.getIdCliente, reserva.getFechaReserva.toUTCString(), reserva.getValorAlquiler, reserva.getEstado));
    }
}