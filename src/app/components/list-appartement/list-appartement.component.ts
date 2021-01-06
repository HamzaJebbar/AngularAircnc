import { Component, OnInit } from '@angular/core';
import { Appartement } from 'src/app/appartement';
import { AppartementService } from "src/app/services/appartement.service";
import { Voyageur } from 'src/app/voyageur';
import { VoyageurService } from "src/app/services/voyageur.service"

@Component({
  selector: 'app-list-appartement',
  templateUrl: './list-appartement.component.html',
  styleUrls: ['./list-appartement.component.css']
})
export class ListAppartementComponent implements OnInit {
  public listAppartements: Appartement[] = []
  public listVoyageurs: Voyageur[] = []
  constructor(private appartementService :AppartementService,private voyageurService :VoyageurService) { }

  ngOnInit(): void {

    this.appartementService.getAppartements().subscribe((data) =>(this.listAppartements=data))
    this.voyageurService.getVoyageurs().subscribe((data) =>(this.listVoyageurs=data))

    }

    add(appartement: Appartement): void {

      this.appartementService.addAppartement(appartement).subscribe((data)=>(this.listAppartements.push(appartement)))

    }

    deleteAppartement(appartement:Appartement) : void{

      this.listAppartements = this.listAppartements.filter(a => a.id_Appartement !== appartement.id_Appartement);
      this.appartementService.deleteAppartement(appartement).subscribe();
    }
    aptFav(appartement:Appartement):void{
        if(appartement.voyageur){
            this.voyageurService.aptFav(appartement).subscribe((data)=>alert("action effectuee avec succes"))
        } else {
            alert("veuiller choisir un voyageur")
        }
    }
    rentApt(appartement:Appartement):void{
        this.voyageurService.rentApt(appartement).subscribe((data)=>alert("action effectuee avec succes"))
    }
  

}

  




	



