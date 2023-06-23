import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class ComandoCancelarReserva {
    @IsNumber()
    @ApiProperty({ example: 1234 })
    public idReserva: number;

    constructor(idReserva: number){
        this.idReserva = idReserva;
    }
}