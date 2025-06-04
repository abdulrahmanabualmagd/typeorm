import { Profile } from "./profile.entity";
import { AppDataSource } from "../../config";

const profileRepository = () => AppDataSource.instance.getRepository(Profile);

export const findAll = async () => profileRepository().find();
export const findById = async (id: number) => profileRepository().findOneBy({ id });
export const create = async (data: Partial<Profile>) => profileRepository().save(profileRepository().create(data));
export const update = async (id: number, data: Partial<Profile>) => {
    const profile = await profileRepository().findOneBy({ id });
    if (!profile) return null;
    profileRepository().merge(profile, data);
    return profileRepository().save(profile);
};
export const remove = async (id: number) => profileRepository().delete({ id });
