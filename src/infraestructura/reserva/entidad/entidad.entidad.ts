import { Cliente } from 'src/dominio/cliente/modelo/cliente';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EstadoReserva } from './estado-reserva';

@Entity({ name: 'RESERVA' })
export class ReservaEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cliente: Cliente;

  @Column()
  fechaReserva: Date;

  @Column()
  valorAlquiler: number;

  @Column()
  estado: EstadoReserva;
}