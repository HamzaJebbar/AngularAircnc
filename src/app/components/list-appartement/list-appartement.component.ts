import { Component, OnInit } from '@angular/core';
import { Appartement } from 'src/app/appartement';
import { AppartementService } from "src/app/services/appartement.service"
@Component({
  selector: 'app-list-appartement',
  templateUrl: './list-appartement.component.html',
  styleUrls: ['./list-appartement.component.css']
})
export class ListAppartementComponent implements OnInit {
  public listAppartements: Appartement[] = []
  constructor(private appartementService :AppartementService) { }

  ngOnInit(): void {

    this.appartementService.getAppartements().subscribe((data) =>(this.listAppartements=data))  }

    add(appartement: Appartement): void {
      this.listAppartements.push(appartement)
      this.appartementService.addAppartement(appartement).subscribe()

    }

    deleteAppartement(appartement:Appartement) : void{

      this.listAppartements = this.listAppartements.filter(a => a.id_Appartement !== appartement.id_Appartement);
      this.appartementService.deleteAppartement(appartement).subscribe();
    }
  

}

  




	



