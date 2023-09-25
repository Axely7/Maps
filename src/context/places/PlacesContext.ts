import { createContext } from "react";
import { Feature } from "../../interfaces/places";


export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [number, number];
    searchPlacesByTerm: (query: string) => Promise<Feature[]>
}



export const PlacesContext = createContext({} as PlacesContextProps);