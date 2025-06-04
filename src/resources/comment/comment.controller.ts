import { Comment } from "./comment.entity";
import { AppDataSource } from "../../config";
import { Request, Response } from "express";

const commentRepository = () => AppDataSource.instance.getRepository(Comment);

export const getAllComments = async (req: Request, res: Response) => {
    const comments = await commentRepository().find();
    res.json(comments);
};

export const getCommentById = async (req: Request, res: Response) => {
    const comment = await commentRepository().findOneBy({ id: Number(req.params.id) });
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    res.json(comment);
};

export const createComment = async (req: Request, res: Response) => {
    const comment = commentRepository().create(req.body);
    await commentRepository().save(comment);
    res.status(201).json(comment);
};

export const updateComment = async (req: Request, res: Response) => {
    const comment = await commentRepository().findOneBy({ id: Number(req.params.id) });
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    commentRepository().merge(comment, req.body);
    await commentRepository().save(comment);
    res.json(comment);
};

export const deleteComment = async (req: Request, res: Response) => {
    const result = await commentRepository().delete({ id: Number(req.params.id) });
    if (!result.affected) return res.status(404).json({ message: "Comment not found" });
    res.status(204).send();
};
