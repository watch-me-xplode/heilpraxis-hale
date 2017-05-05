import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SwiperService } from './swiper.service';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.sass']
})
export class SwiperComponent implements OnInit {
  @Output() navigate = new EventEmitter<string[]>();

  constructor(private service: SwiperService) { }

  ngOnInit() {
    // set swiper height after all necessary elements are added to the DOM
    this.resizeSwiperHeight();
    // init SwiperService
    this.service.init();
  }

  /**
   * emit the event to navigate to another subpage
   */
  private navigateTo(params: string[]) {
    this.navigate.emit(params);
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

}
