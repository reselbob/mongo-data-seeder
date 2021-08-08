# mongo-data-seeder

A command line application that automatically seeds a MongoDB database with random data.

The structure of the document that will be stored in the MongoDB database is:

* firstName: `string`
* lastName: `string`
* email: `string`
* phone: `string`
* dob: `Date`
* created: `Date`


## Installation
`sudo npm run prod`

## Testing

To run the test you need either an instance of MongoDB running on your local computer or an access to an instance of MongoDB running in the cloud, for example on [MongoDB Atlas](https://cloud.mongodb.com/).

If you testing by running running in a service, you need to add the following environment variable, `MONGODB_URL` to the test process.

You can put the environment variable in a `.env` file. That `.env` file needs to be at the root of the project file system.

Once database access is implemented, either locally or on the cloud, run the following command:

`npm test`

## Using `mongo-data-seeder` as Command Line Utility

To get the `mongo-data-seeder` running and a command line utility run the following command as `sudo`:

`sudo npm run prod`

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

The following is an example of using `seeder` to randomly generate to a fictitious remote MongoDB database at:

```
-u mongodb+srv://cooluser:9EI0O0xxxxxxRR11@cluster0.oewnd.mongodb.net/seeder
```

You'll get results similar to the following:

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


