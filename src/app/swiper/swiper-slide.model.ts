export class SwiperSlide {

    domElement: HTMLDivElement;
    prevSlide: SwiperSlide;
    nextSlide: SwiperSlide;

    constructor(element: HTMLDivElement) {
        this.domElement = element;
    }

}
