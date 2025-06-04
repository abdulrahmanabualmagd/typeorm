import { Comment } from "./comment.entity";
import { AppDataSource } from "../../config";

const commentRepository = () => AppDataSource.instance.getRepository(Comment);

export const findAll = async () => commentRepository().find();
export const findById = async (id: number) => commentRepository().findOneBy({ id });
export const create = async (data: Partial<Comment>) => commentRepository().save(commentRepository().create(data));
export const update = async (id: number, data: Partial<Comment>) => {
    const comment = await commentRepository().findOneBy({ id });
    if (!comment) return null;
    commentRepository().merge(comment, data);
    return commentRepository().save(comment);
};
export const remove = async (id: number) => commentRepository().delete({ id });
