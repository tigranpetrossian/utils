type StorageType = 'localStorage' | 'sessionStorage';

class SafeStorage implements Storage {
  private storage: Storage;
  public isFallback: boolean;

  constructor(type: StorageType) {
    this.isFallback = false;
    try {
      this.storage = window[type];
      const testKey = '__test_storage__';
      this.storage.setItem(testKey, testKey);
      this.storage.removeItem(testKey);
    } catch (e) {
      this.storage = new FallbackStorage();
      this.isFallback = true;
    }
  }

  setItem(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  getItem(key: string) {
    return this.storage.getItem(key);
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  key(index: number) {
    return this.storage.key(index);
  }

  get length() {
    return this.storage.length;
  }
}

class FallbackStorage implements Storage {
  private map: Map<string, string>;

  constructor() {
    this.map = new Map();
  }

  setItem(key: string, value: string) {
    this.map.set(key, value);
  }

  getItem(key: string): string | null {
    return this.map.get(key) ?? null;
  }

  removeItem(key: string) {
    return this.map.delete(key);
  }

  clear() {
    this.map.clear();
  }

  key(index: number): string | null {
    const keys = Array.from(this.map.keys());
    return keys[index] ?? null;
  }

  get length() {
    return this.map.size;
  }
}

/**
 * Safe localStorage instance.
 *
 * Safely wraps `localStorage` to handle cases where `localStorage` might fail,
 * such as when the storage quota is exceeded or when access is restricted due to user privacy settings.
 * If `localStorage` is unavailable, an in-memory fallback will be used instead.
 */
export const safeLocalStorage = new SafeStorage('localStorage');

/**
 * Safe sessionStorage instance.
 *
 * Safely wraps `sessionStorage` to handle cases where `sessionStorage` might fail,
 * such as when the storage quota is exceeded or when access is restricted due to user privacy settings.
 * If `sessionStorage` is unavailable, an in-memory fallback will be used instead.
 */
export const safeSessionStorage = new SafeStorage('sessionStorage');
