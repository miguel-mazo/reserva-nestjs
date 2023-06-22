import { Reserva } from "../modelo/reserva";
import { RepositorioReserva } from "../puerto/repositorio/repositorio-reserva";

export class ServicioRegistrarReserva {

    constructor(private readonly _repositorioReserva: RepositorioReserva){}

    async ejecutar(reserva: Reserva) {
        await this._repositorioReserva.reservar(reserva);
    }
}