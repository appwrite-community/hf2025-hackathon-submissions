# Info

Below:

1. Ideal repo structure (web + React Native + Appwrite integration)
2. Concrete Appwrite REST `curl` commands to run (fill in placeholders) to create the backend pieces needed (project, storage bucket, DB collections, functions)
3. Short implementation notes about where to plug existing files and how to bundle core scenes offline.

---

# 1) Recommended repo layout (mono-repo style)

```
calmwave/                            # repo root
├─ README.md
├─ package.json                      # root scripts (lint, format, workspace helpers)
├─ .gitignore
├─ /apps
│  ├─ /web                          # optional web demo (current HTML/CSS/JS)
│  │  ├─ index.html                  # -> place index.html here. :contentReference[oaicite:3]{index=3}
│  │  ├─ app.js                       # -> current app.js logic. :contentReference[oaicite:4]{index=4}
│  │  └─ style.css                    # -> design system / theme. :contentReference[oaicite:5]{index=5}
│  └─ /mobile                        # React Native app
│     ├─ package.json
│     ├─ App.js / index.js
│     ├─ /assets
│     │  ├─ /audio                    # bundle 2–3 core audio loops here (offline-first)
│     │  └─ /images                   # scene thumbnails, etc.
│     └─ /src
│        ├─ /components
│        ├─ /screens
│        └─ /services
├─ /infra
│  ├─ appwrite-setup.md              # instructions for self-hosting Appwrite (if chosen)
│  └─ terraform/                     # optional IaC for Appwrite infra (if self-hosting)
├─ /serverless                        # optional Appwrite Functions source code
│  └─ functions/
│     └─ process-upload/             # e.g. generate thumbnails or transcode audio
└─ /docs
   └─ design-guidelines.md
```

Notes:

* Keep the web demo in `/apps/web` so it can be used as a quick prototype while building the React Native client in `/apps/mobile`.
* Put short audio loops (core scenes) into `/apps/mobile/assets/audio` to ensure instant offline startup. Appwrite will serve optional extras, but bundle the essentials.

---

# 2) Appwrite backend pieces wanted

Minimum backend resources:

* Appwrite **Project** (one project for CalmWave)
* **Storage Bucket** `scenes` for optional downloadable assets (audio/image)
* **Database Collection** `user_prefs` for preferences (opt-in only)
* **Database Collection** `scene_metadata` for remote scene catalog (title, fileId, tags)
* **Function(s)** for processing user uploads / generating thumbnails / sending notifications (optional)

Below are example REST `curl` calls to run from a terminal (replace placeholders like `$APPWRITE_ENDPOINT`, `$APPWRITE_API_KEY`, `$APPWRITE_PROJECT_ID`).

> IMPORTANT: these `curl` calls assume there is a Appwrite instance running and an **Admin API Key**. If using the Appwrite Console UI, can perform the same steps there (Console often easier for first-time setup).

## 2.1 Create a Storage Bucket for scenes (audio/images)

```bash
# Create a storage bucket named 'scenes'
curl -X POST "$APPWRITE_ENDPOINT/v1/storage/buckets" \
  -H "Content-Type: application/json" \
  -H "X-Appwrite-Project: $APPWRITE_PROJECT_ID" \
  -H "X-Appwrite-Key: $APPWRITE_API_KEY" \
  -d '{
    "bucketId": "scenes",
    "name": "Scene assets",
    "permission": "private",
    "fileSecurity": false
  }'
```

## 2.2 Upload an asset to that bucket

Can upload files via SDKs or the REST upload endpoint. Example `curl` (multipart) to upload an audio file:

```bash
curl -X POST "$APPWRITE_ENDPOINT/v1/storage/buckets/scenes/files" \
  -H "X-Appwrite-Project: $APPWRITE_PROJECT_ID" \
  -H "X-Appwrite-Key: $APPWRITE_API_KEY" \
  -F "file=@./apps/mobile/assets/audio/ocean-loop.mp3" \
  -F "read[]=role:all" \
  -F "write[]=user:$USER_ID"     # optional: restrict writes
```

If the Console is preferred, can drag-and-drop files into the `scenes` bucket.

## 2.3 Create a Database collection for scene metadata

```bash
curl -X POST "$APPWRITE_ENDPOINT/v1/database/collections" \
  -H "Content-Type: application/json" \
  -H "X-Appwrite-Project: $APPWRITE_PROJECT_ID" \
  -H "X-Appwrite-Key: $APPWRITE_API_KEY" \
  -d '{
    "collectionId": "scene_metadata",
    "name": "Scene Metadata",
    "permission": "document"
  }'
```

Then create attributes (fields). Example create attributes (title, description, storageFileId, tags):

```bash
# Title string
curl -X POST "$APPWRITE_ENDPOINT/v1/database/collections/scene_metadata/attributes/string" \
  -H "Content-Type: application/json" \
  -H "X-Appwrite-Project: $APPWRITE_PROJECT_ID" \
  -H "X-Appwrite-Key: $APPWRITE_API_KEY" \
  -d '{"key":"title","size":256,"required":true}'

# Description string
curl -X POST "$APPWRITE_ENDPOINT/v1/database/collections/scene_metadata/attributes/string" \
  -H ... -d '{"key":"description","size":1024,"required":false}'

# fileId (string) that points to storage file id
curl -X POST "$APPWRITE_ENDPOINT/v1/database/collections/scene_metadata/attributes/string" \
  -H ... -d '{"key":"fileId","size":128,"required":true}'

# tags (array) - using string attribute for CSV or another collection if prefer relational
curl -X POST "$APPWRITE_ENDPOINT/v1/database/collections/scene_metadata/attributes/string" \
  -H ... -d '{"key":"tags","size":256,"required":false}'
```

## 2.4 Create `user_prefs` collection (opt-in only)

```bash
curl -X POST "$APPWRITE_ENDPOINT/v1/database/collections" \
  -H "Content-Type: application/json" \
  -H "X-Appwrite-Project: $APPWRITE_PROJECT_ID" \
  -H "X-Appwrite-Key: $APPWRITE_API_KEY" \
  -d '{"collectionId":"user_prefs","name":"User Preferences","permission":"document"}'

# then add fields such as userId, breathingPattern, lastScene, analyticsOptIn (boolean)
```

## 2.5 Create an Appwrite Function (optional)

Example: a Function that generates thumbnails when a new audio/image uploads.

```bash
# Create function
curl -X POST "$APPWRITE_ENDPOINT/v1/functions" \
  -H "Content-Type: application/json" \
  -H "X-Appwrite-Project: $APPWRITE_PROJECT_ID" \
  -H "X-Appwrite-Key: $APPWRITE_API_KEY" \
  -d '{
    "functionId":"process_upload",
    "name":"Process Upload",
    "runtime":"node-18.0",
    "entrypoint":"index.js",
    "execute":"post"
  }'
```

Will still need to deploy the function code from `/serverless/functions/process-upload/`.

---

# 3) Database schema suggestions (minimal)

`scene_metadata` document:

```json
{
  "title": "Ocean Waves",
  "description": "Gentle ocean waves for grounding",
  "fileId": "f1234abcde",       // stored file id in Appwrite Storage
  "thumbnailFileId": "t1234abc",
  "tags": ["ocean","nature","safe-place"],
  "createdAt": "2025-10-15T12:00:00Z"
}
```

`user_prefs` document:

```json
{
  "userId": "user_abc123",   // optional, if the app will support accounts
  "lastScene": "ocean",
  "breathingPattern": "basic",
  "analyticsOptIn": false
}
```

---

# 4) React Native integration – where to start

1. **Bootstrap:** since already cloned Appwrite’s React Native starter, keep that and create components:

   * `/src/services/appwrite.js` — initialize Appwrite SDK with `endpoint` and `projectId`.
   * `/src/services/sceneService.js` — functions to list scenes (query `scene_metadata`), download a file from Storage, and save to local FS.

2. **Downloading an Appwrite asset into local FS (pseudo-code)**

```js
// pseudo-code / outline (use Appwrite JS SDK or REST)
import { Storage } from 'appwrite';
const storage = new Storage(client);

async function downloadSceneFile(fileId) {
  // download binary stream
  const response = await storage.getFileDownload('scenes', fileId);
  // save to RN file system (react-native-fs or expo-file-system)
  // then return local path to play with native audio engine
}
```

3. **Bundle core assets**: copy 2–3 small loops from web demo (have base64 audio in `app.js`) into `/apps/mobile/assets/audio/` and reference them directly in RN with `require('./assets/audio/ocean.mp3')` so CalmNow or Relax is instant.

4. **Audio playback**: use AVAudioEngine (iOS), ExoPlayer (Android) or use a cross-platform audio plugin (e.g., `react-native-track-player` or `expo-av`). Play from local filesystem path for low-latency.

5. **Offline-first**: ensure the app checks local assets first, and only attempts to fetch from Appwrite if assets are missing or user explicitly downloads new scenes.

---

# 5) Useful local dev scripts (examples for package.json)

```json
"scripts": {
  "web:dev": "cd apps/web && live-server .",
  "mobile:ios": "cd apps/mobile && npx react-native run-ios",
  "mobile:android": "cd apps/mobile && npx react-native run-android",
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  "format": "prettier --write ."
}
```

---

# 6) Where to put current files

* Copy current `index.html`, `app.js`, and `style.css` into `/apps/web/` to iterate the UI in the browser quickly (they’re ready to run as-is).   
* Extract the base64 audio blobs from `app.js`'s `scenes` object and convert to compact `.mp3` or `.ogg` files for the mobile bundle (place in `/apps/mobile/assets/audio/`).
