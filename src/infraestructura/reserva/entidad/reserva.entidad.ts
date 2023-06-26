import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'RESERVA' })
export class ReservaEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idCliente: number;

  @Column()
  fechaReserva: Date;

  @Column()
  valorAlquiler: number;

  @Column()
  estado: string;
}