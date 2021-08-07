import { model, Model, Schema } from "mongoose";

import {IUser} from "./IUser";
export interface IUserModel extends Model<IUser> {}

export class User {
    // tslint:disable-next-line:variable-name
    private _model: Model<IUser>;

    constructor() {
        const schema = new Schema({
            email: {
                type: String,
                unique: true,
                // tslint:disable-next-line:object-literal-sort-keys
                index: true,
                required: true,
            },
            firstName: {type: String, required: true},
            lastName: {type: String, required: true},
            phone: {type: String, required: true},
            // tslint:disable-next-line:object-literal-sort-keys
            dob: {
                type: Date,
                required: true
                // tslint:disable-next-line:object-literal-sort-keys
            },
            created: {
                type: Date,
                // tslint:disable-next-line:object-literal-sort-keys
                default: Date.now,
            },
        });

        schema.post("save", (error: Error, doc: any, next: any) => {
            // tslint:disable-next-line:no-console
            console.log(error);
            if (error.name === "MongoError") {
                next(new Error("There was a duplicate key error"));
            } else {
                next(error);
            }
        });

        this._model = model<IUser>("User", schema);
    }
    public get model(): Model<IUser> {
        return this._model;
    }
}
