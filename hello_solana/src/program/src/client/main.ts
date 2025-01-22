import {
  Keypair,
  PublicKey,
  Connection,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';

import fs from 'mz/fs';
import path from 'path';

/*
Our keypair we used to create the on-chain Rust program
*/
const PROGRAM_KEYPAIR_PATH = path.join(
  path.resolve(__dirname, '../../../../dist/program'),
  'program-keypair.json'
);


async function main(){

console.log("Loading keypair from", PROGRAM_KEYPAIR_PATH);
console.log("lunching client....");


/*
Connection to the sol devnet
*/
let connection = new Connection("https://api.devnet.solana.com", 'confirmed');

/*
Load the keypair
*/
const secretKeyString = await fs.readFile(PROGRAM_KEYPAIR_PATH, 'utf-8'); // fetch the keypair
const secretKey = Uint8Array.from(JSON.parse(secretKeyString)); // Convert to Uint8Array
const programKeypair = Keypair.fromSecretKey(secretKey); // Create a Keypair for the program from the secret key
let programID: PublicKey = programKeypair.publicKey; // Get the public key of the program

/*
Create a new account to interact with our program
*/
const triggerKeyPair = Keypair.generate(); // Generate a new keypair for our account
const airdroprequest = await connection.requestAirdrop( // We airdrop some sol into the account to interact 
  triggerKeyPair.publicKey, //We request an aidrop to this public key
  LAMPORTS_PER_SOL, //constant of lamport per sol
)

await connection.confirmTransaction(airdroprequest); // Wait for the airdrop to be confirmed
console.log("Airdrop confirmed");


/*
Now we can set up an interaction with our program
*/
console.log(' --Pinging Program--', programID.toBase58()); //We print the public key of the program

//On créer une transaction pour envoyer une instruction à notre programme
const intruction = new TransactionInstruction({ 
  keys: [{pubkey: triggerKeyPair.publicKey, isSigner: true, isWritable: true}],
  programId: programID,
  data: Buffer.alloc(0),
});

//We send and wait for the onfirmation of the transaction
await sendAndConfirmTransaction(
  connection,
  new Transaction().add(intruction),
  [triggerKeyPair]
);


}

//main for the execution
main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },);
