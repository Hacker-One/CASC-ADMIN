import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ba-avatar',
    templateUrl: './baAvatar.html',
    styleUrls: ['./baAvatar.scss']
})
export class BaAvatar implements OnInit {
    @Input() avatarUrl: String;
    @Input() isCircle: boolean;
    @Input() size: number;

    ngOnInit() {
        this.CheckImgExists(this.avatarUrl);
    }

    constructor(private el: ElementRef) {
    }

    private CheckImgExists(imgurl) {
        const ImgObj = new Image();
        ImgObj.src = imgurl;
        if (ImgObj.width > 0 && ImgObj.height > 0) {
            this.avatarUrl = imgurl;
        } else {
            this.avatarUrl = '../../../assets/images/svg/profile.svg';
        }
    }
}
