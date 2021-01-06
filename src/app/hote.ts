import { Voyageur } from "./voyageur";
import { Appartement } from "./appartement";

export interface Hote extends Voyageur {
	appartements: Appartement[]
}
