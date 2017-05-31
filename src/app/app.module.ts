import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { KostenManager } from './shared/services/kosten.manager.service';
import { GuestbookService } from './shared/services/guestbook.service';
import { NewsService } from './shared/services/news.service';
import { VisitsService } from './shared/services/visits.service';

import { SwiperService } from './swiper/swiper.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import { AktuellesAddEntryComponent } from './aktuelles-add-entry/aktuelles-add-entry.component';
import { EnergetischeWirbelsäulenaufrichtungComponent } from './energetische-wirbelsäulenaufrichtung/energetische-wirbelsäulenaufrichtung.component';
import { GästebuchComponent } from './gästebuch/gästebuch.component';
import { GesprächspsychotherapieComponent } from './gesprächspsychotherapie/gesprächspsychotherapie.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { InnerwiseComponent } from './innerwise/innerwise.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KostenComponent } from './kosten/kosten.component';
import { LinksComponent } from './links/links.component';
import { OhrUndKörperkerzentherapieComponent } from './ohr-und-körperkerzentherapie/ohr-und-körperkerzentherapie.component';
import { PersönlichkeitstrainingComponent } from './persönlichkeitstraining/persönlichkeitstraining.component';
import { PseComponent } from './pse/pse.component';
import { VibrationstrainingComponent } from './vibrationstraining/vibrationstraining.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { SwiperComponent } from './swiper/swiper.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AktuellesComponent,
    AktuellesAddEntryComponent,
    EnergetischeWirbelsäulenaufrichtungComponent,
    GästebuchComponent,
    GesprächspsychotherapieComponent,
    HomeComponent,
    ImpressumComponent,
    InnerwiseComponent,
    KontaktComponent,
    KostenComponent,
    LinksComponent,
    OhrUndKörperkerzentherapieComponent,
    PersönlichkeitstrainingComponent,
    PseComponent,
    VibrationstrainingComponent,
    QuickLinksComponent,
    SwiperComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    KostenManager,
    GuestbookService,
    NewsService,
    VisitsService,
    SwiperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
