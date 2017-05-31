import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
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
import { ImpressumComponent } from './impressum/impressum.component';
import { AktuellesAddEntryComponent } from './aktuelles-add-entry/aktuelles-add-entry.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: 'innerwise',
    component: InnerwiseComponent,
    children: []
  },
  {
    path: 'psychosomatische_energetik',
    component: PseComponent,
    children: []
  },
  {
    path: 'gesprächspsychotherapie',
    component: GesprächspsychotherapieComponent,
    children: []
  },
  {
    path: 'ohr-und-körperkerzentherapie',
    component: OhrUndKörperkerzentherapieComponent,
    children: []
  },
  {
    path: 'persönlichkeitstraining',
    component: PersönlichkeitstrainingComponent,
    children: []
  },
  {
    path: 'energetische_wirbelsäulenaufrichtung',
    component: EnergetischeWirbelsäulenaufrichtungComponent,
    children: []
  },
  {
    path: 'vibrationstraining',
    component: VibrationstrainingComponent,
    children: []
  },
  {
    path: 'kosten',
    component: KostenComponent,
    children: []
  },
  {
    path: 'kontakt',
    component: KontaktComponent,
    children: []
  },
  {
    path: 'gästebuch',
    component: GästebuchComponent,
    children: []
  },
  {
    path: 'aktuelles',
    component: AktuellesComponent,
    children: []
  },
  {
    path: 'links',
    component: LinksComponent,
    children: []
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
    children: []
  },
  {
    path: 'add-news-entry',
    component: AktuellesAddEntryComponent,
    children: []
  },
  {
    path: 'show-counter',
    component: AdminComponent,
    children: []
  },
  {
    path: '**',
    component: HomeComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
