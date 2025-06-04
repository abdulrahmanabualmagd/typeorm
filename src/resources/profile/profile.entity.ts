import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { Post } from "../post/post.entity";
import { Comment } from "../comment/comment.entity";

@Entity("profiles")
export class Profile {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 255 })
    firstName: string;

    @Column({ type: "varchar", length: 255 })
    lastName: string;

    // [USER]
    @OneToOne(() => User, (user) => user.profile, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user: User;

    // [POSTS]
    @OneToMany(() => Post, (post) => post.profile)
    posts: Post[];

    // [COMMENTS]
    @OneToMany(() => Comment, (comment) => comment.profile)
    comments: Comment[];
}
