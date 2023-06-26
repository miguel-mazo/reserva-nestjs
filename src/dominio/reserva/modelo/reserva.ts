import { EstadoReserva } from "src/infraestructura/reserva/entidad/estado-reserva";
import { SolicitudActualizacionReserva } from "src/infraestructura/reserva/entidad/solicitud-actualizacion-reserva";
import { SolicitudReserva } from "src/infraestructura/reserva/entidad/solicitud-reserva";

const VALOR_ALQUILER_ENTRE_SEMANA = 100;
const VALOR_ALQUILER_SABADO = 120;
const VALOR_ALQUILER_DOMINGO = 130;

export class Reserva {
    private id: number;
    private idCliente: number;
    private fechaReserva: Date;
    private valorAlquiler: number;
    private estado: EstadoReserva;

    constructor(id?:number, idCliente?: number, fechaReserva?: string, valorAlquiler?: number, estado?: EstadoReserva){

        if(id === null && idCliente !== null && fechaReserva !== null && valorAlquiler === null && estado === null) {
            this.idCliente = idCliente;
            this.fechaReserva = new Date(fechaReserva);
            this.aplicarValorAlquiler();
            this.estado = EstadoReserva.ACTIVA;
        }

        if(id !== null && idCliente !== null && fechaReserva !== null && valorAlquiler !== null && estado !== null) {
            this.id = id;
            this.idCliente = idCliente;
            this.fechaReserva = new Date(fechaReserva);
            this.valorAlquiler = valorAlquiler;
            this.estado = estado;
        }
    }

    crear(solicitudReserva: SolicitudReserva): Reserva {
        return new Reserva(null, solicitudReserva.idCliente, solicitudReserva.fechaReserva, null, null);
    }

    private aplicarValorAlquiler(): void {
        switch (this.fechaReserva.getDay()) {
            case 6: // Saturday
            this.valorAlquiler = VALOR_ALQUILER_SABADO;
            break;
        
            case 0: // Sunday
            this.valorAlquiler = VALOR_ALQUILER_DOMINGO;
            break;
        
            default:
            this.valorAlquiler = VALOR_ALQUILER_ENTRE_SEMANA;
        }
    }

    cancelar(): void {
        this.estado = EstadoReserva.CANCELADA;
    }

    actualizar(solicitudActualizacionReserva: SolicitudActualizacionReserva): void {
        this.fechaReserva = new Date(solicitudActualizacionReserva.nuevaFecha);
        this.aplicarValorAlquiler();
    }

    get getId(): number {
        return this.id;
    }

    get getIdCliente(): number {
        return this.idCliente;
    }

    get getFechaReserva(): Date {
        return this.fechaReserva;
    }

    get getValorAlquiler(): number {
        return this.valorAlquiler;
    }

    get getEstado(): EstadoReserva {
        return this.estado;
    }
}