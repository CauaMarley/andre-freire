// Utility to manage custom uploaded media with fallback to static assets
import { useState, useEffect } from 'react';

export type MediaSlot = 
  | 'hero_video' 
  | 'banner_turma' 
  | 'dan_portrait' 
  | 'dan_blackbelt';

export function extractYouTubeId(urlOrId: string | null | undefined): string | null {
  if (!urlOrId) return null;
  const trimmed = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

const DEFAULT_MEDIA: Record<MediaSlot, string> = {
  hero_video: 'https://youtu.be/R7FJxP_joak',
  banner_turma: 'https://i.imgur.com/gpOTp4h.jpeg',
  dan_portrait: 'https://i.imgur.com/kU9qdfU.jpeg',
  dan_blackbelt: 'https://i.imgur.com/WU2QoKR.jpeg',
};

// IndexedDB database name and store
const DB_NAME = 'CarlsonGracieMediaDB';
const DB_STORE = 'media_files';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getStoredMedia(slot: MediaSlot): Promise<string> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(DB_STORE, 'readonly');
      const store = tx.objectStore(DB_STORE);
      const req = store.get(slot);
      req.onsuccess = () => {
        if (req.result && typeof req.result === 'string') {
          // If stored result was an old default local mp4, auto-upgrade to the new YouTube video
          if (slot === 'hero_video' && (req.result.includes('lv_0_') || req.result.includes('academy-presentation.mp4'))) {
            resolve(DEFAULT_MEDIA[slot]);
          } else if (slot === 'dan_portrait' && req.result.includes('WU2QoKR')) {
            // Avoid duplicate with black belt photo
            resolve(DEFAULT_MEDIA[slot]);
          } else {
            resolve(req.result);
          }
        } else {
          resolve(DEFAULT_MEDIA[slot]);
        }
      };
      req.onerror = () => resolve(DEFAULT_MEDIA[slot]);
    });
  } catch {
    return DEFAULT_MEDIA[slot];
  }
}

export async function saveStoredMedia(slot: MediaSlot, dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(DB_STORE, 'readwrite');
      const store = tx.objectStore(DB_STORE);
      store.put(dataUrl, slot);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    // Dispatch global event so all components react immediately
    window.dispatchEvent(new CustomEvent('carlson_media_updated', { detail: { slot, dataUrl } }));
  } catch (err) {
    console.error('Failed to save media to IndexedDB:', err);
  }
}

export function useMediaUrl(slot: MediaSlot): string {
  const [url, setUrl] = useState<string>(DEFAULT_MEDIA[slot]);

  useEffect(() => {
    let isMounted = true;
    getStoredMedia(slot).then((stored) => {
      if (isMounted && stored) {
        setUrl(stored);
      }
    });

    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ slot: MediaSlot; dataUrl: string }>;
      if (customEvent.detail && customEvent.detail.slot === slot) {
        setUrl(customEvent.detail.dataUrl);
      }
    };

    window.addEventListener('carlson_media_updated', handler);
    return () => {
      isMounted = false;
      window.removeEventListener('carlson_media_updated', handler);
    };
  }, [slot]);

  return url;
}
