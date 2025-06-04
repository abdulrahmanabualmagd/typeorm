import { DataSource } from "typeorm";
import { User } from "../resources/user/user.entity";
import { Profile } from "../resources/profile/profile.entity";
import { Post } from "../resources/post/post.entity";
import { Comment } from "../resources/comment/comment.entity";
import { Tag } from "../resources/tag/tag.entity";

export default class AppDataSource extends DataSource {
    // Singleton instance of AppDataSource
    private static _instance: AppDataSource;

    // Private constructor to prevent direct instantiation
    private constructor() {
        super({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "sa123456",
            database: "test",
            synchronize: true,
            entities: [User, Profile, Post, Comment, Tag],
            logging: true,
        });
    }

    // Getter for the singleton instance
    public static get instance(): AppDataSource {
        if (!this._instance) {
            this._instance = new AppDataSource();
        }
        return this._instance;
    }

    public async init() {
        await super.initialize();
        console.log("Data Source has been initialized!");
    }

    public async sync() {
        await this.synchronize();
        console.log("Data Source has been synchronized!");
    }

    public async destroy() {
        await super.destroy();
        console.log("Data Source has been destroyed!");
    }
}
