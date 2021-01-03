import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { VoyageurService } from "src/app/services/voyageur.service"
import { Location } from "@angular/common"
import { Router } from "@angular/router"
@Component({
	selector: "app-profil-voyageur",
	templateUrl: "./profil-voyageur.component.html",
	styleUrls: ["./profil-voyageur.component.css"]
})
export class ProfilVoyageurComponent implements OnInit {
	public voyageur = undefined

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
		console.log("id", id)

		this.voyageurService.getVoyageur(id).subscribe((voyageur) => {
			console.log(voyageur)
			this.voyageur = voyageur
		})
	}

	update(): void {
		this.voyageurService.updateVoyageur(this.voyageur).subscribe((voyageur) => {
			this.voyageur = voyageur
			console.log(voyageur)
			this.router.navigate(["/voyageurs"])
		})
	}
}
