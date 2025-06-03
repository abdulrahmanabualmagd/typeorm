import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "../post/post.entity";

@Entity("tags")
export class Tag {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 255 })
    title: string;

    // [POSTS]
    @ManyToMany(() => Post, (post) => post.tags)
    posts: Post[];
}
