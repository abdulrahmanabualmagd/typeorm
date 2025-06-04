import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Profile } from "../profile/profile.entity";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 255 })
    email: string;

    @Column({ type: "varchar", length: 255 })
    password: string;

    @Column({ type: "varchar", length: 255 })
    isActive: boolean;

    @OneToOne(() => Profile, (profile) => profile.user)
    profile: Profile
}
