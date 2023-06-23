import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNumber } from "class-validator";

export class ComandoActualizarReserva {
    @IsNumber()
    @ApiProperty({ example: 1234 })
    public idReserva: number;

    @IsDateString()
     @ApiProperty({ type: Date })
    public nuevaFecha: string;

    constructor(idReserva: number, nuevafecha: string){
        this.idReserva = idReserva;
        this.nuevaFecha = nuevafecha;
    }
}