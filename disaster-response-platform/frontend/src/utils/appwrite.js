// frontend/src/utils/appwrite.js
import { Client, Account, Databases, Storage, Realtime } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('disaster-response-platform');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const realtime = new Realtime(client);

export const DATABASE_ID = 'disaster_db';
export const CRISIS_COLLECTION_ID = 'crises';
export const RESOURCES_COLLECTION_ID = 'resources';
export const VOLUNTEERS_COLLECTION_ID = 'volunteers';
export const ALERTS_COLLECTION_ID = 'alerts';