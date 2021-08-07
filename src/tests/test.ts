import env from "dotenv";
env.config();
import {expect} from "chai";
import {before, describe, it} from "mocha";

import {DataController} from "../data/DataController";
import { Seeder } from "../lib/Seeder";



describe("WriteDataManager Tests", () => {

    it("Can seed", async () => {
        console.log(process.env.MONGODB_URL);
        const conn = await DataController.connect(process.env.MONGODB_URL as string);
        expect(conn).to.be.an('object');
        const seeder = new Seeder();
        await seeder.seed(10);
    });

});