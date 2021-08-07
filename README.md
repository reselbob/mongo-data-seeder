# mongo-data-seeder

An application that automatically seeds a MongoDB database with random data.

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

[TO BE PROVIDED]


