import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { ListVoyageurComponent } from "./components/list-voyageur/list-voyageur.component"
import { ProfilVoyageurComponent } from "./components/profil-voyageur/profil-voyageur.component"
import { AboutComponent } from "./components/about/about.component"
import { HeaderComponent } from "./components/header/header.component"
import { FormAddVoyageurComponent } from "./components/form-add-voyageur/form-add-voyageur.component";
//import { FormAddAppartementComponent } from './components/form-add-appartement/form-add-appartement.component';
//import { ListAppartementComponent } from './components/list-appartement/list-appartement.component';

@NgModule({
	declarations: [
		AppComponent,
		ListVoyageurComponent,
		ProfilVoyageurComponent,
		AboutComponent,
		HeaderComponent,
		FormAddVoyageurComponent
	//	FormAddAppartementComponent,
	//	ListAppartementComponent
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],

	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
