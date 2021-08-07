#!/usr/bin/env node
import yargs from 'yargs';
import { run } from './lib/program'

const defaultDbName: string = 'seeder';
const defaultRows: number = 10;
const defaultMongoConnectionUrl: string = `mongodb://localhost:27017/`

const urlDescription: string = `The URL representing a connection string to a remote instance of MongoDB. Defaults to ${defaultMongoConnectionUrl}.`;
const rowDescription: string = `The  number of rows of random data to inject into the MongoDB database. Defaults to ${defaultRows}.`;
const databaseDescription: string = `The name of the database in which to store the random data. Defaults to ${defaultDbName}.`;

const args: any = yargs.options({
  'url-mongodb': { type: 'string', demandOption: false, alias: 'u', describe: urlDescription },
  'rows': { type: 'string', demandOption: false, alias: 'r', describe: rowDescription },
  'database-name': { type: 'string', demandOption: false, alias: 'd', describe: databaseDescription },
})
  .usage('Usage: $0 - m <MongoDB_CONNECTION_URL> (optional) -r <ROWS_OF_RANDOM_DATA> (optional) -c <MONGODB_DATABASE_NAME> (optional)')
  .help('h')
  .alias('h', 'help')
  .alias('v', 'version')
  .epilog('copyright 2021')
  .wrap(null)
  .argv;


console.log(`\nHi from MongoDB Data Seeder at ${new Date()}`)


//  Do the checks of params against default settings
const url: string = args['url-mongodb'] || defaultMongoConnectionUrl;
const dbName: string = args['database-name'] || defaultDbName;
const rows: number = args['rows'] || defaultRows;

let connectionString: string;

//See if the database name is already in the URL.
if (url.indexOf(dbName) > -1) {
  connectionString = url
} else {
  connectionString = `${url}${dbName}`
}

let question = `\n\nLooks like you want to connect to MongoDB using: ${connectionString}? \n\nStrike your <enter> key to continue. Type 'n' to abort. `;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})



readline.question(question, (answer: string) => {
  if (answer === 'n') {
    console.log(`Bye at ${new Date()}`);
    process.exit(0);
  }
  else {
    console.log(`\n\nConnecting to MongoDB at ${connectionString} and creating ${rows} rows of random data at ${new Date()}`);

    run(connectionString, rows)
      .then(result => {
        console.log(`Seeder created ${rows} rows of random data ${new Date()}`);
        process.exit(0)
      });

  }
  readline.close()
})
