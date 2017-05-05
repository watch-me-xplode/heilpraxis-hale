import { Injectable } from '@angular/core';

import { SwiperSlide } from './swiper-slide.model';

@Injectable()
export class SwiperService {

    private currentSlide: SwiperSlide;
    private slides: SwiperSlide[] = [];

    constructor() { }

    /**
     * Create slides from existing DOM Elements with class='swiper-slide'.
     * Init should be called after all necessary DOM Elements are created.
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
        // set current slide and slides
        this.currentSlide = slideArray[0];
        this.slides = slideArray;
        this.updateClasses();

        // start animation
        setInterval(() => {
            this.shiftRight();
        }, 5000);
    }

    /**
     * shift all slides
     */
    public shiftRight() {
        this.currentSlide = this.currentSlide.nextSlide;
        this.updateClasses();
    }

    /**
     * Jump to a new slide, which is not necesserely the next slide of the current slide.
     * All css classes will be reset and are then distributed from the beginning.
     * @param index: the position of the new slide in the slides array
     */
    public jumpTo(index: number) {
        // remove old classes and set them to right
        this.currentSlide.domElement.classList.add('right');
        this.currentSlide.domElement.classList.remove('center', 'left');
        this.currentSlide.nextSlide.domElement.classList.add('right');
        this.currentSlide.nextSlide.domElement.classList.remove('center', 'left');
        this.currentSlide.prevSlide.domElement.classList.add('right');
        this.currentSlide.prevSlide.domElement.classList.remove('center', 'left');
        // update
        this.currentSlide = this.slides[index];
        this.updateClasses();
    }

    /**
     * update the css classes of the slides
     */
    private updateClasses() {
        this.currentSlide.domElement.classList.add('left');
        this.currentSlide.domElement.classList.remove('center', 'right');
        this.currentSlide.nextSlide.domElement.classList.add('center');
        this.currentSlide.nextSlide.domElement.classList.remove('right', 'left');
        this.currentSlide.prevSlide.domElement.classList.add('right');
        this.currentSlide.prevSlide.domElement.classList.remove('left', 'center');
    }
}
