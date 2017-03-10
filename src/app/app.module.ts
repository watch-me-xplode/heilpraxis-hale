import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { InnerwiseComponent } from './innerwise/innerwise.component';
import { PseComponent } from './pse/pse.component';
import { GesprächspsychotherapieComponent } from './gesprächspsychotherapie/gesprächspsychotherapie.component';
import { OhrUndKörperkerzentherapieComponent } from './ohr-und-körperkerzentherapie/ohr-und-körperkerzentherapie.component';
import { PersönlichkeitstrainingComponent } from './persönlichkeitstraining/persönlichkeitstraining.component';
import { EnergetischeWirbelsäulenaufrichtungComponent } from './energetische-wirbelsäulenaufrichtung/energetische-wirbelsäulenaufrichtung.component';
import { VibrationstrainingComponent } from './vibrationstraining/vibrationstraining.component';
import { KostenComponent } from './kosten/kosten.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { GästebuchComponent } from './gästebuch/gästebuch.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import { LinksComponent } from './links/links.component';
import { AktuellesAddEntryComponent } from './aktuelles-add-entry/aktuelles-add-entry.component';

import { KostenManager } from "./shared/services/kosten.manager.service";
import { GuestbookService } from "./shared/services/guestbook.service";
import { NewsService } from "./shared/services/news.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImpressumComponent,
    ImpressumComponent,
    InnerwiseComponent,
    PseComponent,
    GesprächspsychotherapieComponent,
    OhrUndKörperkerzentherapieComponent,
    PersönlichkeitstrainingComponent,
    EnergetischeWirbelsäulenaufrichtungComponent,
    VibrationstrainingComponent,
    KostenComponent,
    KontaktComponent,
    GästebuchComponent,
    AktuellesComponent,
    LinksComponent,
    AktuellesAddEntryComponent
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
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
