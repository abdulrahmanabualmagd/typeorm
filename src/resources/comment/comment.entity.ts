import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "../post/post.entity";
import { Profile } from "../profile/profile.entity";

@Entity("comments")
export class Comment {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "text", nullable: true })
    body: string;

    // [PROFILE]
    @ManyToOne(() => Profile, (profile) => profile.comments, { onDelete: "CASCADE" })
    profile: Profile;

    // [POST]
    @ManyToOne(() => Post, (post) => post.comments, { onDelete: "SET NULL" })
    post: Post;
}
