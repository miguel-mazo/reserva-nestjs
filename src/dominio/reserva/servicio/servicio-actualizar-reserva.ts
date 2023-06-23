import { ComandoActualizarReserva } from "src/aplicacion/reserva/comando/actualizar-reserva.comando";
import { RepositorioReserva } from "../puerto/repositorio/repositorio-reserva";

export class ServicioActualizarReserva {

    constructor(private readonly _repositorioReserva: RepositorioReserva){}

    async ejecutar(comandoActualizarReserva: ComandoActualizarReserva) {

        const reservaBaseDatos = await this._repositorioReserva.obtenerReserva(comandoActualizarReserva.idReserva);

        reservaBaseDatos.actualizar(comandoActualizarReserva);

        await this._repositorioReserva.actualizarReserva(reservaBaseDatos);
    }
}