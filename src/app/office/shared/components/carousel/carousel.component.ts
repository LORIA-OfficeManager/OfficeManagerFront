import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'ngx-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    animations: [
        trigger('fade', [
            transition('void => *', [style({ opacity: 0 }), animate('200ms', style({ opacity: 1 }))]),
            transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
        ]),
    ],
})
export class CarouselComponent implements OnInit {

    constructor() { }

    current = 0;
    img_list = [
        'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg',
        'https://project.inria.fr/ekaw2018/files/2018/01/C_ju3V8XgAAxAZe.jpg-large.jpg',
        'https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_1280.jpg',
        'https://images.pexels.com/photos/3184660/pexels-photo-3184660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1500',
    ];

    ngOnInit() {
        setInterval(() => {
            this.current = ++this.current % this.img_list.length;
        }, 5000);
    }
    /*********************************************************EVENT****************************************************/
    /*******************************************************GET&SETTER*************************************************/

}
