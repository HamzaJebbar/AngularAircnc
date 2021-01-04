import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Appartement } from "../appartement"

@Injectable({
	providedIn: "root"
})
export class AppartementService {
	private url = "http://localhost:8080/appartement_fav"
	private url2 = "http://localhost:8080/getApts"
	constructor(private http: HttpClient) {}

	getAppartements(): Observable<Appartement[]> {
		return this.http.get<Appartement[]>(this.url2,{headers: new HttpHeaders({"Content-Type": "application/json"})})
	}

	addAppartement(appartement: Appartement): Observable<Appartement> {
		this.url = "http://localhost:8080/addApt"
		return this.http.post<any>(this.url, appartement, {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			})
		})
	}

	deleteAppartement(appartement: Appartement) {
		this.url = "http://localhost:8080/delApt/"+appartement.id_Appartement
		return this.http.delete(this.url)
	}

	getAppartement(id_Appartement: number): Observable<Appartement> {
		this.url = "http://localhost:8080/getApt/" + id_Appartement

		return this.http.get<Appartement>(this.url)
	}

	updateAppartement(appartement: Appartement): Observable<Appartement> {
		this.url = "http://localhost:8080/updateApt/" + appartement.id_Appartement

		return this.http.put<Appartement>(this.url, appartement, {
			headers: new HttpHeaders({ "Content-Type": "application/json" })
		})
	}
}
