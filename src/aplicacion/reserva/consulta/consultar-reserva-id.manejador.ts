import { RepositorioReserva } from "src/dominio/reserva/puerto/repositorio/repositorio-reserva";
import { ReservaDto } from "./dto/reserva.dto";
import { Injectable } from "@nestjs/common";
import { Reserva } from "src/dominio/reserva/modelo/reserva";

@Injectable()
export class ManejadorConsultarReserva {
    constructor(private _repositorioReserva: RepositorioReserva) {}

    async ejecutar(id: number): Promise<Reserva> {
        return this._repositorioReserva.obtenerReserva(id);
    }
}