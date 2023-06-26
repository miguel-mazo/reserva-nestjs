import { SolicitudReserva } from "src/infraestructura/reserva/entidad/solicitud-reserva";
import { Reserva } from "../modelo/reserva";
import { RepositorioReserva } from "../puerto/repositorio/repositorio-reserva";

export class ServicioRegistrarReserva {

    constructor(private readonly _repositorioReserva: RepositorioReserva){}

    async ejecutar(solicitudReserva: SolicitudReserva) {
        var reserva: Reserva = new Reserva();
        reserva = reserva.crear(solicitudReserva);
        await this._repositorioReserva.reservar(reserva);
    }
}