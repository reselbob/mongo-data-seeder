import { DataController } from "../data/DataController";
import { Seeder } from "./Seeder";

export async function run(url: string, numberOfRows: number): Promise<void> {
    const conn = await DataController.connect(url);
    const seeder = new Seeder();
    await seeder.seed(numberOfRows);
    return
}