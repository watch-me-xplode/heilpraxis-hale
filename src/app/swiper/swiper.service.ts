import { Injectable } from '@angular/core';

import { SwiperSlide } from './swiper-slide.model';

@Injectable()
export class SwiperService {

    private currentSlide: SwiperSlide;

    constructor() { }

    /**
     * Create slides from existing DOM Elements with class='swiper-slide'.
     * Init must be called after all necessary DOM Elements are created.
     */
    public init() {
        const slideElements = document.getElementsByClassName('swiper-slide');
        const slideArray: SwiperSlide[] = [];
        // error handling
        if (slideElements.length === 0) {
            console.log('Error: Swiper Service initialised without DOM Elements!');
        }
        // create slides
        for (let i = 0; i < slideElements.length; i++) {
            slideArray.push(new SwiperSlide(<HTMLDivElement> slideElements[i]));
            if (i > 0) {
                slideArray[i - 1].nextSlide = slideArray[i];
                slideArray[i].prevSlide = slideArray[i - 1];
            }
        }
        // connect all slides
        for (let i = 0; i < slideArray.length; i++) {
            let next = i + 1;
            let prev = i - 1;
            if (next > slideArray.length - 1) { next = 0; }
            if (prev < 0) { prev = slideArray.length - 1; }
            slideArray[i].nextSlide = slideArray[next];
            slideArray[i].prevSlide = slideArray[prev];
        }
        // set current slide
        this.currentSlide = slideArray[0];
        setInterval(() => {
            this.shiftRight();
        }, 2000);
    }

    public shiftRight() {
        this.currentSlide.domElement.classList.add('left');
        this.currentSlide.domElement.classList.remove('center');
        this.currentSlide.nextSlide.domElement.classList.add('center');
        this.currentSlide.nextSlide.domElement.classList.remove('right');
        this.currentSlide.prevSlide.domElement.classList.add('right');
        this.currentSlide.prevSlide.domElement.classList.remove('left');
        this.currentSlide = this.currentSlide.nextSlide;
    }
}
