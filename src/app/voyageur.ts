import { Appartement } from "./appartement"
export interface Voyageur {
	id_voy: number
	age: number
	nom: string
	prenom: string
	sexe: string
	appartement_fav: Appartement[]
	appartement_loue: Appartement[]
}
