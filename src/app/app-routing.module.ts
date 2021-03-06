import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { AboutComponent } from "./components/about/about.component"
import { ListVoyageurComponent } from "./components/list-voyageur/list-voyageur.component"
import { ProfilVoyageurComponent } from "./components/profil-voyageur/profil-voyageur.component"
import { ListAppartementComponent } from "./components/list-appartement/list-appartement.component"



import { ListHoteComponent } from "./components/list-hote/list-hote.component"
import { ProfilHoteComponent } from './components/profil-hote/profil-hote.component';
import { from } from "rxjs"

const routes: Routes = [
	{ path: "voyageurs", component: ListVoyageurComponent },
	{ path: "voyageurs/:id", component: ProfilVoyageurComponent },
	{ path: "hotes/:id", component: ProfilHoteComponent },
	{ path: "appartements", component: ListAppartementComponent },

	{ path: "hotes", component: ListHoteComponent },
	{ path: "about", component: AboutComponent },
	{ path: "", redirectTo: "/voyageurs", pathMatch: "full" }


]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
