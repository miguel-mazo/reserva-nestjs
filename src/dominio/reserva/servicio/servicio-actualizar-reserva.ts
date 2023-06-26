import { RepositorioReserva } from "../puerto/repositorio/repositorio-reserva";
import { SolicitudActualizacionReserva } from "src/infraestructura/reserva/entidad/solicitud-actualizacion-reserva";

export class ServicioActualizarReserva {

    constructor(private readonly _repositorioReserva: RepositorioReserva){}

    async ejecutar(solicitudActualizacionReserva: SolicitudActualizacionReserva) {

        const reservaBaseDatos = await this._repositorioReserva.obtenerReserva(solicitudActualizacionReserva.idReserva);

        reservaBaseDatos.actualizar(solicitudActualizacionReserva);

        await this._repositorioReserva.actualizarReserva(reservaBaseDatos);
    }
}