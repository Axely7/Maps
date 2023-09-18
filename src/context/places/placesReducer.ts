import { PlacesState } from './PlacesProvider';

type PlacesAction = {type: 'setUsetLocation', payload: [number, number]};

export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {
    switch (action.type) {
        case 'setUsetLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
            
    
        default:
            return state;
    }
    
}