import { Profile } from "./profile.entity";
import { AppDataSource } from "../../config";
import { Request, Response } from "express";

const profileRepository = () => AppDataSource.instance.getRepository(Profile);

export const getAllProfiles = async (req: Request, res: Response) => {
    const profiles = await profileRepository().find();
    res.json(profiles);
};

export const getProfileById = async (req: Request, res: Response) => {
    const profile = await profileRepository().findOneBy({ id: Number(req.params.id) });
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
};

export const createProfile = async (req: Request, res: Response) => {
    const profile = profileRepository().create(req.body);
    await profileRepository().save(profile);
    res.status(201).json(profile);
};

export const updateProfile = async (req: Request, res: Response) => {
    const profile = await profileRepository().findOneBy({ id: Number(req.params.id) });
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    profileRepository().merge(profile, req.body);
    await profileRepository().save(profile);
    res.json(profile);
};

export const deleteProfile = async (req: Request, res: Response) => {
    const result = await profileRepository().delete({ id: Number(req.params.id) });
    if (!result.affected) return res.status(404).json({ message: "Profile not found" });
    res.status(204).send();
};
