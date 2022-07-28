import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { KampaHazirlikComponent } from './pages/kampa-hazirlik/kampa-hazirlik.component';
import { KurslarimComponent } from './pages/kurslarim/kurslarim.component';
import { SorularComponent } from './pages/sorular/sorular.component';
import { TumKurslarComponent } from './pages/tum-kurslar/tum-kurslar.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'kurslarim', component:KurslarimComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'tum-kurslar', component:TumKurslarComponent},
  {path:'kampa-hazirlik', component:KampaHazirlikComponent},
  {path:'sorular', component:SorularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
