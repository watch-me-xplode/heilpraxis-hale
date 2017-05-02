import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.sass']
})
export class QuickLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private getMyEmail(): string {
    const firstPart = 'info';
    const domain = 'idee-und-idyll.de';
    return firstPart + '@' + domain;
  }

}
