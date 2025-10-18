// Appwrite client setup
import { Client, Databases, Storage } from 'appwrite';

// Read endpoint/project id from environment or Expo Constants
const ENDPOINT = process.env.APPWRITE_ENDPOINT || 'https://YOUR_APPWRITE_ENDPOINT/v1';
const PROJECT_ID = process.env.APPWRITE_PROJECT_ID || 'YOUR_PROJECT_ID';

const client = new Client()
  .setEndpoint(ENDPOINT) // e.g. https://appwrite.example.com/v1
  .setProject(PROJECT_ID);

export const appwriteClient = client;
export const appwriteStorage = new Storage(client);
export const appwriteDB = new Databases(client);
