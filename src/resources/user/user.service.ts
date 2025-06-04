import { User } from "./user.entity";
import { AppDataSource } from "../../config";

const userRepository = () => AppDataSource.instance.getRepository(User);

export const findAll = async () => userRepository().find();
export const findById = async (id: number) => userRepository().findOneBy({ id });
export const create = async (data: Partial<User>) => userRepository().save(userRepository().create(data));
export const update = async (id: number, data: Partial<User>) => {
    const user = await userRepository().findOneBy({ id });
    if (!user) return null;
    userRepository().merge(user, data);
    return userRepository().save(user);
};
export const remove = async (id: number) => userRepository().delete({ id });
