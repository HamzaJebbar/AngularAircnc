import { Component, OnInit } from '@angular/core';
import { Appartement } from 'src/app/appartement';
import { ActivatedRoute } from "@angular/router"
import { HoteService } from "src/app/services/hote.service"
import { AppartementService } from "src/app/services/appartement.service"
import { VoyageurService } from "src/app/services/voyageur.service"
import { Voyageur } from "../../voyageur"
import { Location } from "@angular/common"
import { Router } from "@angular/router"
@Component({
  selector: 'app-profil-hote',
  templateUrl: './profil-hote.component.html',
  styleUrls: ['./profil-hote.component.css']
})
export class ProfilHoteComponent implements OnInit {
  public hote;
  constructor(	
    private route: ActivatedRoute,
		private hoteService: HoteService,
		private appartementService: AppartementService,
		private voyageurService: VoyageurService,
		private location: Location,
		private router: Router) { }

  ngOnInit(): void {
    this.getHote()
  }

  getHote(): void {
		const id = +this.route.snapshot.paramMap.get("id")
		console.log("id", id)

		this.hoteService.getHote(id).subscribe((hote) => {
			console.log(hote)
			this.hote = hote
		})
  }
  
  
	update_hote(): void {
		this.hoteService.updateHote(this.hote).subscribe((hote) => {
			this.hote = hote
			console.log(hote)
			this.router.navigate(["/hotes"])
		})
	}
	deleteApt(appartement: Appartement): void{
	    this.hote.appartements = this.hote.appartements.filter(a=> a.id_Appartement!==appartement.id_Appartement)
	    this.hote.appartement_fav = this.hote.appartement_fav.filter(a=> a.id_Appartement!==appartement.id_Appartement)
	    this.hote.appartement_loue = this.hote.appartement_loue.filter(a=> a.id_Appartement!==appartement.id_Appartement)
	    this.appartementService.deleteAppartement(appartement).subscribe();
	}
    aptFav(appartement: Appartement){
        appartement.voyageur = this.hote
        this.hote.appartement_fav = this.hote.appartement_fav.filter(a=> a.id_Appartement!==appartement.id_Appartement)
        this.voyageurService.aptFav(appartement).subscribe();
    }
    rentApt(appartement: Appartement){
        appartement.voyageur = this.hote
        this.hote.appartement_loue = this.hote.appartement_loue.filter(a=> a.id_Appartement!==appartement.id_Appartement)
        this.voyageurService.rentApt(appartement).subscribe();
    }
}






	


