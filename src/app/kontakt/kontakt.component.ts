import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.sass']
})
export class KontaktComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private getMyEmail(): string {
    let firstPart: string = "natur-heilen";
    let domain: string = "web.de";
    return firstPart + "@" + domain;
  }

}
