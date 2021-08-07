import * as faker from 'faker';
import { IUser } from "../data/IUser";
import { User, IUserModel } from "../data/User";
import { DataController } from "../data/DataController";

export class Seeder {
    public async seed(numberOfItems: number): Promise<void> {
        if (!numberOfItems) {
            throw new Error("Seeder.seed(numberOfItems) is missing a value for the numberOfItems parameter");
        }
        // tslint:disable-next-line:no-console
        console.log(`Starting seeding for ${numberOfItems} orders at ${new Date()}`);
        for (let i = 0; i < numberOfItems; i++) {
            const user = new DataController.Models.User();

            user.firstName = faker.name.firstName();
            user.lastName = faker.name.lastName();
            user.email = `${user.firstName}.${user.lastName}@${faker.internet.domainName()}`;
            user.phone = faker.phone.phoneNumber();
            user.dob = faker.date.between(new Date('1/1/1949'), new Date('12/31/1999'))
            const result = await user.save()
                .catch((e: Error) => {
                    // tslint:disable-next-line:no-console
                    console.error(e);
                });
            console.log(`Seeded ${JSON.stringify(user)}  at ${new Date()}`);

        }
        // tslint:disable-next-line:no-console
        console.log(`\nFinished seeding at ${new Date()}`);

    }

    public async getSeeds(): Promise<any>{
        return DataController.Models.User.find();
    }
}
