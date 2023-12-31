import { Entity, Column, PrimaryColumn, Index, DeleteDateColumn } from 'typeorm'
import { ISession } from 'connect-typeorm'

@Entity()
export class Session implements ISession {
  @Index()
  @Column("bigint")
  public expiredAt = Date.now()

  @PrimaryColumn("varchar", { length: 255 })
  public id = ""

  @Column("text")
  public json = ""

  @DeleteDateColumn()
  public destroyedAt?: Date
}
