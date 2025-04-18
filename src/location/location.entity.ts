import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column({ type: 'float', nullable: true })
  area: number;

  @ManyToOne(() => Location, (location) => location.children, { nullable: true })
  parent: Location;

  @OneToMany(() => Location, (location) => location.parent)
  children: Location[];
}
