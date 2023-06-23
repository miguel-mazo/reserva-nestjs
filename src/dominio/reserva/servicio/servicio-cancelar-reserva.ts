import { Reserva } from "../modelo/reserva";
import { RepositorioReserva } from "../puerto/repositorio/repositorio-reserva";

export class ServicioCancelarReserva {

    constructor(private readonly _repositorioReserva: RepositorioReserva){}

    async ejecutar(reserva: Reserva) {

        reserva.cancelar();

        await this._repositorioReserva.cancelarReserva(reserva);
    }
}