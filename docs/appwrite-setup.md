# Appwrite Setup Guide

This guide will help you set up the Appwrite backend for CalmWave.

## Prerequisites

- An Appwrite account ([sign up at cloud.appwrite.io](https://cloud.appwrite.io))
- Or a self-hosted Appwrite instance ([self-hosting docs](https://appwrite.io/docs/advanced/self-hosting))
- Admin API key for your project

## Quick Setup

### Option 1: Using Appwrite Console (Recommended)

1. **Create a New Project**

   - Log in to [Appwrite Console](https://cloud.appwrite.io)
   - Click "Create Project"
   - Name it "CalmWave" (or your preferred name)
   - Copy your Project ID

2. **Create Storage Bucket for Scenes**

   - Navigate to **Storage** in the left sidebar
   - Click "Create Bucket"
   - Settings:
     - **Bucket ID**: `scenes`
     - **Name**: Scene Assets
     - **Permissions**: Configure read access for guests
     - **File Security**: Disabled (or configure based on your needs)
     - **Max File Size**: 10MB (adjust as needed)
     - **Allowed Extensions**: `mp3`, `ogg`, `webm`, `jpg`, `png`, `webp`

3. **Create Database**

   - Navigate to **Databases** in the left sidebar
   - Click "Create Database"
   - Name: "CalmWave"
   - Copy the Database ID

4. **Create `scene_metadata` Collection**

   - Inside your database, click "Create Collection"
   - Settings:
     - **Collection ID**: `scene_metadata`
     - **Name**: Scene Metadata
     - **Permissions**: Configure read access for guests

   Add the following attributes:

   | Attribute Key     | Type     | Size | Required | Default |
   | ----------------- | -------- | ---- | -------- | ------- |
   | `title`           | String   | 256  | Yes      | -       |
   | `description`     | String   | 1024 | No       | -       |
   | `fileId`          | String   | 128  | Yes      | -       |
   | `audioFileId`     | String   | 128  | No       | -       |
   | `thumbnailFileId` | String   | 128  | No       | -       |
   | `category`        | String   | 64   | No       | -       |
   | `tags`            | String[] | 64   | No       | -       |
   | `duration`        | Integer  | -    | No       | 0       |
   | `isOfflineBundle` | Boolean  | -    | No       | false   |

5. **Create `user_prefs` Collection (Optional)**

   - Click "Create Collection"
   - Settings:
     - **Collection ID**: `user_prefs`
     - **Name**: User Preferences
     - **Permissions**: Configure for authenticated users only

   Add the following attributes:

   | Attribute Key      | Type    | Size | Required | Default |
   | ------------------ | ------- | ---- | -------- | ------- |
   | `userId`           | String  | 128  | Yes      | -       |
   | `breathingPattern` | String  | 64   | No       | "basic" |
   | `lastScene`        | String  | 64   | No       | "ocean" |
   | `volume`           | Float   | -    | No       | 0.8     |
   | `analyticsOptIn`   | Boolean | -    | No       | false   |
   | `darkMode`         | Boolean | -    | No       | false   |

### Option 2: Using Appwrite CLI

If you prefer automation, you can use the Appwrite CLI:

```bash
# Install Appwrite CLI
npm install -g appwrite-cli

# Login to your Appwrite instance
appwrite login

# Initialize project
appwrite init project

# Create collections and attributes
# (Scripts coming soon - see appwrite-setup.sh)
```

## Upload Sample Scene Assets

1. Navigate to **Storage** > **scenes** bucket
2. Click "Create File"
3. Upload your audio files:
   - Ocean waves loop (ocean-waves.mp3)
   - Forest sounds (forest-ambient.mp3)
   - Rain sounds (gentle-rain.mp3)
   - Mountain breeze (mountain-wind.mp3)
4. Note the File IDs for each upload

## Create Scene Metadata Documents

1. Navigate to **Databases** > **CalmWave** > **scene_metadata**
2. Click "Create Document"
3. Create entries for each scene:

**Example: Ocean Waves Scene**

```json
{
  "title": "Ocean Waves",
  "description": "Gentle ocean waves lapping at the shore",
  "fileId": "YOUR_AUDIO_FILE_ID",
  "category": "nature",
  "tags": ["ocean", "water", "peaceful"],
  "duration": 180,
  "isOfflineBundle": true
}
```

Repeat for:

- Forest Sounds
- Gentle Rain
- Mountain Breeze

## Configure Environment Variables

Copy the Project ID and Database ID to your `.env` file:

```env
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id_here
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id_here
EXPO_PUBLIC_APPWRITE_SCENES_BUCKET_ID=scenes
EXPO_PUBLIC_APPWRITE_SCENE_METADATA_COLLECTION_ID=scene_metadata
EXPO_PUBLIC_APPWRITE_USER_PREFS_COLLECTION_ID=user_prefs
```

## Set Up Permissions

### For Guest Access (No Authentication Required)

**Storage Bucket Permissions:**

- Read: `Any`
- Create: `Any` (if you want users to upload scenes)
- Update: None
- Delete: None

**scene_metadata Collection Permissions:**

- Read: `Any`
- Create: None (admin only)
- Update: None
- Delete: None

### For Authenticated Users (Optional)

If you plan to add user accounts:

**user_prefs Collection Permissions:**

- Read: `role:member`
- Create: `role:member`
- Update: `role:member`
- Delete: `role:member`

## Test Your Setup

Run this test in your app:

```typescript
import { Client, Databases, Storage } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);

const databases = new Databases(client);
const storage = new Storage(client);

// Test fetching scenes
async function testSetup() {
  try {
    const scenes = await databases.listDocuments(
      "YOUR_DATABASE_ID",
      "scene_metadata"
    );
    console.log("✅ Scenes loaded:", scenes.total);
    return true;
  } catch (error) {
    console.error("❌ Setup error:", error);
    return false;
  }
}
```

## Advanced Setup (Optional)

### Appwrite Functions

You can create serverless functions for:

- Generating audio thumbnails
- Processing uploaded scenes
- Sending notifications
- Analytics aggregation

See `docs/functions/` for example implementations.

### Self-Hosting

For complete privacy and control, self-host Appwrite:

```bash
docker run -it --rm \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \
    --entrypoint="install" \
    appwrite/appwrite:1.6.0
```

See [Appwrite's self-hosting documentation](https://appwrite.io/docs/advanced/self-hosting) for details.

## Troubleshooting

### "Project not found" error

- Verify your Project ID in `.env`
- Ensure the endpoint URL is correct (includes `/v1`)

### "Collection not found" error

- Verify your Database ID and Collection ID
- Check that collections are created in the correct database

### "Permission denied" error

- Review collection and bucket permissions
- Ensure guest access is enabled if not using authentication

### Files not loading

- Check file IDs in scene_metadata documents
- Verify bucket permissions allow read access
- Ensure file extensions are in allowed list

## Next Steps

- Test the app with `npm start`
- Upload production audio assets
- Configure analytics (optional)
- Set up push notifications (optional)

## Resources

- [Appwrite Documentation](https://appwrite.io/docs)
- [Appwrite Storage Guide](https://appwrite.io/docs/products/storage)
- [Appwrite Database Guide](https://appwrite.io/docs/products/databases)
- [Appwrite Functions Guide](https://appwrite.io/docs/products/functions)
