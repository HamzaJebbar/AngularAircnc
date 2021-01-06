import { Component, OnInit,EventEmitter,Output } from '@angular/core'
import { Appartement } from "src/app/appartement"
import { HoteService } from "src/app/services/hote.service";
import { Hote } from "src/app/hote"
import { Voyageur } from "src/app/voyageur"

@Component({
  selector: 'app-form-add-appartement',
  templateUrl: './form-add-appartement.component.html',
  styleUrls: ['./form-add-appartement.component.css']
})
export class FormAddAppartementComponent implements OnInit {
    public listHotes: Hote[] = []
  public appartement: Appartement= {
  id_Appartement:0,
	adresse : "",
	nbr_chambres:0,
	nbr_salle_bains:0,
	prix_nuit:0,
	reserve:false,
	nbrPersonne_max:0,
	hote: null,
	voyageur: null
  }

  @Output()
  addAppartement: EventEmitter<Appartement> = new EventEmitter<Appartement>()
  constructor(private hoteService: HoteService) { }

  ngOnInit(): void {
  this.hoteService.getHotes().subscribe((data) => (this.listHotes = data))
  }

	add_app() {
		this.addAppartement.emit(this.appartement)
	}
}



	


