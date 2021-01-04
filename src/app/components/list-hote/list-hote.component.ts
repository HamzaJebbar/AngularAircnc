import { Component, OnInit } from '@angular/core';
import { HoteService } from "src/app/services/hote.service";
import { Hote } from "src/app/hote"

@Component({
  selector: 'app-list-hote',
  templateUrl: './list-hote.component.html',
  styleUrls: ['./list-hote.component.css']
})

export class ListHoteComponent implements OnInit {
  public listHotes: Hote[] = []
  constructor(private hoteService: HoteService) { }

  ngOnInit(): void {

    this.hoteService.getHotes().subscribe((data) => (this.listHotes = data))
  }

  addHote(hote: Hote): void {
    this.listHotes.push(hote)
		this.hoteService.addHote(hote).subscribe()
	}

  deleteHote(hote: Hote): void {
    this.listHotes = this.listHotes.filter(v => v.id_voy !== hote.id_voy);
    this.hoteService.deleteHote(hote).subscribe();

}
}


	

	



	

