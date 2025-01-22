# Rust_for_Solana
First project with Rust for Solana and blockchain application

[English](#english) | [Français](#français)


# Eenglish

# Solana CLI

## Install & Setup:

Install the Solana Tool Suite by following [these instructions](https://docs.solana.com/cli/install-solana-cli-tools).   

Once the CLI is installed, we must create an account. We do this by generating a new **public/private key pair**.
```shell
solana-keygen new
```

Once we do that, we have to configure our Solana CLI client to use our new account.
```shell
solana config set --keypair /root/.config/solana/id.json
```

And now we just need to bind our client to a Solana network.
```shell
solana config set --url <network_url>
```
```shell
(dev net -- development)        https://api.devnet.solana.com
(test net -- staging)           https://api.testnet.solana.com
(main net -- production)        https://api.mainnet-beta.solana.com
```

## Exploring:

**You can see all commands supported by the Solana CLI by just entering:**
```shell
solana
```

Here's a few examples:   

To deploy applications on Solana, you need to pay `rent`. This costs a small amount of `lamports`(SOL). On the `dev` network, you can request an `airdrop` of "test money" to deploy to the dev net:
```shell
solana airdrop 1
```

Check the balance of your account:
```shell
solana balance
```

## The Dockerfile:

Provided is a Dockerfile used to create the following image: [jpcaulfi/solana-alpine](https://hub.docker.com/repository/docker/jpcaulfi/solana-alpine).   

You can leverage this image to create a Docker container to conduct Solana business out of - such as deploying and even hosting/running an application.   

This image contains:
```shell
node    rust    solana
```

You can run these commands in the container or write a Dockerfile:
```shell
solana-keygen new --no-bip39-passphrase
solana config set --keypair /root/.config/solana/id.json
solana config set --url http://api.devnet.solana.com
solana airdrop 2
```

# Hello solana

## First program (or smart contract) on the chain

Build the prog using cargo: (bpf is the encofind solana uses for its programs)
## Cargo.lock version 4 doen't work so put it in version 3
```shell
cargo build-bpf
```

Then, we can deploy it on the devnet by using the instruction of the solana SDK:
```shell
solana deploy target/deploy/program.so
```

Then, we can get infos on the prgram we just deployed with
```shell
solana program show "IDProg"
```

## Avec npm:

If needed, add the path to the Cargo.toml:
```rust
path = "src/program/src/lib.rs"
```

Build the program (main.ts)
```shell
npm run build:program
```

deploy on the devnet
```shell
solana program deploy dist/program/program.so
```

To get informations on the program curently on chain with its id
```shell
solana logs | grep "ID-Prog invoke" -A 3
```

To lunch our ts code and interact with the onchain program
```shell
npm run start
```

# Français

# Solana CLI

## Installation et configuration :

Installez la suite d’outils Solana en suivant [ces instructions](https://docs.solana.com/cli/install-solana-cli-tools).   

Une fois le CLI installé, nous devons créer un compte. Pour cela, nous générons une nouvelle **paire de clés publique/privée**.
```shell
solana-keygen new
```

Après cela, nous devons configurer notre client Solana CLI pour utiliser notre nouveau compte.
```shell
solana config set --keypair /root/.config/solana/id.json
```

Ensuite, nous devons lier notre client à un réseau Solana.
```shell
solana config set --url <network_url>
```
```shell
(dev net -- développement)        https://api.devnet.solana.com
(test net -- mise en scène)        https://api.testnet.solana.com
(main net -- production)        https://api.mainnet-beta.solana.com
```

## Exploration :

**Vous pouvez voir toutes les commandes supportées par le CLI Solana en entrant simplement :**
```shell
solana
```

Voici quelques exemples :   

Pour déployer des applications sur Solana, vous devez payer un `loyer`. Cela coûte une petite quantité de `lamports` (SOL). Sur le réseau `dev`, vous pouvez demander un `airdrop` de "monnaie de test" pour déployer sur le réseau de développement :
```shell
solana airdrop 1
```

Vérifiez le solde de votre compte :
```shell
solana balance
```

## Le Dockerfile :

Un Dockerfile est fourni pour créer l'image suivante : [jpcaulfi/solana-alpine](https://hub.docker.com/repository/docker/jpcaulfi/solana-alpine).   

Vous pouvez utiliser cette image pour créer un conteneur Docker permettant de réaliser des opérations Solana, comme le déploiement ou même l’hébergement/exécution d’une application.   

Cette image contient :
```shell
node    rust    solana
```

Vous pouvez exécuter ces commandes dans le conteneur ou écrire un Dockerfile :
```shell
solana-keygen new --no-bip39-passphrase
solana config set --keypair /root/.config/solana/id.json
solana config set --url http://api.devnet.solana.com
solana airdrop 2
```

# Bonjour Solana

## Premier programme (ou contrat intelligent) sur la blockchain

Construisez le programme en utilisant Cargo : (bpf est l'encodage utilisé par Solana pour ses programmes)
## La version 4 de Cargo.lock ne fonctionne pas, alors utilisez la version 3
```shell
cargo build-bpf
```

Ensuite, nous pouvons le déployer sur le devnet en utilisant les instructions du SDK Solana :
```shell
solana deploy target/deploy/program.so
```

Ensuite, nous pouvons obtenir des informations sur le programme que nous venons de déployer avec :
```shell
solana program show "IDProg"
```

## Avec npm :

Si nécessaire, ajoutez le chemin vers Cargo.toml :
```rust
path = "src/program/src/lib.rs"
```

Construisez le programme (main.ts) :
```shell
npm run build:program
```

Déployez sur le devnet :
```shell
solana program deploy dist/program/program.so
```

Pour obtenir des informations sur le programme actuellement sur la blockchain avec son ID :
```shell
solana logs | grep "ID-Prog invoke" -A 3
```

Pour exécuter notre code TS et interagir avec le programme sur la blockchain :
```shell
npm run start
```

