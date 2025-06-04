import { Post } from "./post.entity";
import { AppDataSource } from "../../config";

const postRepository = () => AppDataSource.instance.getRepository(Post);

export const findAll = async () => postRepository().find();
export const findById = async (id: number) => postRepository().findOneBy({ id });
export const create = async (data: Partial<Post>) => postRepository().save(postRepository().create(data));
export const update = async (id: number, data: Partial<Post>) => {
    const post = await postRepository().findOneBy({ id });
    if (!post) return null;
    postRepository().merge(post, data);
    return postRepository().save(post);
};
export const remove = async (id: number) => postRepository().delete({ id });
