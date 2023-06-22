import { RepositorioReserva } from "src/dominio/reserva/puerto/repositorio/repositorio-reserva";
import { ReservaDto } from "./consulta/dto/reserva.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ManejadorConsultarReserva {
    constructor(private _repositorioReserva: RepositorioReserva) {}

    async ejecutar(id: number): Promise<ReservaDto> {
        return this._repositorioReserva.obtenerReserva(id);
    }
}