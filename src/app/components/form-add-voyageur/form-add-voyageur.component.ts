import { Component, OnInit, EventEmitter, Output } from "@angular/core"
import { Voyageur } from "src/app/voyageur"

@Component({
	selector: "app-form-add-voyageur",
	templateUrl: "./form-add-voyageur.component.html",
	styleUrls: ["./form-add-voyageur.component.css"]
})
export class FormAddVoyageurComponent implements OnInit {
	public voyageur: Voyageur = {
		id_voy: 0,
		nom: "",
		prenom: "",
		age: 0,
		sexe: ""
	}

	@Output()
	addVoyageur: EventEmitter<Voyageur> = new EventEmitter<Voyageur>()

	constructor() {}

	ngOnInit(): void {}

	add() {
		console.log(this.voyageur)
		this.addVoyageur.emit(this.voyageur)
	}
}
