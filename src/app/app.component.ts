import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VisitsService } from './shared/services/visits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  private pageTitle = '';

  constructor(private router: Router, private visitsService: VisitsService) { }

  ngOnInit() {
    window.onresize = () => {
      if (window.innerWidth > 480) {
        document.getElementById('navi-app').classList.add('expand');
      }
      this.resizeSwiperHeight();
    };
    if (window.innerWidth > 480) {
      document.getElementById('navi-app').classList.add('expand');
    }
    this.pageTitle = this.getPageTitleFromUrl(window.location.href);
    this.updatePageDependencies(this.pageTitle);
    this.visitsService.addVisit();
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
    let maincolor = '';
    let accentcolor = '';
    let naviElementId = '';
    switch (title) {
      case 'Heilpraxis Daniela Hale':
        maincolor = '#0052cc';
        accentcolor = '#cc7a00';
        naviElementId = 'home';
        break;
      case 'innerwise®':
        maincolor = '#864a66';
        accentcolor = '#cc7a00';
        naviElementId = 'innerwise';
        break;
      case 'PSE (Psychosomatische Energetik)':
        maincolor = '#4e1f93';
        accentcolor = '#51654e';
        naviElementId = 'pse';
        break;
      case 'Gesprächspsychotherapie':
        maincolor = '#ff4d4d';
        accentcolor = '#d9a05a';
        naviElementId = 'gwg';
        break;
      case 'Ohr- und Körperkerzentherapie':
        maincolor = '#ff8000';
        accentcolor = '#d46866';
        naviElementId = 'oukk';
        break;
      case 'PT Persönlichkeitstraining':
        maincolor = '#4d004d';
        accentcolor = '#764400';
        naviElementId = 'pt';
        break;
      case 'Energetische Wirbelsäulenaufrichtung':
        maincolor = '#990099';
        accentcolor = '#d20042';
        naviElementId = 'ew';
        break;
      case 'Vibrationstraining':
        maincolor = '#89172a';
        accentcolor = '#4a5987';
        naviElementId = 'vib';
        break;
      case 'Kosten und Gebühren':
        maincolor = '#ff4d4d';
        accentcolor = '#87c5a6';
        naviElementId = 'kosten';
        break;
      case 'Kontakt':
        maincolor = '#3f51b5';
        accentcolor = '#009688';
        naviElementId = 'kontakt';
        break;
      case 'Gästebuch':
        maincolor = '#214F6E';
        accentcolor = '#8B938B';
        naviElementId = 'gb';
        break;
      case 'Aktuelles':
        maincolor = '#aa66cc';
        accentcolor = '#4a5987';
        naviElementId = 'aktuell';
        break;
      case 'Links':
        maincolor = '#864a66';
        accentcolor = '#330000';
        naviElementId = 'links';
        break;
      case 'Impressum':
        maincolor = '#905809';
        accentcolor = '#f6be6f';
        naviElementId = 'impressum';
        break;
      default:
        maincolor = '#905809';
        accentcolor = '#f6be6f';
    }

    // set font color of app elements
    let elements: any = document.querySelectorAll('.dynamic-maincolor');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = maincolor;
    }
    elements = document.querySelectorAll('.dynamic-accentcolor');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = accentcolor;
    }

    // set current navi element active
    const activeElement: HTMLElement = document.getElementById(naviElementId);
    if (activeElement != null) {
      activeElement.style.color = accentcolor;
    }
  }

  /**
   * Daniela Hales Email address
   */
  private getMyEmail(): string {
    const firstPart = 'natur-heilen';
    const domain = 'web.de';
    return firstPart + '@' + domain;
  }

  /**
   * navigate to a new subpage (without updating the page dependencies)
   */
  private routeTo(relativeUrl: string): void {
    this.router.navigate([relativeUrl]);
  }

  /**
   * navigate to the new subpage and update the page dependencies
   */
  private navigateTo(params: string[]) {
    this.routeTo(params[0]);
    this.updatePageDependencies(params[1]);
  }

  /**
   * swiper height is rendered to match the current display width settings
   */
  private resizeSwiperHeight() {
      const slides: any = document.getElementsByClassName('swiper-slide');
      const slideWraper = document.getElementById('swiper-slide-wrapper');
      if (slides.length > 0) {
        const slidewidth = slides[0].clientWidth;
        const slideHeight = slidewidth / 1200 * 190;
        slideWraper.setAttribute('height', slideHeight + 'px');
        slideWraper.style.height = slideHeight + 'px';
        for (let i = 0; i < slides.length; i++) {
          slides[i].setAttribute('height', slideHeight + 'px');
          slides[i].style.height = slideHeight + 'px';
        }
      }
  }

  /**
   * Look at the current URL and get the current subpage.
   * Input current URL.
   * Returns the title of the current subpage.
   */
  private getPageTitleFromUrl(url: string): string {
    let pageTitle = 'Heilpraxis Daniela Hale';
    if (url.endsWith('/innerwise')) {
      pageTitle = 'innerwise®';
    } else if (url.endsWith('/psychosomatische_energetik')) {
      pageTitle = 'PSE (Psychosomatische Energetik)';
    } else if (url.endsWith('/gesprächspsychotherapie')) {
      pageTitle = 'Gesprächspsychotherapie';
    } else if (url.endsWith('/gespr%C3%A4chspsychotherapie')) {
      pageTitle = 'Gesprächspsychotherapie';
    } else if (url.endsWith('/ohr-und-körperkerzentherapie')) {
      pageTitle = 'Ohr- und Körperkerzentherapie';
    } else if (url.endsWith('/ohr-und-k%C3%B6rperkerzentherapie')) {
      pageTitle = 'Ohr- und Körperkerzentherapie';
    } else if (url.endsWith('/persönlichkeitstraining')) {
      pageTitle = 'PT Persönlichkeitstraining';
    } else if (url.endsWith('/pers%C3%B6nlichkeitstraining')) {
      pageTitle = 'PT Persönlichkeitstraining';
    } else if (url.endsWith('/energetische_wirbelsäulenaufrichtung')) {
      pageTitle = 'Energetische Wirbelsäulenaufrichtung';
    } else if (url.endsWith('/energetische_wirbels%C3%A4ulenaufrichtung')) {
      pageTitle = 'Energetische Wirbelsäulenaufrichtung';
    } else if (url.endsWith('/vibrationstraining')) {
      pageTitle = 'Vibrationstraining';
    } else if (url.endsWith('/kosten')) {
      pageTitle = 'Kosten und Gebühren';
    } else if (url.endsWith('/kontakt')) {
      pageTitle = 'Kontakt';
    } else if (url.endsWith('/gästebuch')) {
      pageTitle = 'Gästebuch';
    } else if (url.endsWith('/g%C3%A4stebuch')) {
      pageTitle = 'Gästebuch';
    } else if (url.endsWith('/aktuelles')) {
      pageTitle = 'Aktuelles';
    } else if (url.endsWith('/links')) {
      pageTitle = 'Links';
    } else if (url.endsWith('/impressum')) {
      pageTitle = 'Impressum';
    }
    return pageTitle;
  }
}
