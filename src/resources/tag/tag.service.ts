import { Tag } from "./tag.entity";
import { AppDataSource } from "../../config";

const tagRepository = () => AppDataSource.instance.getRepository(Tag);

export const findAll = async () => tagRepository().find();
export const findById = async (id: number) => tagRepository().findOneBy({ id });
export const create = async (data: Partial<Tag>) => tagRepository().save(tagRepository().create(data));
export const update = async (id: number, data: Partial<Tag>) => {
    const tag = await tagRepository().findOneBy({ id });
    if (!tag) return null;
    tagRepository().merge(tag, data);
    return tagRepository().save(tag);
};
export const remove = async (id: number) => tagRepository().delete({ id });
