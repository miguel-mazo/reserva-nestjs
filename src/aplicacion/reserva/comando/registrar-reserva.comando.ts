import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNumber } from "class-validator";

export class ComandoRegistrarReserva {
    @IsNumber()
    @ApiProperty({ example: 1234 })
    public idCliente: number;

    @IsDateString()
     @ApiProperty({ type: Date })
    public fechaReserva: string;

}