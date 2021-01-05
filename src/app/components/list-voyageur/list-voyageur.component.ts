import { Component, OnInit } from "@angular/core"
import { VoyageurService } from "src/app/services/voyageur.service"
import { Voyageur } from "src/app/voyageur"

@Component({
	selector: "app-list-voyageur",
	templateUrl: "./list-voyageur.component.html",
	styleUrls: ["./list-voyageur.component.css"]
})
export class ListVoyageurComponent implements OnInit {
	public listVoyageurs: Voyageur[] = []

	constructor(private voyageurService: VoyageurService) {}

	ngOnInit(): void {
		this.voyageurService.getVoyageurs().subscribe((data) => (this.listVoyageurs = data))
	}

	add(voyageur: Voyageur): void {

		this.voyageurService
			.addVoyageur(voyageur)
			.subscribe((data) => this.listVoyageurs.push(data))
		console.log(voyageur.appartement_fav)
	}

	deleteVoyageur(voyageur: Voyageur): void {
	    this.listVoyageurs = this.listVoyageurs.filter(v => v.id_voy !== voyageur.id_voy);
		this.voyageurService.deleteVoyageur(voyageur).subscribe();

	}
}
