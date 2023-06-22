import { ApiProperty } from "@nestjs/swagger";
import { EstadoReserva } from "src/infraestructura/reserva/entidad/estado-reserva";

export class ReservaDto {

    @ApiProperty({ example: 1234 })
    id: number;

    @ApiProperty({ example: 'William' })
    nombreCliente: string;
  
    @ApiProperty({ type: Date })
    fechaReserva: string;

    @ApiProperty({ type: EstadoReserva })
    estado: string;

    @ApiProperty({ example: 100 })
    valorAlquiler: number;
}