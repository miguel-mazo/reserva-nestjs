import { ApiProperty } from '@nestjs/swagger';

export class ClienteDto {

  @ApiProperty({ example: 'William' })
  nombre: string;
}