import { ApiProperty } from '@nestjs/swagger';

export class ClienteDto {

  @ApiProperty({ example: 1234 })
  id: number;

  @ApiProperty({ example: 'William' })
  nombre: string;
}