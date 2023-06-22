import { ReservaDto } from "src/aplicacion/reserva/consulta/dto/reserva.dto";
import { Reserva } from "../../modelo/reserva";

export abstract class RepositorioReserva {
    abstract obtenerReserva(id: number): Promise<ReservaDto>;
    abstract reservar(reserva: Reserva);
}