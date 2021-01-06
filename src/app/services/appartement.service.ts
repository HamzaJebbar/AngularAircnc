import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Appartement } from "../appartement"

@Injectable({
	providedIn: "root"
})
export class AppartementService {

  	constructor(private http: HttpClient) {}

	getAppartements(): Observable<Appartement[]> {
	    const url = "http://localhost:8080/getApts"
		return this.http.get<Appartement[]>(url,{headers: new HttpHeaders({"Content-Type": "application/json"})})
	}

	addAppartement(appartement: Appartement): Observable<Appartement> {
		const url = "http://localhost:8080/addApt/"+appartement.hote.id_voy
		 return this.http.post<Appartement>(url, appartement, {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			})
		})

	}

	deleteAppartement(appartement: Appartement) {
		const url = "http://localhost:8080/delApt/"+appartement.id_Appartement
		return this.http.delete(url)
	}

	getAppartement(id_Appartement: number): Observable<Appartement> {
		const url = "http://localhost:8080/getApt/" + id_Appartement

		return this.http.get<Appartement>(url)
	}

	updateAppartement(appartement: Appartement): Observable<Appartement> {
		const url = "http://localhost:8080/updateApt/" + appartement.id_Appartement

		return this.http.put<Appartement>(url, appartement, {
			headers: new HttpHeaders({ "Content-Type": "application/json" })
		})
	}
}
