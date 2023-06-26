import { ErrorDeNegocio } from "src/dominio/errores/error-de-negocio";
import { Reserva } from "../modelo/reserva";
import { RepositorioReserva } from "../puerto/repositorio/repositorio-reserva";

export class ServicioCancelarReserva {

    constructor(private readonly _repositorioReserva: RepositorioReserva){}

    async ejecutar(reserva: Reserva) {

        if(reserva.esCancelada()){
            throw new ErrorDeNegocio(
                "No se puede cancelar una reserva en estado 'CANCELADA'",
              );
        }

        reserva.cancelar();

        await this._repositorioReserva.cancelarReserva(reserva);
    }
}