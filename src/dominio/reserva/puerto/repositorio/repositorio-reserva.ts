import { ReservaDto } from "src/aplicacion/reserva/consulta/dto/reserva.dto";

export abstract class RepositorioReserva {
    abstract obtenerReserva(id: number): Promise<ReservaDto>;
}