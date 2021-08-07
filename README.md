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

`npm install`

## Testing

To run the test you need either an instance of MongoDB running on your local computer or an access to an instance of MongoDB running in the cloud, for example on [MongoDB Atlas](https://cloud.mongodb.com/).

If you are running in a service, you need to adde the following environment variable, `MONGODB_URL`.

You can put the environment variable in a `.env` file. That `.env` file needs to be at the root of the project file system.

Once database access is implemented, either locally or on the cloud, run the following command.

[MORE TO COME]

`npm test`

## Using the CLI Tool

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


