import { validatePensum } from "./pensum-converter";

export const LOCAL_STORAGE_PREFIX = 'pensumextractor';
export const LOCAL_SERVER_PREFIX = './pensum';

/**
 * Tries to load from the given pensum code from a university.
 * 
 * Lookup order:
 *  1. `localStorage`
 *  2. local data (`pensum/university/CODE.json`)
 *  3. from url
 */
export async function fetchPensumFromCode(university?: string, code?: string) {
  if (!university || !code) throw new PensumFetchError('No university or code provided!');//return null;

  let pensum: Pensum.Pensum | null;

  pensum = await fetchPensumFromCode_localStorage(university, code);
  if (pensum) return pensum;

  pensum = await fetchPensumFromCode_localData(university, code);
  if (pensum) return pensum;

  // Don't return null!
  // Instead throw error, so this gets catched.
  throw new PensumFetchError(`Unable to fetch pensum with identifier ${university}/${code}`);
  return null;
}

/** 
 * Tries to fetch the pensum from `localStorage`.
 * 
 * **Important note!** This only does fetch. The saving to `localStorage` will be done at window.unload.
 */
export async function fetchPensumFromCode_localStorage(university: string, code: string) {
  const key = [LOCAL_STORAGE_PREFIX, university, code].join('_');
  const pensumData = localStorage.getItem(key);

  if (!pensumData) return null; // Could not fetch

  // Parse fetched data
  // TODO: CHECK IF DATA IS VALID
  const pensum = JSON.parse(pensumData) as Pensum.Save.Pensum;
  return validatePensum(pensum, university);
}


/** Tries to fetch the pensum from `./pensum/$UNIVERSIDAD.` */
export async function fetchPensumFromCode_localData(university: string, code: string) {
  const path = [LOCAL_SERVER_PREFIX, university, code].join('/') + '.json';

  let pensumData: Pensum.Save.Pensum;
  try {
    const response = await fetch(path);
    pensumData = await response.json();
  } catch {
    return null;
  }

  return validatePensum(pensumData, university);
}


export class PensumFetchError extends Error {
  constructor(message?: string) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(message);
  }
}