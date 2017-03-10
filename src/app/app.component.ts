import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  private pageTitle: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    //handle on resize event
    window.onresize = function () {
      if (window.innerWidth > 480) {
        document.getElementById('navi-app').classList.add('expand');
      }
    }
    if (window.innerWidth > 480) {
      document.getElementById('navi-app').classList.add('expand');
    }

    //handle pageDependecies
    let url: string = window.location.pathname;
    switch(url) {
      case "/innerwise":
        this.pageTitle = "innerwise®";
        break;
      case "/psychosomatische_energetik":
        this.pageTitle = "PSE (Psychosomatische Energetik)";
        break;
      case "/gesprächspsychotherapie":
        this.pageTitle = "Gesprächspsychotherapie";
        break;
      case "/gespr%C3%A4chspsychotherapie":
        this.pageTitle = "Gesprächspsychotherapie";
        break;
      case "/ohr-und-körperkerzentherapie":
        this.pageTitle = "Ohr- und Körperkerzentherapie";
        break;
      case "/ohr-und-k%C3%B6rperkerzentherapie":
        this.pageTitle = "Ohr- und Körperkerzentherapie";
        break;
      case "/persönlichkeitstraining":
        this.pageTitle = "PT Persönlichkeitstraining";
        break;
      case "/pers%C3%B6nlichkeitstraining":
        this.pageTitle = "PT Persönlichkeitstraining";
        break;
      case "/energetische_wirbelsäulenaufrichtung":
        this.pageTitle = "Energetische Wirbelsäulenaufrichtung";
        break;
      case "/energetische_wirbels%C3%A4ulenaufrichtung":
        this.pageTitle = "Energetische Wirbelsäulenaufrichtung";
        break;
      case "/vibrationstraining":
        this.pageTitle = "Vibrationstraining";
        break;
      case "/kosten":
        this.pageTitle = "Kosten und Gebühren";
        break;
      case "/kontakt":
        this.pageTitle = "Kontakt";
        break;
      case "/gästebuch":
        this.pageTitle = "Gästebuch";
        break;
      case "/g%C3%A4stebuch":
        this.pageTitle = "Gästebuch";
        break;
      case "/aktuelles":
        this.pageTitle = "Aktuelles";
        break;
      case "/links":
        this.pageTitle = "Links";
        break;
      case "/impressum":
        this.pageTitle = "Impressum";
        break;
      default:
        this.pageTitle = "Heilpraxis Daniela Hale";
    }
    this.updatePageDependencies(this.pageTitle);
  }

  private toggleAppNavi(): void {
    if (window.innerWidth < 480) {
      document.getElementById('navi-app').classList.toggle('expand');
      document.getElementById('navi-open-icon').classList.toggle('opaque');
      document.getElementById('navi-close-icon').classList.toggle('opaque');
    }
  }

  private updatePageDependencies(title: string): void  {
    this.pageTitle = title;
    let maincolor: string = "";
    let accentcolor: string = "";
    let naviElementId: string = "";
    switch (title) {
      case "Heilpraxis Daniela Hale":
        maincolor = "#0052cc";
        accentcolor = "#cc7a00";
        naviElementId = "home";
        break;
      case "innerwise®":
        maincolor = "#864a66";
        accentcolor = "#cc7a00";
        naviElementId = "innerwise";
        break;
      case "PSE (Psychosomatische Energetik)":
        maincolor = "#4e1f93";
        accentcolor = "#51654e";
        naviElementId = "pse";
        break;
      case "Gesprächspsychotherapie":
        maincolor = "#ff4d4d";
        accentcolor = "#d9a05a";
        naviElementId = "gwg";
        break;
      case "Ohr- und Körperkerzentherapie":
        maincolor = "#ff8000";
        accentcolor = "#d46866";
        naviElementId = "oukk";
        break;
      case "PT Persönlichkeitstraining":
        maincolor = "#4d004d";
        accentcolor = "#764400";
        naviElementId = "pt";
        break;
      case "Energetische Wirbelsäulenaufrichtung":
        maincolor = "#990099";
        accentcolor = "#d20042";
        naviElementId = "ew";
        break;
      case "Vibrationstraining":
        maincolor = "#89172a";
        accentcolor = "#4a5987";
        naviElementId = "vib";
        break;
      case "Kosten und Gebühren":
        maincolor = "#ff4d4d";
        accentcolor = "#87c5a6";
        naviElementId = "kosten";
        break;
      case "Kontakt":
        maincolor = "#3f51b5";
        accentcolor = "#009688";
        naviElementId = "kontakt";
        break;
      case "Gästebuch":
        maincolor = "#214F6E";
        accentcolor = "#8B938B";
        naviElementId = "gb";
        break;
      case "Aktuelles":
        maincolor = "#aa66cc";
        accentcolor = "#4a5987";
        naviElementId = "aktuell";
        break;
      case "Links":
        maincolor = "#864a66";
        accentcolor = "#330000";
        naviElementId = "links";
        break;
      case "Impressum":
        maincolor = "#905809";
        accentcolor = "#f6be6f";
        naviElementId = "impressum";
        break;
      default:
        maincolor = "#905809";
        accentcolor = "#f6be6f";
    }

    //set font color of app elements
    let elements: any = document.querySelectorAll(".dynamic-maincolor");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = maincolor;
    }
    elements = document.querySelectorAll(".dynamic-accentcolor");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = accentcolor;
    }

    //set current navi element active
    let activeElement: HTMLElement = document.getElementById(naviElementId);
    if (activeElement != null) {
      activeElement.style.color = accentcolor;
    }
  }

  private getMyEmail(): string {
    let firstPart: string = "natur-heilen";
    let domain: string = "web.de";
    return firstPart + "@" + domain;
  }

  private routeTo(relativeUrl: string): void {
    this.router.navigate([relativeUrl]);
  }
}
