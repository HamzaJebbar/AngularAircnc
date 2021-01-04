import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Hote } from "src/app/hote";
@Component({
  selector: 'app-form-add-hote',
  templateUrl: './form-add-hote.component.html',
  styleUrls: ['./form-add-hote.component.css']
})
export class FormAddHoteComponent implements OnInit {

  public hote: Hote= {
		id_voy: 0,
		nom: "",
		prenom: "",
		age: 0,
		sexe: ""
  }
  
  @Output()
	addHote: EventEmitter<Hote> = new EventEmitter<Hote>()

  constructor() { }

  ngOnInit(): void {
  }

  add_hote() {
		console.log(this.hote)
		this.addHote.emit(this.hote)
	}

}





