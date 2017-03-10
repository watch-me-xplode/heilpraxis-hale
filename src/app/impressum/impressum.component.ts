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
    let firstPart: string = "natur-heilen";
    let domain: string = "web.de";
    return firstPart + "@" + domain;
  }

  private getDeveloperEmail(): string {
    let firstPart: string = "niko";
    let domain: string = "watch-me-xplode.de";
    return firstPart + "@" + domain;
  }

}
