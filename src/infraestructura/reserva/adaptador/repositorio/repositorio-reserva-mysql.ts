import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RepositorioReserva } from "src/dominio/reserva/puerto/repositorio/repositorio-reserva";
import { ReservaEntidad } from "../../entidad/reserva.entidad";
import { Repository } from "typeorm";
import { ReservaDto } from "src/aplicacion/reserva/consulta/dto/reserva.dto";
import { Reserva } from "src/dominio/reserva/modelo/reserva";

@Injectable()
export class RepositorioReservaMysql implements RepositorioReserva {

    constructor(
        @InjectRepository(ReservaEntidad)
        private readonly repositorio: Repository<ReservaEntidad>,
    ) {}

    async obtenerReserva(id: number): Promise<Reserva> {

        const reservaBaseDatos = await this.repositorio.query(
            'select  R.id, R.idCliente, C.nombre, R.fechaReserva, R.valorAlquiler, R.estado from reserva R inner join cliente C on R.idCliente = C.id where R.id =' + id
        );
        
        if(reservaBaseDatos.length > 0){
            return new Reserva(reservaBaseDatos[0].id, reservaBaseDatos[0].idCliente, reservaBaseDatos[0].fechaReserva, reservaBaseDatos[0].valorAlquiler, reservaBaseDatos[0].estado);
        } else{
            return null;
        }
    }

    async reservar(reserva: Reserva) {
        const entidad = new ReservaEntidad();
        entidad.idCliente = reserva.getIdCliente;
        entidad.fechaReserva = reserva.getFechaReserva;
        entidad.valorAlquiler = reserva.getValorAlquiler;
        entidad.estado = reserva.getEstado;
        await this.repositorio.save(entidad);
    }

    async cancelarReserva(reserva: Reserva): Promise<Reserva> {

        const query = "update reserva set estado = '" + reserva.getEstado + "' where id =" + reserva.getId

        return this.repositorio.query(query);
    }

    async actualizarReserva(reserva: Reserva) {

        const query = "update reserva set fechaReserva = '" + reserva.getFechaReserva.toISOString() + "' , valorAlquiler = " + reserva.getValorAlquiler + " where id =" + reserva.getId;

        return this.repositorio.query(query);
    }


}