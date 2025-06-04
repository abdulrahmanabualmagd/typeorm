import { Post } from "./post.entity";
import { AppDataSource } from "../../config";
import { Request, Response } from "express";

const postRepository = () => AppDataSource.instance.getRepository(Post);

export const getAllPosts = async (req: Request, res: Response) => {
    const posts = await postRepository().find();
    res.json(posts);
};

export const getPostById = async (req: Request, res: Response) => {
    const post = await postRepository().findOneBy({ id: Number(req.params.id) });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
};

export const createPost = async (req: Request, res: Response) => {
    const post = postRepository().create(req.body);
    await postRepository().save(post);
    res.status(201).json(post);
};

export const updatePost = async (req: Request, res: Response) => {
    const post = await postRepository().findOneBy({ id: Number(req.params.id) });
    if (!post) return res.status(404).json({ message: "Post not found" });
    postRepository().merge(post, req.body);
    await postRepository().save(post);
    res.json(post);
};

export const deletePost = async (req: Request, res: Response) => {
    const result = await postRepository().delete({ id: Number(req.params.id) });
    if (!result.affected) return res.status(404).json({ message: "Post not found" });
    res.status(204).send();
};
