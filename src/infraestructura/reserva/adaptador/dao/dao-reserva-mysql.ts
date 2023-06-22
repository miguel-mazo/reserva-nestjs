import { Injectable } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { ReservaDto } from "src/aplicacion/reserva/consulta/dto/reserva.dto";
import { DaoReserva } from "src/dominio/reserva/puerto/dao/dao-reserva";
import { EntityManager } from "typeorm";

@Injectable()
export class DaoReservaMysql implements DaoReserva {
    constructor(
        @InjectEntityManager()
        private readonly entityManager: EntityManager,
    ) {}

    async listar(): Promise<ReservaDto[]> {
        return this.entityManager.query(
            'select  R.id, C.nombre, R.fechaReserva, R.valorAlquiler, R.estado from reserva R inner join cliente C on R.idCliente = C.id',
        );
    }
}