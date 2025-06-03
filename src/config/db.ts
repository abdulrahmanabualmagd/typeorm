import { DataSource } from "typeorm";

export default class AppDataSource extends DataSource {
    constructor() {
        super({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "sa123456",
            database: "test",
            synchronize: true,
            entities: ["src/resources/**/*.entity.{ts,js}"],
        });
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
