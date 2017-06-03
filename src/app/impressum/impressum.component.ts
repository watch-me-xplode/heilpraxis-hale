import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.sass']
})
export class ImpressumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private getMyEmail(): string {
    const firstPart = 'natur-heilen';
    const domain = 'web.de';
    return firstPart + '@' + domain;
  }

  private getDeveloperEmail(): string {
    const firstPart = 'webdesign';
    const domain = 'nikolai-wohlgemuth.de';
    return firstPart + '@' + domain;
  }

}
