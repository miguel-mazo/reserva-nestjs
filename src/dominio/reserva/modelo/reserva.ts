import { Cliente } from "src/dominio/cliente/modelo/cliente";
import { EstadoReserva } from "src/infraestructura/reserva/entidad/estado-reserva";

export class Reserva {
    readonly #cliente: Cliente;
    readonly #fechaReserva: Date;
    readonly #valorAlquiler: number;
    readonly #estado: EstadoReserva;

    constructor(cliente: Cliente, fechaReserva: Date, valorAlquiler: number, estado: EstadoReserva){
        this.#cliente = cliente;
        this.#fechaReserva = fechaReserva;
        this.#valorAlquiler = valorAlquiler;
        this.#estado = estado;
    }

    get cliente(): Cliente {
        return this.#cliente;
    }

    get fechaReserva(): Date {
        return this.#fechaReserva;
    }

    get valorAlquiler(): number {
        return this.#valorAlquiler;
    }

    get estado(): EstadoReserva {
        return this.#estado;
    }
}