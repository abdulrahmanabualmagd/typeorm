import { Tag } from "./tag.entity";
import { AppDataSource } from "../../config";
import { Request, Response } from "express";

const tagRepository = () => AppDataSource.instance.getRepository(Tag);

export const getAllTags = async (req: Request, res: Response) => {
    const tags = await tagRepository().find();
    res.json(tags);
};

export const getTagById = async (req: Request, res: Response) => {
    const tag = await tagRepository().findOneBy({ id: Number(req.params.id) });
    if (!tag) return res.status(404).json({ message: "Tag not found" });
    res.json(tag);
};

export const createTag = async (req: Request, res: Response) => {
    const tag = tagRepository().create(req.body);
    await tagRepository().save(tag);
    res.status(201).json(tag);
};

export const updateTag = async (req: Request, res: Response) => {
    const tag = await tagRepository().findOneBy({ id: Number(req.params.id) });
    if (!tag) return res.status(404).json({ message: "Tag not found" });
    tagRepository().merge(tag, req.body);
    await tagRepository().save(tag);
    res.json(tag);
};

export const deleteTag = async (req: Request, res: Response) => {
    const result = await tagRepository().delete({ id: Number(req.params.id) });
    if (!result.affected) return res.status(404).json({ message: "Tag not found" });
    res.status(204).send();
};
