import { Component, OnInit,Input } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { VoyageurService } from "src/app/services/voyageur.service"
import { Location } from "@angular/common"
import { Router } from "@angular/router"
import { Appartement } from "../../appartement"
import { Voyageur } from "../../voyageur"
@Component({
	selector: "app-profil-voyageur",
	templateUrl: "./profil-voyageur.component.html",
	styleUrls: ["./profil-voyageur.component.css"]
})
export class ProfilVoyageurComponent implements OnInit {
	@Input() voyageur:Voyageur

	constructor(
		private route: ActivatedRoute,
		private voyageurService: VoyageurService,
		private location: Location,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getVoyageur()
	}

	getVoyageur(): void {
		const id = +this.route.snapshot.paramMap.get("id")

		this.voyageurService.getVoyageur(id).subscribe((voyageur) => {
			this.voyageur = voyageur
		})
	}

	update(): void {
		this.voyageurService.updateVoyageur(this.voyageur).subscribe((voyageur) => {
			this.voyageur = voyageur
			this.router.navigate(["/voyageurs"])
		})
	}
	aptFav(appartement: Appartement){
	    this.voyageur.appartement_fav = this.voyageur.appartement_fav.filter(a=> a.id_Appartement!==appartement.id_Appartement)
	    this.voyageurService.aptFav(appartement).subscribe();
	}
	rentApt(appartement: Appartement){
	}

}
