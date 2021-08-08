# mongo-data-seeder

A command line application that automatically seeds a MongoDB database with random data.
- [mongo-data-seeder](#mongo-data-seeder)
  - [Structure of Random Data](#structure-of-random-data)
  - [Installation](#installation)
  - [Testing](#testing)
  - [Using `mongo-data-seeder` as a Command Line Utility](#using-mongo-data-seeder-as-a-command-line-utility)
  - [Running as a Docker Container](#running-as-a-docker-container)

## Structure of Random Data

The structure of the document that will be stored in the MongoDB database is:

* firstName: `string`
* lastName: `string`
* email: `string`
* phone: `string`
* dob: `Date`
* created: `Date`


## Installation

To install the dependency packages for `mongo-data-seeder` and the [Typescript compiler](https://www.typescriptlang.org/docs/handbook/compiler-options.html) (`tsc`) execute the following command:

`sudo npm run build`

## Testing

To run the test you need either an instance of MongoDB running on your local computer or an access to an instance of MongoDB running in the cloud, for example on [MongoDB Atlas](https://cloud.mongodb.com/).

If you testing by running running in a service, you need to add the following environment variable, `MONGODB_URL` to the test process.

**IMPORTANT!!!** You can put the environment variable in a `.env` file. That `.env` file needs to be at the root of the project file system. The following is an example of using the `echo` command to inject the environment variable and value into the file, `.env`.

```
 echo MONGODB_URL=mongodb+srv://cooluser:9EI0O0xxxxxxRR11@cluster0.oewnd.mongodb.net/seeder > .env
```

To verify that `MONGODB_URL` has been injected into the file, `.env`, execute the following command:

`cat .env`

Once database access is implemented, either locally or on the cloud, run the following command:

`npm test`

You'll get output similar to the following:

```
> mongo-data-seeder@0.0.5 test /home/reselbob/mongo-data-seeder
> mocha -r ts-node/register src/tests/test.ts --exit



  WriteDataManager Tests
mongodb+srv://reselbob:9EI0O0vikfvkRR75@cluster0.oewnd.mongodb.net/seeder
{
  mongoDbUrl: 'mongodb+srv://reselbob:9EI0O0vikfvkRR75@cluster0.oewnd.mongodb.net/seeder'
}
Starting seeding for 10 orders at Sun Aug 08 2021 16:36:57 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100829c10c171862d48663","created":"2021-08-08T16:36:57.296Z","firstName":"Lincoln","lastName":"Swift","email":"Lincoln.Swift@ciara.net","phone":"(468) 591-3864 x338","dob":"1951-06-29T17:34:47.122Z","__v":0}  at Sun Aug 08 2021 16:36:57 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100829c10c171862d48666","created":"2021-08-08T16:36:57.444Z","firstName":"Kristoffer","lastName":"Kertzmann","email":"Kristoffer.Kertzmann@ebba.com","phone":"1-750-772-3476","dob":"1970-05-16T16:13:56.655Z","__v":0}  at Sun Aug 08 2021 16:36:57 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100829c10c171862d48668","created":"2021-08-08T16:36:57.511Z","firstName":"Bart","lastName":"Friesen","email":"Bart.Friesen@gus.net","phone":"343.716.0861 x085","dob":"1989-10-05T12:47:47.040Z","__v":0}  at Sun Aug 08 2021 16:36:57 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100829c10c171862d4866a","created":"2021-08-08T16:36:57.583Z","firstName":"Nestor","lastName":"Gottlieb","email":"Nestor.Gottlieb@rozella.net","phone":"791-478-2099 x25440","dob":"1970-06-29T04:46:19.344Z","__v":0}  at Sun Aug 08 2021 16:36:57 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100829c10c171862d4866c","created":"2021-08-08T16:36:57.658Z","firstName":"Tiana","lastName":"Murphy","email":"Tiana.Murphy@karianne.org","phone":"709-595-2210 x83899","dob":"1974-10-06T14:25:39.144Z","__v":0}  at Sun Aug 08 2021 16:36:57 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100829c10c171862d4866e","created":"2021-08-08T16:36:57.729Z","firstName":"Kamille","lastName":"Harris","email":"Kamille.Harris@lavon.org","phone":"1-879-693-2518","dob":"1951-12-28T23:27:17.305Z","__v":0}  at Sun Aug 08 2021 16:36:57 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100829c10c171862d48670","created":"2021-08-08T16:36:57.805Z","firstName":"Willy","lastName":"Labadie","email":"Willy.Labadie@marina.biz","phone":"(297) 268-9280","dob":"1961-05-18T20:49:50.702Z","__v":0}  at Sun Aug 08 2021 16:36:57 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100829c10c171862d48672","created":"2021-08-08T16:36:57.876Z","firstName":"Betsy","lastName":"Schroeder","email":"Betsy.Schroeder@felipa.com","phone":"946-786-1146 x691","dob":"1970-11-12T14:55:05.712Z","__v":0}  at Sun Aug 08 2021 16:36:57 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100829c10c171862d48674","created":"2021-08-08T16:36:57.943Z","firstName":"Nicolas","lastName":"Parker","email":"Nicolas.Parker@tanya.com","phone":"1-530-690-2408","dob":"1999-07-31T21:56:04.374Z","__v":0}  at Sun Aug 08 2021 16:36:58 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"6110082ac10c171862d48676","created":"2021-08-08T16:36:58.012Z","firstName":"Ivory","lastName":"Mertz","email":"Ivory.Mertz@aniyah.info","phone":"(513) 800-2332 x87494","dob":"1961-04-07T13:07:59.853Z","__v":0}  at Sun Aug 08 2021 16:36:58 GMT+0000 (Coordinated Universal Time)

Finished seeding at Sun Aug 08 2021 16:36:58 GMT+0000 (Coordinated Universal Time)
    ✔ Can seed (1534ms)


  1 passing (2s)

```

## Using `mongo-data-seeder` as a Command Line Utility

To get the `mongo-data-seeder` running and a command line utility run the following command as `sudo`:

`sudo npm run deploy`

It will take a minute or two for the utility to install. The utility's name is `seeder`. When the installation process is finished you'll see the `--help` output as follows:

```
Usage: index.ts - m <MongoDB_CONNECTION_URL> (optional) -r <ROWS_OF_RANDOM_DATA> (optional) -c <MONGODB_DATABASE_NAME> (optional)

Options:
  -u, --url-mongodb    The URL representing a connection string to a remote instance of MongoDB. Defaults to mongodb://localhost:27017/.  [string]
  -r, --rows           The  number of rows of random data to inject into the MongoDB database. Defaults to 10.  [string]
  -d, --database-name  The name of the database in which to store the random data. Defaults to seeder.  [string]
  -h, --help           Show help  [boolean]
  -v, --version        Show version number  [boolean]

copyright 2021

```

The following is an example of using `seeder` to randomly generate to a fictitious remote MongoDB database at `mongodb+srv://cooluser:9EI0O0xxxxxxRR11@cluster0.oewnd.mongodb.net/seeder`:

```
seeder -u mongodb+srv://cooluser:9EI0O0xxxxxxRR11@cluster0.oewnd.mongodb.net/seeder
```

You'll get results similar to the following:

----

```
Hi from MongoDB Data Seeder at Sun Aug 08 2021 16:16:16 GMT+0000 (Coordinated Universal Time)


Looks like you want to connect to MongoDB using: mongodb+srv://cooluser:9EI0O0xxxxxxRR11@cluster0.oewnd.mongodb.net@cluster0.oewnd.mongodb.net/seeder. 

Strike your <enter> key to continue. Type 'n' to abort. 


Connecting to MongoDB at mongodb+srv://cooluser:9EI0O0xxxxxxRR11@cluster0.oewnd.mongodb.net@cluster0.oewnd.mongodb.net/seeder and creating 10 rows of random data at Sun Aug 08 2021 16:16:21 GMT+0000 (Coordinated Universal Time)
{
  mongoDbUrl: 'mongodb+srv://cooluser:9EI0O0xxxxxxRR11@cluster0.oewnd.mongodb.net@cluster0.oewnd.mongodb.net/seeder'
}
Starting seeding for 10 orders at Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100356f4876017e91e0ed3","created":"2021-08-08T16:16:22.234Z","firstName":"Shanon","lastName":"Hessel","email":"Shanon.Hessel@brock.com","phone":"531.928.3642 x717","dob":"1965-05-12T16:00:56.240Z","__v":0}  at Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100356f4876017e91e0ed6","created":"2021-08-08T16:16:22.339Z","firstName":"Mike","lastName":"Gerlach","email":"Mike.Gerlach@melissa.name","phone":"1-466-619-4417 x50381","dob":"1980-12-06T07:26:37.081Z","__v":0}  at Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100356f4876017e91e0ed8","created":"2021-08-08T16:16:22.386Z","firstName":"Royce","lastName":"Beier","email":"Royce.Beier@stan.com","phone":"(972) 294-1666","dob":"1966-06-08T22:43:23.220Z","__v":0}  at Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100356f4876017e91e0eda","created":"2021-08-08T16:16:22.430Z","firstName":"Jorge","lastName":"Stamm","email":"Jorge.Stamm@shane.name","phone":"(769) 901-7518 x46408","dob":"1985-11-16T12:30:01.523Z","__v":0}  at Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100356f4876017e91e0edc","created":"2021-08-08T16:16:22.473Z","firstName":"Angeline","lastName":"Gislason","email":"Angeline.Gislason@zane.biz","phone":"1-947-201-8081","dob":"1953-08-15T07:18:01.263Z","__v":0}  at Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100356f4876017e91e0ede","created":"2021-08-08T16:16:22.517Z","firstName":"Evangeline","lastName":"Bogisich","email":"Evangeline.Bogisich@wilburn.net","phone":"(479) 226-9127","dob":"1956-08-13T16:39:33.890Z","__v":0}  at Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100356f4876017e91e0ee0","created":"2021-08-08T16:16:22.570Z","firstName":"Jennyfer","lastName":"Dach","email":"Jennyfer.Dach@ally.name","phone":"1-317-936-9035 x3683","dob":"1964-12-30T07:44:47.926Z","__v":0}  at Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100356f4876017e91e0ee2","created":"2021-08-08T16:16:22.617Z","firstName":"Dorcas","lastName":"Marks","email":"Dorcas.Marks@karolann.com","phone":"1-319-465-6028 x80831","dob":"1967-11-12T16:23:36.482Z","__v":0}  at Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100356f4876017e91e0ee4","created":"2021-08-08T16:16:22.693Z","firstName":"Fred","lastName":"Treutel","email":"Fred.Treutel@ludie.net","phone":"821.412.9112 x6532","dob":"1993-04-08T07:49:09.898Z","__v":0}  at Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)
Seeded {"_id":"61100356f4876017e91e0ee6","created":"2021-08-08T16:16:22.742Z","firstName":"Brannon","lastName":"Jacobs","email":"Brannon.Jacobs@prudence.info","phone":"(366) 342-7919 x048","dob":"1992-06-19T00:03:11.883Z","__v":0}  at Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)

Finished seeding at Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)
Seeder created 10 rows of random data Sun Aug 08 2021 16:16:22 GMT+0000 (Coordinated Universal Time)

```

----

## Running as a Docker Container

To run `mongo-data-seeder` from within a Docker container, take the following steps:

**Step 1:** Clone the source code for this project into your development environment:

`git clone https://github.com/reselbob/mongo-data-seeder.git`

**Step 2:** Go to the source code directory.

`cd mongo-data-seeder`

**Step 3:** Build the Docker image, which will be named, `seeder`:

`docker build -t seeder .`

**Step 4:** Create a container using the Docker image named, `seeder`. Run the container so that you can access the source code working directory from a command line within the container. The name of the container will be `myseeder`.

Execute the following command to execute the tasks described above:

`docker run --name myseeder --rm -ti  seeder /bin/bash`

You'll get output similar to the following:

`root@c898ded1dad7:/app#`

**Step 5:** Deploy `seeder` at the container's command line by executing the following command:

`npm run deploy`

You'll get output similar to the following:

```
.
.
.
Options:
  -u, --url-mongodb    The URL representing a connection string to a remote instance of MongoDB. Defaults to mongodb://localhost:27017/.  [string]
  -r, --rows           The  number of rows of random data to inject into the MongoDB database. Defaults to 10.  [string]
  -d, --database-name  The name of the database in which to store the random data. Defaults to seeder.  [string]
  -h, --help           Show help  [boolean]
  -v, --version        Show version number  [boolean]

copyright 2021
```

You can now enter a `seeder` command similar to the following to inject random data into the fictitious MongoDB database found at, `mongodb+srv://cooluser:9EI0O0xxxxxxRR11@cluster0.oewnd.mongodb.net/seeder` :

`seeder -u mongodb+srv://cooluser:9EI0O0xxxxxxRR11@cluster0.oewnd.mongodb.net/seeder`

**Step 6:** To exit the container and delete it from your development environment, type ...

`exit`

... at the container's command line.

**Step 7:** To removed Docker image, `seeder` from your development environment, type:

`docker image rm -f seeder`
