import { Injectable } from "@nestjs/common";
import { DaoReserva } from "src/dominio/reserva/puerto/dao/dao-reserva";
import { ReservaDto } from "./consulta/dto/reserva.dto";

@Injectable()
export class ManejadorListarReservas {
    constructor(private _daoReserva: DaoReserva) {}

    async ejecutar(): Promise<ReservaDto[]> {
        return this._daoReserva.listar();
    }
}