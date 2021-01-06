import { Hote } from "./hote"
import { Voyageur } from "./voyageur"
export interface Appartement {
    id_Appartement:number
	adresse : string
	nbr_chambres:number
	nbr_salle_bains:number
	prix_nuit:number
	reserve:boolean
	nbrPersonne_max:number
	hote: Hote
	voyageur: Voyageur
}
