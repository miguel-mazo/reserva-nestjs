export class SolicitudReserva {
    
    readonly #idCliente: number;
    readonly #fechaReserva: string;

    constructor(idCliente: number, fechaReserva: string){
        this.#idCliente = idCliente;
        this.#fechaReserva = fechaReserva;
    }

    get idCliente(): number {
        return this.#idCliente
    }

    get fechaReserva() : string {
        return this.#fechaReserva;
    }
}