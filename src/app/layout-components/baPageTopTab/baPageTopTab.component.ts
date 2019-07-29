import {Component, HostListener, ElementRef, Input, AfterViewInit} from '@angular/core';
import {SwiperConfigInterface, SwiperScrollbarInterface} from "ngx-swiper-wrapper";

@Component({
    selector: 'ba-pageTop-tab',
    templateUrl: './baPageTopTab.html',
    styleUrls: ['./baPageTopTab.scss']
})
export class BaPageTopTab implements AfterViewInit {
    _tabs;
    swiperWidth;
    slideWidth;
    slidesWidth;
    config: SwiperConfigInterface;
    @Input()
    get tabs(): any[] {
        return this._tabs;
    }

    set tabs(val: any[]) {
        this._tabs = val;
        this.changeSwiper();
    }

    constructor(private elementRef: ElementRef) {
        this.changeSwiper();
    }

    @HostListener('window:resize', ['$event'])
    onChangeTab(event: any) {
        this.changeSwiper();
        this.ngAfterViewInit();
    }

    changeSwiper() {
        this.config = {
            noSwiping: true,
            slidesPerView: 3,
            spaceBetween: 0,
            observer: true,//自动初始化
            slidesPerGroup: 3,
            loop: false,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        };
        var windowWidth = document.documentElement.offsetWidth;
        if (windowWidth < 450) {
            this.config.slidesPerView = 1;
            this.config.slidesPerGroup = 1;
        } else if (windowWidth < 900 && windowWidth >= 450) {
            this.config.slidesPerView = 3;
            this.config.slidesPerGroup = 3;
        } else {
            this.config.slidesPerView = 12;
            this.config.slidesPerGroup = 12;
        }
    }

    ngAfterViewInit() {
        this.swiperWidth = this.elementRef.nativeElement.querySelector('.swiper-wrapper').offsetWidth;
        this.slideWidth = this.elementRef.nativeElement.querySelector('.swiper-slide') ? this.elementRef.nativeElement.querySelector('.swiper-slide').offsetWidth : 0;
        console.log(this.slideWidth);
        this.slidesWidth = this.slideWidth * this._tabs.length;

        if(this.slidesWidth >= this.swiperWidth){
            console.log(this.elementRef.nativeElement.querySelectorAll('.swiperButton'));
            this.elementRef.nativeElement.querySelector('.swiper-button-next').style.display = 'block';
            this.elementRef.nativeElement.querySelector('.swiper-button-prev').style.display = 'block';
        }else{
            this.elementRef.nativeElement.querySelector('.swiper-button-next').style.display = 'none';
            this.elementRef.nativeElement.querySelector('.swiper-button-prev').style.display = 'none';
        }
    }

}
