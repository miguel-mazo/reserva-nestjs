import { RepositorioReserva } from "src/dominio/reserva/puerto/repositorio/repositorio-reserva";
import { ServicioCancelarReserva } from "src/dominio/reserva/servicio/servicio-cancelar-reserva";

export function servicioCancelarReservaProveedor(repositorioReserva: RepositorioReserva) {
    return new ServicioCancelarReserva(repositorioReserva);
}