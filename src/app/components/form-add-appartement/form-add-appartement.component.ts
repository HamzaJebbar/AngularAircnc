import { Component, OnInit,EventEmitter,Output } from '@angular/core'
import { Appartement } from "src/app/appartement"
@Component({
  selector: 'app-form-add-appartement',
  templateUrl: './form-add-appartement.component.html',
  styleUrls: ['./form-add-appartement.component.css']
})
export class FormAddAppartementComponent implements OnInit {

  public appartement: Appartement= {
  id_Appartement:0,
	adresse : "",
	nbr_chambres:0,
	nbr_salle_bains:0,
	prix_nuit:0,
	reserve:false,
	nbrPersonne_max:0
  }

  @Output()
  addAppartement: EventEmitter<Appartement> = new EventEmitter<Appartement>()
  constructor() { }

  ngOnInit(): void {
  }

	add_app() {
		console.log(this.appartement)
		this.addAppartement.emit(this.appartement)
	}
}



	


