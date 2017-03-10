import { Component, OnInit } from '@angular/core';

import { KostenManager } from "../shared/services/kosten.manager.service";

import { Kosten } from "../shared/models/kosten.model";

@Component({
  selector: 'app-kosten',
  templateUrl: './kosten.component.html',
  styleUrls: ['./kosten.component.sass']
})
export class KostenComponent implements OnInit {

  private models: Kosten[];

  constructor(private manager: KostenManager) { }

  ngOnInit() {
    this.models = this.manager.getModels();
  }

}
