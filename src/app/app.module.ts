import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { EgitmenComponent } from './components/egitmen/egitmen.component';
import { SearchComponent } from './components/search/search.component';
import { KurslarimComponent } from './pages/kurslarim/kurslarim.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TumKurslarComponent } from './pages/tum-kurslar/tum-kurslar.component';
import { KampaHazirlikComponent } from './pages/kampa-hazirlik/kampa-hazirlik.component';
import { SorularComponent } from './pages/sorular/sorular.component';
import { CourseCartComponent } from './components/course-cart/course-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    KategoriComponent,
    EgitmenComponent,
    SearchComponent,
    KurslarimComponent,
    HomepageComponent,
    TumKurslarComponent,
    KampaHazirlikComponent,
    SorularComponent,
    CourseCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
