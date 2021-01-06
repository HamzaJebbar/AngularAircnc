import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Voyageur } from "../voyageur"
import { Appartement } from "../appartement"

@Injectable({
	providedIn: "root"
})
export class VoyageurService {
	private url = "http://localhost:8080/voyageurs"
	private url2 = "http://localhost:8080/getVoys"
	constructor(private http: HttpClient) {}

	getVoyageurs(): Observable<Voyageur[]> {
		return this.http.get<Voyageur[]>(this.url2,{headers: new HttpHeaders({"Content-Type": "application/json"})})
	}

	addVoyageur(voyageur: Voyageur): Observable<Voyageur> {
		return this.http.post<any>("http://localhost:8080/addVoy", voyageur, {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			})
		})
	}

	deleteVoyageur(voyageur: Voyageur) {
		this.url = "http://localhost:8080/delVoy/"+voyageur.id_voy
		return this.http.delete(this.url)
	}

	getVoyageur(id: number): Observable<Voyageur> {
		this.url = "http://localhost:8080/getVoy/" + id

		return this.http.get<Voyageur>(this.url)
	}

	updateVoyageur(voyageur: Voyageur): Observable<Voyageur> {
		const url = "http://localhost:8080/updateVoy/" + voyageur.id_voy

		return this.http.put<Voyageur>(url, voyageur, {
			headers: new HttpHeaders({ "Content-Type": "application/json" })
		})
	}
	aptFav(appartement: Appartement): Observable<Voyageur>{
	    console.log(appartement)
	    console.log(appartement.voyageur)
	    const url = "http://localhost:8080/aptFav/" + appartement.voyageur.id_voy
	    return this.http.put<Voyageur>(url,appartement,{
            headers: new HttpHeaders({ "Content-Type": "application/json" })
        })
	}
	rentApt(appartement: Appartement): Observable<Voyageur>{
        const url = "http://localhost:8080/rentApt/" + appartement.voyageur.id_voy
        return this.http.put<Voyageur>(url,appartement,{
            headers: new HttpHeaders({ "Content-Type": "application/json" })
        })

    }
}
