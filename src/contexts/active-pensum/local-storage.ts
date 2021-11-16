import { validatePensum } from "functions/pensum-converter";
import pensumToSavePensum from "functions/pensum-save";

export declare namespace ActivePensum {

  /** List of universities/careers. */
  type Payload = Pensum.Pensum | null;

  type Action =
    | {
      type: 'set'
      payload: Payload
    }
    | {
      type: 'clear' | 'load/fromSave'
    }
    | {
      type: 'load'
      payload: {
        university: string,
        code: string,
      }
    }
}

const PENSUM_STORAGE_KEY = 'pensumData';

export function savePensumToLocalStorage(pensum: Pensum.Pensum | null) {
  if (!pensum) {
    localStorage.removeItem(PENSUM_STORAGE_KEY);
    return;
  }

  var save = pensumToSavePensum(pensum);
  localStorage.setItem(PENSUM_STORAGE_KEY, JSON.stringify(save));
}

export function loadPensumFromLocalStorage(): Pensum.Pensum | null {
  const pensumData = localStorage.getItem(PENSUM_STORAGE_KEY);

  if (!pensumData) return null; // Could not fetch

  // Parse fetched data
  // TODO: CHECK IF DATA IS VALID
  const pensum = JSON.parse(pensumData) as Pensum.Save.Pensum;
  const loadedPensum = validatePensum(pensum, pensum.institution);
  return loadedPensum;
}


export function activePensumReducer(
  state: ActivePensum.Payload,
  action: ActivePensum.Action): ActivePensum.Payload {
  switch (action.type) {
    case 'clear':
      // savePensumToLocalStorage(null); // Dont clear save!
      return null;

    case 'set':
      savePensumToLocalStorage(action.payload);
      return action.payload;

    case 'load/fromSave':
      return loadPensumFromLocalStorage();

    // Case for 'load' is handled on the Provider, since its async!

    default:
      console.error('Unknown action "' + action.type + '".');
      return state;
  }
}