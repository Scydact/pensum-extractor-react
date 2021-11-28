import { validatePensum } from "functions/pensum-converter";
import pensumToSavePensum from "functions/pensum-save";
import processPensumMats from "functions/pensum-get-extras";

const PENSUM_STORAGE_KEY = process.env.REACT_APP_PENSUM_STORAGE_PENSUM_KEY || 'pensumData';

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


export function createPayload(pensum: ActivePensum.Payload['pensum']): ActivePensum.Payload {
  return {
    pensum, 
    matData: processPensumMats(pensum),
    error: null,
    loading: false,
  }
}

export function activePensumReducer(
  state: ActivePensum.Payload,
  action: ActivePensum.Action): ActivePensum.Payload {
  switch (action.type) {
    case 'clear':
      // savePensumToLocalStorage(null); // Dont clear save!
      return createPayload(null);

    case 'set':
      savePensumToLocalStorage(action.payload);
      return createPayload(action.payload);

    case 'load/fromSave':
      var pensum = loadPensumFromLocalStorage();
      return createPayload(pensum);

    // Case for 'load' is handled on the Provider, since its async!

    case 'error':
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case 'loading':
      return {
        ...state,
        loading: true,
      }

    default:
      console.error('Unknown action "' + action.type + '".');
      return state;
  }
}