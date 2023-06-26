import { Injectable } from "@nestjs/common";
import { ComandoRegistrarReserva } from "./registrar-reserva.comando";
import { SolicitudReserva } from "src/infraestructura/reserva/entidad/solicitud-reserva";
import { ManejadorConsultarCliente } from "src/aplicacion/cliente/consulta/consultar-cliente-id.manejador";

@Injectable()
export class FabricaSolicitudReserva {

    constructor(private _manejadorConsultarCliente: ManejadorConsultarCliente){}

    async crear(comandoRegistrarReserva: ComandoRegistrarReserva) : Promise<SolicitudReserva> {
        var cliente = await this._manejadorConsultarCliente.ejecutar(comandoRegistrarReserva.idCliente);
        return new SolicitudReserva(cliente.id,comandoRegistrarReserva.fechaReserva);
    }
}