import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "../profile/profile.entity";
import { Comment } from "../comment/comment.entity";
import { Tag } from "../tag/tag.entity";

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 255 })
    title: string;

    @Column({ type: "text" })
    body: string;

    // [PROFILE]
    @ManyToOne(() => Profile, (profile) => profile.posts, { onDelete: "CASCADE" })
    profile: Profile;

    // [COMMENTS]
    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[];

    // [TAGS]
    @ManyToMany(() => Tag, (tag) => tag.posts)
    @JoinTable({ name: "Posts_Tags", joinColumn: { name: "post_id", referencedColumnName: "id" }, inverseJoinColumn: { name: "tag_id", referencedColumnName: "id" } })
    tags: Tag[];
}
