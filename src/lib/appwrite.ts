import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint("https://sgp.cloud.appwrite.io/v1")
    .setProject("6953f6f30012f76afb63");

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
