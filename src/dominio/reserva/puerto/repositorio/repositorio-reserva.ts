import { Reserva } from "../../modelo/reserva";

export abstract class RepositorioReserva {
    abstract obtenerReserva(id: number): Promise<Reserva>;
    abstract reservar(reserva: Reserva);
    abstract cancelarReserva(reserva: Reserva);
    abstract actualizarReserva(reserva: Reserva);
}