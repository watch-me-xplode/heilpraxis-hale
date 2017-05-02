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
    this.service.init();
  }

  private navigateTo(params: string[]) {
    this.navigate.emit(params);
  }

}
