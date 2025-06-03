import { AppDataSource } from "./config/index";

const db = new AppDataSource();


void db.init();
