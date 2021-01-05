import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router"
import { HoteService } from "src/app/services/hote.service"
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
}






	


