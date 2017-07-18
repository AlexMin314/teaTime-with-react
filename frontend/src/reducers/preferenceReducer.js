import { setPreferences, getPreferences } from '../API/preferenceAPI';

const initialPreferences = getPreferences();

const preferences = (state = initialPreferences, action) =>{

  switch (action.type) {
    case 'ADD_PREFERENCE':
      return [
        ...state,
        action.preference
      ]
      break;

    case 'DELETE_PREFERENCE':
      return state.filter((preference) => {
        return (preference != action.preference)
      })
      break;

    default:
      return state

  }
}

export default preferences;
