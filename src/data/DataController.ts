
import { connect, connection, Connection, model } from "mongoose";
import {User, IUserModel} from "./User";

declare interface IModels {
    User: IUserModel;
}

export class DataController {
    public static get Models() {
        if (!DataController.instance) {
            DataController.instance = new DataController();
        }
        return DataController.instance.models;
    }

    public static getReadyStateSync(): number {
        // @ts-ignore
        return this.db.readyState || 0;
    }

    public static async connect(): Promise<Connection> {
        //Get the URL

        const mongoDbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/users'

        console.log({mongoDbUrl})

        if (!this.db) {
            // tslint:disable-next-line:max-line-length
            const opts = {useNewUrlParser:  true, useUnifiedTopology:  true, useFindAndModify:  false, useCreateIndex:  true };
            const conn = await connect(mongoDbUrl, opts );
            this.db = connection;
        }
        this.db.on("open", this.connected);
        this.db.on("error", this.error);

        return connection;
    }
    private static db: Connection | undefined;

    private static instance: DataController;

    private static connected() {
        // tslint:disable-next-line:no-console
        console.log("Mongoose has connected");
    }

    private static error(error: Error)  {
        // tslint:disable-next-line:no-console
        console.log("Mongoose has made an error", error);
    }

    public models: IModels;

    constructor() {
        this.models = {
            User: new User().model
        };
    }

}
