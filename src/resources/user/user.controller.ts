import { User } from "./user.entity";
import { AppDataSource } from "../../config";
import { Request, Response } from "express";

const userRepository = () => AppDataSource.instance.getRepository(User);

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await userRepository().find();
    res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
    const user = await userRepository().findOneBy({ id: Number(req.params.id) });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
    const user = userRepository().create(req.body);
    await userRepository().save(user);
    res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
    const user = await userRepository().findOneBy({ id: Number(req.params.id) });
    if (!user) return res.status(404).json({ message: "User not found" });
    userRepository().merge(user, req.body);
    await userRepository().save(user);
    res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
    const result = await userRepository().delete({ id: Number(req.params.id) });
    if (!result.affected) return res.status(404).json({ message: "User not found" });
    res.status(204).send();
};
