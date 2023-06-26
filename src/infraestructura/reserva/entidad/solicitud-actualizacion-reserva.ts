export class SolicitudActualizacionReserva {
    
    readonly #idReserva: number;
    readonly #nuevaFecha: string;

    constructor(idReserva: number, nuevaFecha: string){
        this.#idReserva = idReserva;
        this.#nuevaFecha = nuevaFecha;
    }

    get idReserva(): number {
        return this.#idReserva
    }

    get nuevaFecha() : string {
        return this.#nuevaFecha;
    }
}