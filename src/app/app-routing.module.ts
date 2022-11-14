import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {AnalyticsComponent} from "./modules/analytics/analytics.component";
import {BrowseComponent} from "./modules/browse/browse.component";
import {ProfilesComponent} from "./modules/profiles/profiles.component";
import {ArchivesComponent} from "./modules/archives/archives.component";

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo:'home' },
  {path:'home', component:HomeComponent},
  {path:'analytics', component:AnalyticsComponent},
  {path:'browse', component:BrowseComponent},
  {path:'profiles', component:ProfilesComponent},
  {path:'messaging', loadChildren: ()=> import('./modules/messaging/messaging.module').then(m=>m.MessagingModule)},
  {path:'archives', component:ArchivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
