import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Hote } from "../hote"

@Injectable({
	providedIn: "root"
})
export class HoteService {
	private url = "http://localhost:8080/hotes"
	private url2 = "http://localhost:8080/getHotes"
	constructor(private http: HttpClient) {}

	getHotes(): Observable<Hote[]> {
		return this.http.get<Hote[]>(this.url2,{headers: new HttpHeaders({"Content-Type": "application/json"})})
	}

	addHote(hote: Hote): Observable<Hote> {
        this.url="http://localhost:8080/addHote"
		return this.http.post<any>(this.url, hote, {
			headers: new HttpHeaders({
				"Content-Type": "application/json"
			})
		})
	}

    

	deleteHote(hote: Hote) {
		this.url = "http://localhost:8080/delHote/"+hote.id_voy
		return this.http.delete(this.url)
	}

	getHote(id_hote: number): Observable<Hote> {
		this.url = "http://localhost:8080/getHote/" + id_hote

		return this.http.get<Hote>(this.url)
	}

}
