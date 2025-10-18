// Download/list scenes service
import * as FileSystem from 'expo-file-system';
import { appwriteStorage, appwriteDB, appwriteClient } from './appwrite';

// Replace with bucket id
const BUCKET_ID = 'scenes';
const LOCAL_SCENES_DIR = `${FileSystem.documentDirectory}scenes/`;

async function ensureLocalDir() {
  const info = await FileSystem.getInfoAsync(LOCAL_SCENES_DIR);
  if (!info.exists) {
    await FileSystem.makeDirectoryAsync(LOCAL_SCENES_DIR, { intermediates: true });
  }
}

/**
 * Example: list scene metadata (requires a collection named 'scene_metadata')
 * Returns an array of documents that include fileId and metadata.
 */
export async function listRemoteScenes() {
  // PSEUDO: Replace with actual appwriteDB.listDocuments call matching your collectionId
  // Example using SDK: appwriteDB.listDocuments(databaseId, collectionId)
  // Here we assume you have a server-side function or public collection
  try {
    const res = await appwriteDB.listDocuments('default', 'scene_metadata'); // adapt DB id
    return res.documents || [];
  } catch (err) {
    console.warn('Failed to list scenes', err);
    return [];
  }
}

/**
 * Download a file stored in Appwrite Storage to local FS and return the local URI.
 * This uses the Appwrite Storage download endpoint.
 * fileId = the Appwrite file id for the file in bucket BUCKET_ID
 */
export async function downloadSceneFile(fileId: string, fileName?: string) {
  await ensureLocalDir();
  const localFileName = fileName || `${fileId}.mp3`;
  const localPath = `${LOCAL_SCENES_DIR}${localFileName}`;

  // If already exists, return path
  const info = await FileSystem.getInfoAsync(localPath);
  if (info.exists) return localPath;

  // Build Appwrite storage download URL:
  // NOTE: if your files are public (read permission role:all) you can GET the view endpoint.
  // Example URL pattern:
  const endpoint = (appwriteClient as any).config?.endpoint || process.env.APPWRITE_ENDPOINT;
  const project = (appwriteClient as any).config?.project || process.env.APPWRITE_PROJECT_ID;

  const url = `${endpoint}/storage/buckets/${BUCKET_ID}/files/${fileId}/download`;

  // Use fetch to stream and save to local file
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Appwrite-Project': project, // required by Appwrite
      },
    });
    if (!res.ok) throw new Error('Failed to download asset');

    const blob = await res.blob();
    // Convert blob => base64 for expo-file-system, or use arrayBuffer
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    // Write file using FileSystem.writeAsStringAsync (base64) OR FileSystem.writeAsStringAsync with binary:
    // We'll convert to base64
    const base64 = Buffer.from(buffer).toString('base64');
    await FileSystem.writeAsStringAsync(localPath, base64, { encoding: FileSystem.EncodingType.Base64 });
    return localPath;
  } catch (err) {
    console.error('downloadSceneFile error', err);
    throw err;
  }
}
